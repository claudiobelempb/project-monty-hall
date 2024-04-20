import DoorModel from '@/model/DoorModel';
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import ImgClonw from '../../../public/happy-clown.jpeg';
import { Gift } from './gift';

type DoorProps = {
  value: DoorModel;
  onChange: (door: DoorModel) => void;
};

type StyledProps = {
  border: 'border-yellow-400' | 'border-orange-800';
  color: 'tex-yellow-400' | 'text-orange-800';
  background: 'bg-yellow-400' | 'bg-orange-800';
};

export const Door: React.FC<DoorProps> = ({ value, onChange }) => {
  const BORDER =
    value.isSelected && !value.isOpen
      ? 'border-yellow-400'
      : 'border-orange-800';
  const COLOR =
    value.isSelected && !value.isOpen ? 'text-yellow-400' : 'text-orange-800';

  const BACKGROUNG =
    value.isSelected && !value.isOpen ? 'bg-yellow-400' : 'bg-orange-800';

  const OPEN = value.isOpen ? 'bg-black bg-opacity-50' : 'bg-orange-600';

  const CLOSE =
    value.close && value.isSelected ? '' : 'disabled cursor-not-allowed';

  const handleToggleSelected: MouseEventHandler<HTMLDivElement> = e =>
    onChange(value.toggleSelected());

  const handleOpen: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    onChange(value.openDoor());
  };

  function renderDoor() {
    return (
      <div
        className={`flex flex-col flex-1 items-center p-4 ${BORDER}  cursor-pointer`}
      >
        <div className={`text-5xl ${COLOR}`}>{value.display}</div>
        <div
          onClick={handleOpen}
          className={`w-5 h-5 rounded-full ${BACKGROUNG} absolute top-36 self-start cursor-pointer`}
        ></div>
      </div>
    );
  }

  return (
    <div
      className='flex flex-col items-center w-48 h-72 relative'
      onClick={handleToggleSelected}
    >
      <div
        className={`flex flex-1 flex-col-reverse border-l-8 border-t-8 border-r-8 ${BORDER} w-11/12 ${OPEN}`}
      >
        {value.close ? (
          renderDoor()
        ) : value.hasGift ? (
          <Gift />
        ) : (
          <div className='flex items-center justify-center h-full bg-white'>
            <Image
              className='w-28 h-40 mb-4 bg-white'
              src={ImgClonw}
              alt='Clonw'
            />
          </div>
        )}
      </div>
      <div className={`w-full h-2 bg-orange-800`}></div>
    </div>
  );
};
