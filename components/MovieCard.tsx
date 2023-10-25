import React from 'react';

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="group col-span-1 relative h-[12vw]">
      <img
        className="
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-md
            w-full
            h-full
        "
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
    </div>
  );
};

export default MovieCard;
