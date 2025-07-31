import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import BadgeWallet from './components/BadgeWallet';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UserProfile />
        <BadgeWallet />
      </main>
    </div>
  );
}

export default App;