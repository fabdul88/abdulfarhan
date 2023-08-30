import React from 'react';
import { Footer } from '../Footer/Footer';
import construction from '../../assets/under_construction.svg';
import Index from './Index';

const Blog = () => {
  return (
    <>
      <main
        style={{
          fontFamily: 'MontserratB',
          background: '#ffffff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '100px 0 50px 0',
        }}
      >
        <h1>BLOG</h1>
        <Index />
        <img
          src={construction}
          alt=""
          style={{ width: '60vw', height: '60vh', padding: '15px' }}
        />
      </main>
      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: ' #252525',
          width: '100vw',
        }}
      >
        <Footer />
      </footer>
    </>
  );
};

export { Blog };
