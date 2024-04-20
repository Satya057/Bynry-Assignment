import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import Map from "./Map";
import { useProfiles } from "./ProfileProvider";
import { Link, Route, Routes } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import AddProfile from "./AddProfile";
import UpdateProfile from "./UpdateProfile";

const App = () => {
  const { profiles, addProfile } = useProfiles();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profilesInitialized, setProfilesInitialized] = useState(false);

  useEffect(() => {
    const profilesAreInitialized = localStorage.getItem("profilesInitialized");

    if (!profilesAreInitialized) {
      const defaultProfiles = [
        {
          name: "Varsha",
          photo: "https://e0.pxfuel.com/wallpapers/402/1007/desktop-wallpaper-varsha-telugu-actress-thumbnail.jpg",
          description: "Telugu Actress",
          summary: "Varsha is a talented Telugu actress known for her versatile roles in movies.",
          address: { lat: "52.7128", lng: "-63.789" },
        },
        {
          name: "Emma",
          photo: "https://image.tensorartassets.com/cdn-cgi/image/w=2560,f=jpeg,q=85/posts/images/667603055268617747/bdf971fa-0f1d-427a-917b-29d268f4efe9.jpg",
          description: "Fashion Model",
          summary: "Emma is a renowned fashion model known for her elegance and style.",
          address: { lat: "40.7128", lng: "-74.006" },
        },
        {
          name: "Sophia",
          photo: "https://i.pinimg.com/originals/f2/9e/da/f29eda182697e28b0bc2e76d32b7703d.jpg",
          description: "Software Engineer",
          summary: "Sophia is a skilled software engineer with expertise in web development.",
          address: { lat: "42.14706", lng: "126.54143" },
        },
        {
          name: "John",
          photo: "https://thefoomer.in/cdn/shop/products/jpeg-optimizer_PATP5156.jpg?v=1680162712",
          description: "Photographer",
          summary: "John is a talented photographer capturing moments through his lens.",
          address: { lat: "37.7749", lng: "-122.4194" },
        },
        {
          name: "Alice",
          photo: "https://i.pinimg.com/474x/38/bd/c7/38bdc7648aaf466d1f1a32d8b05c3ccb.jpg",
          description: "Graphic Designer",
          summary: "Alice is a creative graphic designer bringing ideas to life through design.",
          address: { lat: "34.0522", lng: "-118.2437" },
        },
      ];

      localStorage.setItem("profiles", JSON.stringify(defaultProfiles));
      localStorage.setItem("profilesInitialized", "true");
      setProfilesInitialized(true);
    } else {
      setProfilesInitialized(true);
    }
  }, []);

  if (!profilesInitialized) {
    return null;
  }

  const handleSummaryClick = (profile) => {
    setSelectedProfile({
      ...profile,
      address: {
        lat: parseFloat(profile.address.lat),
        lng: parseFloat(profile.address.lng),
      },
    });
  };

  return (
    <>
      <style>
        {`
          .profile-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }

          .admin-link {
            text-align: center;
            margin-bottom: 20px;
          }

          .profile {
            width: 200px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .profile img {
            width: 100%;
            border-radius: 3px;
          }

          .profile-name {
            font-weight: bold;
            margin-top: 10px;
          }

          .profile-description {
            margin-top: 5px;
          }
        `}
      </style>
      <div className="admin-link">
        <Link to={"/admin"}>Admin Panel</Link>
      </div>
      <div className="app">
        <div className="profile-container">
          {profiles.map((profile, index) => (
            <Profile
              key={index}
              name={profile.name}
              photo={profile.photo}
              description={profile.description}
              onClickSummary={() => handleSummaryClick(profile)}
            />
          ))}
        </div>
        <div className="map-container">
          {selectedProfile && (
            <Map
              center={selectedProfile.address}
              markerPosition={selectedProfile.address}
            />
          )}
        </div>
      </div>
      <Routes>
        <Route exact path="/admin" element={<AdminPanel />} />
        <Route exact path="/add" element={<AddProfile />} />
        <Route exact path="/edit/:name" element={<UpdateProfile />} />
      </Routes>
    </>
  );
};

export default App;
