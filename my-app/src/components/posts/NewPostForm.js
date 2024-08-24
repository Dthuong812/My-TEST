import React, { useState, useEffect } from "react";

const NewPostForm = ({ onAddPost, postToEdit, onCancel }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");

    useEffect(() => {
        if (postToEdit) {
            setTitle(postToEdit.title);
            setDescription(postToEdit.description);
            setTags(postToEdit.tags.join(', '));
        } else {
            setTitle("");
            setDescription("");
            setTags("");
        }
    }, [postToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tokenData = localStorage.getItem('token');
        if (!tokenData) {
            alert("No token found in localStorage");
            return;
        }

        const { accessToken } = JSON.parse(tokenData);
        if (!accessToken) {
            alert("No access token found in token data");
            return;
        }

        try {
            const method = postToEdit ? 'PATCH' : 'POST';
            const url = postToEdit ? `https://api-test-web.agiletech.vn/posts/${postToEdit.id}` : "https://api-test-web.agiletech.vn/posts";
            
            const response = await fetch(url, {
                method,
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, tags: tags.split(',').map(tag => tag.trim()) }),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
            }

            const result = await response.json();
            onAddPost(result); // Notify parent component about the new or updated post
            onCancel(); // Close the form
        } catch (error) {
            console.error("Error saving post:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded">
            <div className="mb-2">
                <label className="block mb-1" htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-2 py-1 border rounded"
                />
            </div>
            <div className="mb-2">
                <label className="block mb-1" htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full px-2 py-1 border rounded"
                />
            </div>
            <div className="mb-2">
                <label className="block mb-1" htmlFor="tags">Tags (comma-separated)</label>
                <input
                    id="tags"
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    required
                    className="w-full px-2 py-1 border rounded"
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 text-white rounded bg-button"
            >
                {postToEdit ? 'Update Post' : 'Add Post'}
            </button>
            <button
                type="button"
                onClick={onCancel}
                className="w-full py-2 mt-2 text-white bg-gray-500 rounded"
            >
                Cancel
            </button>
        </form>
    );
};

export default NewPostForm;
