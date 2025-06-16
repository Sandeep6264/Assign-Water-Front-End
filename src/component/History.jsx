import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWaterHistory } from '../fetures/waterSlice';

const History = () => {
  const [history, setHistory] = useState([]);
    let dispatch=useDispatch();
  useEffect(() => {
        dispatch(fetchWaterHistory()).unwrap()
      .then((resp)=>{
        setHistory(resp)
      }).catch(err => {
        console.error(err);
        alert("Failed to fetch history");
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Weekly Water History</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Goal</th>
            <th>Consumed</th>
            <th>Status</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => {
            const percent = ((entry.userQty / entry.defaultQty) * 100).toFixed(1);
            const isExtra = entry.remainQty < 0;
            const statusText = isExtra
              ? `Extra ${Math.abs(entry.remainQty)} ml`
              : `${entry.remainQty} ml left`;

            return (
              <tr key={entry.wid} style={{ backgroundColor: isExtra ? '#e3f2fd' : '#e8f5e9' }}>
                <td>{entry.day}</td>
                <td>{entry.defaultQty} ml</td>
                <td>{entry.userQty} ml</td>
                <td style={{ color: isExtra ? '#1565c0' : '#2e7d32' }}>{statusText}</td>
                <td>{percent}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    width: '90%',
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#fafafa',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1e88e5'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'center',
  },
  th: {
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: '10px',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ccc'
  }
};

export default History;
