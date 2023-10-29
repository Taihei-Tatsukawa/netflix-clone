import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  return (
    <div
      className="
        group/item
        flex
        h-6
        w-6
        cursor-pointer
        items-center
        justify-center
        rounded-full
        border-2
        border-white
        transition
        hover:border-neutral-300
        lg:h-10
        lg:w-10
      "
    >
      <AiOutlinePlus className="text-white" size={25} />
    </div>
  );
};

export default FavoriteButton;
