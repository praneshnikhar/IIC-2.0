import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Ambassador Gallery</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        {/* Example Card */}
        <div style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <img src="https://via.placeholder.com/300" alt="Ambassador" style={{ width: '100%' }} />
          <div style={{ padding: '1rem' }}>
            <h2 style={{ fontSize: '1.2rem', margin: '0' }}>Ambassador Name</h2>
            <p style={{ color: '#666' }}>Some description or role</p>
          </div>
        </div>
        {/* Copy and paste more cards here */}
      </div>
    </div>
  );
}

export default App;
