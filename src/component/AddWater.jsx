import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWaterDetails } from '../fetures/waterSlice';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const AddWater = () => {
  const [qty, setQty] = useState('');
  const [target, setTarget] = useState(2000);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = (amount) => {
    const finalQty = amount || qty;

    if (!finalQty || isNaN(finalQty)) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please enter a valid quantity",
      });
      return;
    }

    dispatch(fetchWaterDetails({finalQty,target})).unwrap().then((data) => {
      if (data.status) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message,
        });
      }
    });
  };

  const handleTargetChange = (e) => {
   setTarget(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add Water Intake</h2>

      <div style={styles.section}>
        <label style={styles.label}>Set Daily Target (ml)</label>
        <input
          type="number"
          value={target}
          onChange={handleTargetChange}
          style={styles.input}
        />
      </div>

      <div style={styles.buttonGroup}>
        {[250, 500, 750, 1000].map((val) => (
          <button
            key={val}
            style={styles.quickButton}
            onClick={() => handleAdd(val)}
          >
            +{val} ml
          </button>
        ))}
      </div>

      <input
        type="number"
        placeholder="Custom amount (ml)"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        style={styles.input}
      />
      <button onClick={() => handleAdd()} style={styles.button}>
        Add
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: '350px',
    margin: '60px auto',
    padding: '20px',
    borderRadius: '10px',
    background: '#f0f8ff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Segoe UI',
  },
  title: {
    marginBottom: '20px',
    color: '#1565c0',
    fontWeight: 'bold',
    fontSize: '22px',
  },
  section: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  },
  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '15px',
  },
  quickButton: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#2196f3',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  input: {
    width: '90%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AddWater;
