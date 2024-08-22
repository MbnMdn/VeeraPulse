import React, { useEffect, useState } from 'react';

import api from '../../scripts/api';
import { ENV } from '../../scripts/settings';
import Member from './Member';
import { RealTime } from './RealTime';

interface MemberData {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  career: string;
  checkIn: boolean;
}

export default function PresentMembersSection() {
  const [members, setMembers] = useState<MemberData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // Fetch the members data
        const response = await api.get('http://192.168.100.162/api/v1/Staff/All', {
          params: {
            Branch: '54d5ca8b-37ad-4217-ab03-6ce94431747a',
            Department: '9e565460-b443-48c7-b237-06f5a2077a5a',
          },
          headers: {
            Authorization: ENV.token,
          },
        });

        const membersData = response?.data?.list;

        // Fetch the check-in data
        const allMembers = await api.get(
          'http://192.168.100.162:8080/api/v1/StaffAttendance/LastSeen',
          {
            params: {},
          },
        );

        const checkInData = allMembers?.data;

        // Merge the check-in data with the members data
        const mergedMembers = membersData.map((member: MemberData) => {
          const checkInInfo = checkInData.find(
            (checkInMember: any) => checkInMember.id === member.id,
          );
          return {
            ...member,
            checkIn: checkInInfo ? checkInInfo.checkIn : false,
          };
        });

        setMembers(mergedMembers);
      } catch (err) {
        setError('Failed to fetch members');
      }
    };

    fetchMembers();
  }, []);

  const updateCheckInStatus = (updatedMember: MemberData) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === updatedMember.id
          ? { ...member, checkIn: updatedMember.checkIn }
          : member,
      ),
    );
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <RealTime updateCheckInStatus={updateCheckInStatus} />
      <div className="grid grid-cols-20 gap-3">
        {members.length > 0 ? (
          members.map((member) => (
            <Member
              key={member.id}
              firstName={member.firstName}
              lastName={member.lastName}
              avatar={member.avatar}
              checkIn={member.checkIn}
            />
          ))
        ) : (
          <p>No members found</p>
        )}
      </div>
    </div>
  );
}
