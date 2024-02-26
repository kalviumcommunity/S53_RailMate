import React, { useContext, useState } from 'react';
import { AppContext } from './ParentContext';
const TrainDataChange = () => {
    const {setUpdate}=useContext(AppContext)
  const [input1, setInput1] = useState('');

  const [errors, setErrors] = useState({
    input1: '',
  });

  const validateInputs = () => {
    let isValid = true;
    const newErrors = {
      input1: '',
    };

    // Validate input1
    if (input1.trim() === '') {
      newErrors.input1 = 'Review is required';
      isValid = false;
    }
    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      console.log('Form submitted:', { input1 });
    } else {
      console.log('Form has validation errors');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8civya_kO7B0NTbPEkh9ZdTTF7BvJU3Y5TPO6hxAH1g&s" onClick={()=>{setUpdate(false)}} width={"30px"} style={{
            cursor:"pointer"
        }}alt="" />
        <div style={styles.formGroup}>
          <label htmlFor="input1" style={styles.label}>
            Rating:
          </label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            style={styles.input}
          />
          <div style={styles.errorMessage}>{errors.input1}</div>
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  form: {
    width: '300px',
    padding: '20px 20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  errorMessage: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};

export default TrainDataChange;
