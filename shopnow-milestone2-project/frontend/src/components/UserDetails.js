import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// This component fetches user details from the backend API using the id from the URL.
function UserDetails() {
  const { id } = useParams();
  // This state holds the user data from the server.
  const [user, setUser] = useState(null);
  // This state holds a simple loading flag.
  const [loading, setLoading] = useState(true);
  // This state holds any error message that might happen during fetch.
  const [error, setError] = useState("");

  useEffect(() => {
    // This function calls the backend endpoint to get the user details.
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:4000/users/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user details from server");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (error) {
    return <p>There was an error: {error}</p>;
  }

  if (!user) {
    return <p>No user data found.</p>;
  }

  return (
    <div className="user-details-box">
      <h2>User Details</h2>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
