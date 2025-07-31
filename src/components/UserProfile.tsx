import React from "react";
import { User } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="flex justify-center">
      <div className="mb-12">
        <div className="flex items-center space-x-6">
          {/* Profile Image */}
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-gray-400" />
          </div>

          {/* User Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Nishanth M
            </h1>
            <p className="text-gray-600"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
