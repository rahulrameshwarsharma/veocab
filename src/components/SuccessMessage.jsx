import React from 'react';

const SuccessMessage = ({ message }) => {
  return (
    <div style={{
      color: 'white',
      backgroundColor: 'green',
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '10px',
    }}>
      {message}
    </div>
  );
};

export default SuccessMessage;
