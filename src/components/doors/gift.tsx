export const Gift: React.FC = () => {
  return (
    <div className='flex flex-col items-center relative'>
      <div className='w-28 h-6 bg-green-500'></div>
      <div className='w-24 h-16 bg-green-700'></div>
      <div className='w-4 h-full bg-red-700 absolute'></div>
      <div className='w-24 h-4 bg-red-700 absolute top-10'></div>
    </div>
  );
};
