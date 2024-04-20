'use client';

import { CardDoor } from '@/components/doors/card';
import Link from 'next/link';
import { useState } from 'react';

export default function Doors() {
  const [qtdDoor, setQtdDoor] = useState(0);

  function dec() {
    setQtdDoor(qtdDoor - 1);
  }

  function inc() {
    setQtdDoor(qtdDoor + 1);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div>
        <div className='w-72 h-72 p-1 grid grid-cols-1 gap-1  '>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-1 justify-center min-h-36'>
            <CardDoor className='bg-red-500'>
              <h1 className='text-4xl'>Monty Hall</h1>
            </CardDoor>
            <CardDoor className='bg-gray-100 flex flex-col justify-between'>
              <label className='text-gray-700 w-full ' htmlFor=''>
                Qtd: Portas
              </label>
              <input
                value={qtdDoor}
                onChange={e => setQtdDoor(+e.target.value)}
                className='w-full text-gray-500 px-2 py-1 placeholder-gray-300  rounded-sm text-4xl'
                type='text'
                name=''
                id=''
              />
              <div className='w-full flex gap-2'>
                <button
                  className='flex items-center justify-ecnter text-gray-700 p-1 w-full h-8 bg-red-500 rounded-md'
                  onClick={dec}
                >
                  <span className='w-full text-white text-2xl font-semibold'>
                    -
                  </span>
                </button>
                <button
                  className='flex items-center justify-center text-gray-700 p-1 w-full h-8 bg-green-500 rounded-md'
                  onClick={inc}
                >
                  <span className='w-full text-white text-2xl font-semibold'>
                    +
                  </span>
                </button>
                <button>-</button>
              </div>
            </CardDoor>
          </div>
          <CardDoor className='bg-green-500 min-h-36'>
            <Link
              href={`/doors/player/${qtdDoor}`}
              className='flex items-center justify-center w-full h-full text-4xl font-bold'
            >
              Start
            </Link>
          </CardDoor>
        </div>
      </div>
    </div>
  );
}
