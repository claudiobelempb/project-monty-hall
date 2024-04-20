'use client';

import { Door } from '@/components/doors/door';
import DoorModel from '@/model/DoorModel';
import { createDoor, updateDoor } from '@/utils/functions/fnDoor';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useEffect, useState } from 'react';

export default function PlayerPage() {
  const [doors, setDoors] = useState<DoorModel[]>([]);
  const params = useParams();

  useEffect(() => {
    const param = +params.doors;
    setDoors(createDoor(param, Math.floor(Math.random() * param) + 1));
  }, [params.doors]);

  function renderDoors() {
    return doors.map(d => (
      <Door
        key={d.display}
        value={d}
        onChange={r => setDoors(updateDoor(doors, r))}
      />
    ));
  }

  return (
    <div className='flex flex-col  items-center justify-center min-h-screen mb-10'>
      <div className='flex items-center justify-center my-10 w-full'>
        <Link href={'/'}>
          <button className='bg-red-600 text-white text-xl px-3 py-1 rounded-md hover:bg-red-800 transition-all duration-150'>
            Reset Player
          </button>
        </Link>
      </div>
      <div className='grid place-content-center place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3 mx-4'>
        {renderDoors()}
      </div>
    </div>
  );
}
