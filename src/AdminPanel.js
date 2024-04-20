import React from "react";
import { useProfiles } from "./ProfileProvider";
import { Link } from "react-router-dom";

function AdminPanel() {
  const { profiles, deleteProfile } = useProfiles();

  const handleDeleteProfile = (name) => {
    deleteProfile(name);
  };

  return (
    <div className="admin-panel-container">
      <Link to={"/add"} className="add-link">
        Add
      </Link>
      <h2>Admin Dashboard</h2>
      <table className="profile-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={index}>
              <td>{profile.name}</td>
              <td>
                <img
                  src={profile.photo}
                  alt={profile.name}
                  width="50"
                  className="profile-image"
                />
              </td>
              <td>{profile.description}</td>
              <td>
                <button
                  onClick={() => handleDeleteProfile(profile.name)}
                  className="delete-button"
                >
                  Delete
                </button>
                <Link to={`/edit/${profile.name}`} className="edit-link">
                  <button className="edit-button">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .admin-panel-container {
          margin: 20px;
        }

        .add-link {
          display: block;
          margin-bottom: 10px;
        }

        .profile-table {
          width: 100%;
          border-collapse: collapse;
        }

        .profile-table th,
        .profile-table td {
          border: 1px solid #ccc;
          padding: 8px;
        }

        .profile-image {
          border-radius: 50%;
        }

        .delete-button,
        .edit-button {
          padding: 5px 10px;
          margin-right: 5px;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }

        .edit-link {
          text-decoration: none;
        }

        .edit-button {
          background-color: #007bff;
          color: #fff;
        }

        .edit-button:hover {
          background-color: #0056b3;
        }

        .delete-button {
          background-color: #dc3545;
          color: #fff;
        }

        .delete-button:hover {
          background-color: #c82333;
        }
      `}</style>
    </div>
  );
}

export default AdminPanel;
