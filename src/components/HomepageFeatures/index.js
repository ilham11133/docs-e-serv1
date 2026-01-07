import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Documentation">
      <main style={{
        backgroundColor: '#000000', // Polos Hitam
        height: '90vh', // Menyesuaikan tinggi layar (dikurangi navbar jika ada)
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      }}>
        {/* Logo Kamu - Pastikan path gambarnya benar di folder static/img/ */}
        <img 
          src="img/logo.png" 
          alt="Logo" 
          style={{ width: '150px', marginBottom: '20px' }} 
        />
        
        {/* Teks Documentation */}
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          letterSpacing: '5px',
          textTransform: 'uppercase' 
        }}>
          DOCUMENTATION
        </h1>
      </main>
    </Layout>
  );
}