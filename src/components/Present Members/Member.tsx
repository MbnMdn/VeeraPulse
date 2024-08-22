import React from 'react';

import defaultAvatar from '../../assets/avatar.png';
import { ENV } from '../../scripts/settings';

interface MemberProps {
  firstName: string;
  lastName: string;
  avatar?: string;
  checkIn: boolean;
}

const Member: React.FC<MemberProps> = ({ firstName, lastName, avatar, checkIn }) => {
  return (
    <div className="flex flex-col items-center space-x-4">
      <img
        src={ENV.apiUrl + avatar || defaultAvatar}
        alt="avatar"
        className={`rounded-full border-2 ${
          checkIn ? 'border-green-400' : 'border-red-500'
        }`}
      />
      <div>
        <h2>
          {firstName} {lastName}
        </h2>
      </div>
    </div>
  );
};

export default Member;
