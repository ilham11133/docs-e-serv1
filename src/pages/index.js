import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // Menambahkan noFooter agar tampilan benar-benar polos hitam sampai bawah
    <Layout title={`Hello from ${siteConfig.title}`} noFooter={true}>
      <main style={{
        backgroundColor: '#000000',
        minHeight: '100vh', // Menggunakan minHeight agar hitam penuh
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '2rem'
      }}>
        {/* Logo - Pastikan file logo ada di static/img/logo.png */}
        <img 
          src="img/logo.png" 
          alt="Logo" 
          style={{ 
            width: '120px', 
            marginBottom: '1rem',
            filter: 'brightness(0) invert(1)' // Memastikan logo putih jika aslinya hitam
          }} 
        />
        
        <h1 style={{ 
          fontSize: 'clamp(2rem, 8vw, 4rem)', 
          fontWeight: '800', 
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          margin: 0
        }}>
          DOCUMENTATION
        </h1>
      </main>
    </Layout>
  );
}