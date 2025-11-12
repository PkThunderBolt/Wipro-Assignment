import React from "react";
import useFetch from "../hooks/useFetch";

export default function DataDisplay() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p className="info">Loading data...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="data-container">
      <h2>Fetched Posts</h2>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
