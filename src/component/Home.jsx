import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>💧 Water Tracker</h1>
      <p style={styles.subheading}>Track your daily water intake</p>

      <div style={styles.navBox}>
        <Link to="/add" style={styles.navItem}>➕ Add Water</Link>
        <Link to="/status" style={styles.navItem}>📊 Status</Link>
        <Link to="/history" style={styles.navItem}>📅 History</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '60px auto',
    padding: '30px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  subheading: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  },
  navBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  navItem: {
    padding: '15px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    borderRadius: '8px',
    transition: 'background 0.3s',
  },
};

export default Home;
