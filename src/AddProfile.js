import { useState } from "react";
import { useProfiles } from "./ProfileProvider";

function AddProfile() {
  const { addProfile } = useProfiles();
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: { lat: "", lng: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "lat" || name === "lng") {
      setNewProfile({
        ...newProfile,
        address: {
          ...newProfile.address,
          [name]: value,
        },
      });
    } else {
      setNewProfile({
        ...newProfile,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(newProfile);
    setNewProfile({
      name: "",
      photo: "",
      description: "",
      address: { lat: "", lng: "" },
    });
    window.location.replace("/");
  };

  return (
    <div className="form-container">
      <h2>Add New Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newProfile.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Photo URL:</label>
          <input
            type="text"
            name="photo"
            value={newProfile.photo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newProfile.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Latitude:</label>
          <input
            type="text"
            name="lat"
            value={newProfile.address.lat}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Longitude:</label>
          <input
            type="text"
            name="lng"
            value={newProfile.address.lng}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
}

export default AddProfile;

const styles = `
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  text-align: center;
}

.form-container label {
  display: block;
  margin-bottom: 5px;
}

.form-container input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.form-container button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.form-container button[type="submit"]:hover {
  background-color: #0056b3;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
