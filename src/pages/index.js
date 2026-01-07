import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Documentation" noFooter={true}>
      <main style={{
        backgroundColor: '#000000',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}>
        {/* Kontainer Logo */}
        <div style={{ marginBottom: '20px' }}>
          <img 
            src="img/logo.png" 
            alt="Logo" 
            style={{ 
              width: '150px', 
              height: 'auto',
              display: 'block'
            }} 
            /* Menangani jika logo tidak ditemukan */
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/150?text=LOGO';
            }}
          />
        </div>
        
        {/* Teks Documentation */}
        <h1 style={{ 
          fontSize: 'clamp(2rem, 10vw, 4rem)', 
          fontWeight: 'bold', 
          letterSpacing: '8px',
          textTransform: 'uppercase',
          margin: 0,
          fontFamily: 'sans-serif'
        }}>
          DOCUMENTATION
        </h1>
      </main>
    </Layout>
  );
}