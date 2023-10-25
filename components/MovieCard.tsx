import React from 'react';

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="group  relative col-span-1 h-[12vw]">
      <img
        className="
            duration
            h-full
            w-full
            cursor-pointer
            rounded-md
            object-cover
            shadow-xl
            transition
        "
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
    </div>
  );
};

export default MovieCard;
