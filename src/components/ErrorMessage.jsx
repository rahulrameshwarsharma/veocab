import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div style={{
      color: 'white',
      backgroundColor: 'red',
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '10px',
    }}>
      {message}
    </div>
  );
};

export default ErrorMessage;
