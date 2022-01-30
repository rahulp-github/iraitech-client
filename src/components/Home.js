import React from 'react';
// import Navbar from './Navbar';
// import Register from './Register';
import Welcome from './Welcome';

export default function Home({isAuthenticated,username,handleLogout}) {
  return (
      <>
        <Welcome isAuthenticated={isAuthenticated} username={username} handleLogout={handleLogout}/>
      </>
  );
}
