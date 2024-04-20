import React from 'react';

const Profile = ({ name, photo, description, onClickSummary }) => {
  return (
    <div style={styles.card}>
      <div style={styles.innerCard}>
        <img src={photo} alt={name} style={styles.image} />
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.description}>{description}</p>
        <button style={styles.button} onClick={onClickSummary}>Summary</button>
      </div>
    </div>
  );
};

export default Profile;

const styles = {
  card: {
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '18%',
    marginBottom: '20px',
    marginRight: '2%',
    boxSizing: 'border-box',
  },
  innerCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '3px',
  },
  name: {
    fontWeight: 'bold',
    marginTop: '10px',
    marginBottom: '5px',
    fontSize: '16px',
  },
  description: {
    marginBottom: '10px',
    fontSize: '14px',
    lineHeight: '1.2',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};
