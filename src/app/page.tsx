'use client';

import { CardDoor } from '@/components/doors/card';
import Link from 'next/link';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function Home() {
  const [qtdDoor, setQtdDoor] = useState(4);

  const dec = () => {
    if (qtdDoor <= 1) return;

    setQtdDoor(qtdDoor - 1);
  };
  const inc = () => {
    if (qtdDoor >= 10) return;
    setQtdDoor(qtdDoor + 1);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div>
        <div className='w-72 h-72 p-1 grid grid-cols-2 gap-1  md:grid-cols-1'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-1 min-h-36'>
            <CardDoor className='bg-red-500'>
              <h1 className='text-4xl'>Monty Hall</h1>
            </CardDoor>
            <CardDoor className='bg-white flex flex-col justify-between py-3'>
              <h2 className='text-black w-full text-xs'>Number of doors?</h2>
              <span
                onChange={door => setQtdDoor(+door)}
                className='w-full text-black text-6xl text-center font-semibold'
              >
                {qtdDoor}
              </span>
              <div className='w-full flex gap-2'>
                <button
                  disabled={qtdDoor <= 1}
                  className={`flex items-center p-1 w-full h-8 bg-gray-300 rounded-md hover:bg-gray-400 transition-all duration-150 disabled:cursor-not-allowed`}
                  onClick={dec}
                >
                  <FaMinus className='w-full text-black text-sm font-semibold' />
                </button>
                <button
                  disabled={qtdDoor >= 10}
                  className={`flex items-center justify-center p-1 w-full h-8 bg-gray-300 rounded-md hover:bg-gray-400 transition-all duration-150 disabled:cursor-not-allowed`}
                  onClick={inc}
                >
                  <FaPlus className='w-full text-black text-sm font-semibold' />
                </button>
              </div>
            </CardDoor>
          </div>
          <CardDoor className='bg-teal-500 min-h-36 hover:bg-teal-600 transition-all duration-150 '>
            <Link
              href={`/player/${qtdDoor}`}
              className='flex items-center justify-center w-full h-full text-4xl font-bold uppercase text-white '
            >
              Start
            </Link>
          </CardDoor>
        </div>
      </div>
    </div>
  );
}
