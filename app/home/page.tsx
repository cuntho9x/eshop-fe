// pages/home.tsx
import React from 'react';
import Header from '../components/layout/Header/Header';
import Sibar from '../components/layout/Sibar/Sibar';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Sibar/>
      <main>
        {/* Nội dung chính */}
      </main>
    </>
  );
};

export default Home;
