import { ComponentProps } from 'react';

type CardDoorProps = ComponentProps<'div'>;

export const CardDoor: React.FC<CardDoorProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={`${className} p-2 flex items-center rounded-sm`}>
      {props.children}
    </div>
  );
};
