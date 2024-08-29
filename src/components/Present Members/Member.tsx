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
    <div className="flex flex-col items-center space-x-4 ">
      <img
        src={ENV.apiUrl + avatar || defaultAvatar}
        alt="avatar"
        className={`rounded-full border-4 ${
          checkIn ? 'border-green-600' : 'border-red-500'
        }`}
      />
    </div>
  );
};

export default Member;
