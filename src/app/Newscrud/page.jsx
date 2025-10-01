"use client";
import React, { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">News Dashboard</h2>
        <button
          onClick={() => setActiveTab("add")}
          className={`p-2 rounded mb-2 text-left ${
            activeTab === "add" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
        >
          ➕ Add News
        </button>
        <button
          onClick={() => setActiveTab("update")}
          className={`p-2 rounded mb-2 text-left ${
            activeTab === "update" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
        >
          ✏️ Update News
        </button>
        <button
          onClick={() => setActiveTab("delete")}
          className={`p-2 rounded mb-2 text-left ${
            activeTab === "delete" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
        >
          🗑️ Delete News
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        {activeTab === "add" && <AddNews />}
        {activeTab === "update" && <UpdateNews />}
        {activeTab === "delete" && <DeleteNews />}
      </div>
    </div>
  );
}

/* 🔹 Add News Component */
function AddNews() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    const res = await fetch("http://localhost:5000/api/news", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert("✅ News Added: " + data.title);

    setTitle("");
    setDescription("");
    setImage(null);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add News</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add News
        </button>
      </form>
    </div>
  );
}

/* 🔹 Update News Component */
function UpdateNews() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (title) formData.append("title", title);
    if (description) formData.append("description", description);
    if (image) formData.append("image", image);

    const res = await fetch(`http://localhost:5000/api/news/${id}`, {
      method: "PUT",
      body: formData,
    });

    const data = await res.json();
    alert("✅ News Updated: " + data.title);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Update News</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="News ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update News
        </button>
      </form>
    </div>
  );
}

/* 🔹 Delete News Component */
function DeleteNews() {
  const [id, setId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/news/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    alert("🗑️ Deleted: " + data.message);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Delete News</h2>
      <form onSubmit={handleDelete} className="space-y-4">
        <input
          type="text"
          placeholder="News ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete News
        </button>
      </form>
    </div>
  );
}
