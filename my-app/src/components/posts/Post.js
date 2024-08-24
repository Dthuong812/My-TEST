import React, { useEffect, useState } from "react";

const postsUrl = "https://api-test-web.agiletech.vn/posts/";

const Post = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editPost, setEditPost] = useState(null); 
    const [formData, setFormData] = useState({ title: '', description: '', tags: '' });

    useEffect(() => {
        refreshData();
    }, []);

    const refreshData = async () => {
        try {
            const result = await getList();
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const getList = async () => {
        const tokenData = localStorage.getItem('token');
        if (!tokenData) {
            throw new Error("No token found in localStorage");
        }
        
        const { accessToken } = JSON.parse(tokenData);
        
        if (!accessToken) {
            throw new Error("No access token found in token data");
        }
        
        try {
            const response = await fetch(postsUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
            }

            const result = await response.json();
            if (result && Array.isArray(result.posts)) {
                return result.posts;
            } else {
                throw new Error("Expected 'posts' array but received something else");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    };

    const handleEdit = (id) => {
        const postToEdit = data.find(post => post.id === id);
        if (postToEdit) {
            setEditPost(id);
            setFormData({
                title: postToEdit.title,
                description: postToEdit.description,
                tags: postToEdit.tags.join(', '),
            });
        }
    };

    const handleSubmitEdit = async (e) => {
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
            const response = await fetch(`${postsUrl}${editPost}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    tags: formData.tags.split(',').map(tag => tag.trim())
                }),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
            }

            const result = await response.json();
            console.log("Edit response:", result);

            // Refresh the data after successful edit
            refreshData();
            setEditPost(null);
        } catch (error) {
            console.error("Edit error:", error);
        }
    };

    const handleDelete = async (id) => {
        const tokenData = localStorage.getItem('token');
        if (!tokenData) {
            console.error("No token found in localStorage");
            return;
        }
    
        const { accessToken } = JSON.parse(tokenData);
        if (!accessToken) {
            console.error("No access token found in token data");
            return;
        }
    
        if (!id) {
            console.error("Invalid ID provided for deletion");
            return;
        }
    
        try {
            const url = `${postsUrl}${id}`;
    
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
            }
    
            console.log("Item deleted successfully");
            setData(data.filter(item => item.id !== id));
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="p-4 mx-auto">
            {editPost && (
                <form onSubmit={handleSubmitEdit} className="p-4 mb-4 border rounded">
                    <div className="mb-2">
                        <label className="block mb-1" htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            className="w-full px-2 py-1 border rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1" htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            className="w-full px-2 py-1 border rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1" htmlFor="tags">Tags (comma-separated)</label>
                        <input
                            id="tags"
                            name="tags"
                            type="text"
                            value={formData.tags}
                            onChange={handleInputChange}
                            required
                            className="w-full px-2 py-1 border rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-500 rounded"
                    >
                        Update Post
                    </button>
                </form>
            )}
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="w-1/5 px-4 py-2 cursor-pointer">ID</th>
                        <th className="w-1/5 px-4 py-2 cursor-pointer">Title</th>
                        <th className="w-1/5 px-4 py-2 cursor-pointer">Description</th>
                        <th className="w-1/5 px-4 py-2 cursor-pointer">Tags</th>
                        <th className="w-1/5 px-4 py-2 cursor-pointer">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td className="px-4 py-2 border">{item.id}</td>
                                <td className="px-4 py-2 border">{item.title}</td>
                                <td className="px-4 py-2 border">{item.description}</td>
                                <td className="px-4 py-2 border">{item.tags.join(', ')}</td>
                                <td className="px-4 py-2 border">
                                    <button
                                        className="mx-2"
                                        onClick={() => handleEdit(item.id)}
                                    >
                                        <i className="fa-regular fa-pen-to-square" style={{ color: '#9c69e2' }}></i>
                                    </button>
                                    <button
                                        className="mx-2"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <i className="fa-solid fa-trash" style={{ color: '#9c69e2' }}></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="px-4 py-2 border">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Post;
