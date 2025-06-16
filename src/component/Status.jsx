import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWaterStatus } from '../fetures/waterSlice';

const Status = () => {
  const [data, setData] = useState({
    userQty: 0,
    defaultQty: 0,
    remainQty: 0,
    day: '',
  });
  let dispatch=useDispatch();
  useEffect(() => {
    dispatch(fetchWaterStatus()).unwrap().then((resp)=>{
       setData({...data,day:resp.day,userQty:resp.userQty,defaultQty:resp.defaultQty,remainQty:resp.remainQty}).catch((err) => {
        console.error(err);
        alert("Failed to fetch status");
      });
    });
  }, []);

  const percent = ((data.userQty / data.defaultQty) * 100).toFixed(1);
  const isExtra = data.remainQty < 0;
  const remainingDisplay = isExtra
    ? `Extra ${Math.abs(data.remainQty)} ml`
    : `${data.remainQty} ml left`;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{data.day}'s Water Status</h2>
      <div style={styles.card}>
        <p><strong>Goal:</strong> {data.defaultQty} ml</p>
        <p><strong>Consumed:</strong> {data.userQty} ml</p>
        <p><strong>{isExtra ? 'Extra Water' : 'Remaining'}:</strong> {remainingDisplay}</p>
        <p><strong>Completed:</strong> {percent}%</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '320px',
    margin: '100px auto',
    padding: '20px',
    backgroundColor: '#f1f8e9',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Segoe UI'
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#33691e'
  },
  card: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#333'
  }
};

export default Status;
