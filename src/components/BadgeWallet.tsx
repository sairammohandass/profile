import React from 'react';
import BadgeCard from './BadgeCard';
import { badges } from '../data/badges';

const BadgeWallet = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Badge Wallet</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {badges.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>
    </div>
  );
};

export default BadgeWallet;