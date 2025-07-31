import React from "react";
import { Badge } from "../types/badge";

interface BadgeCardProps {
  badge: Badge;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge }) => {
  return (
    <a href={badge.link} target="_blank" rel="noopener noreferrer">
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
        {/* Badge Image */}
        <div className="flex justify-center mb-4">
          <img
            src={badge.imageUrl}
            alt={badge.title}
            className="w-20 h-20 object-contain group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Badge Content */}
        <div className="text-center">
          <h3 className="font-semibold text-gray-900 text-sm leading-5 mb-2 line-clamp-3">
            {badge.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3">{badge.issuer}</p>

          {/* Expiration Status */}
          <div className="text-xs">
            {badge.isExpired ? (
              <span className="text-red-600 font-medium">
                Expired {badge.expirationDate}
              </span>
            ) : (
              <span className="text-green-600 font-medium">
                Valid until {badge.expirationDate}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default BadgeCard;
