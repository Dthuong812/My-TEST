import React, { useState, useEffect } from "react";
import Buttons from "../button/Buttons";
import Input from "../input/Input";
import Post from "./Post";
import NewPostForm from "./NewPostForm";

const PagePost = () => {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchTags, setSearchTags] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [data, setData] = useState([]);
    const [editingPost, setEditingPost] = useState(null); // State to manage the post being edited

    const fetchData = async () => {
        try {
            const response = await fetch('https://api-test-web.agiletech.vn/posts/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const result = await response.json();
                setData(result.posts);
            } else {
                console.error('Failed to fetch posts');
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddPost = async (newPost) => {
        try {
            const response = await fetch('https://api-test-web.agiletech.vn/posts/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });

            if (response.ok) {
                await fetchData(); // Refresh data
                setShowForm(false);
            } else {
                console.error('Failed to add post');
            }
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    const handleEdit = async (id, updatedPost) => {
        try {
            const response = await fetch(`https://api-test-web.agiletech.vn/posts/${id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost),
            });

            if (response.ok) {
                await fetchData(); // Refresh data
                setEditingPost(null);
                setShowForm(false);
            } else {
                console.error('Failed to edit post');
            }
        } catch (error) {
            console.error('Error editing post:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditingPost(null);
        setShowForm(false); // Hide the form
    };

    return (
        <div className="w-full col-span-3 p-8">
            <div className="grid justify-between w-full grid-cols-3 gap-10 mb-4">
                <div className="w-full max-w-[208.7px] h-[50px]">
                    <Buttons onClick={() => { setEditingPost(null); setShowForm(true); }}>
                        Add new
                    </Buttons>
                </div>
                <div className="grid items-center justify-between grid-cols-2 col-span-2 gap-10">
                    <Input
                        type="text"
                        placeholder="Title"
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Tags"
                        value={searchTags}
                        onChange={(e) => setSearchTags(e.target.value)}
                    />
                </div>
            </div>
            {showForm && (
                <NewPostForm
                    onAddPost={handleAddPost}
                    postToEdit={editingPost}
                    onCancel={handleCancelEdit}
                    onSuccess={fetchData} 
                />
            )}
            <Post
                data={data}
                onEdit={handleEdit}
                searchTitle={searchTitle}
                searchTags={searchTags}
            />
        </div>
    );
};

export default PagePost;
