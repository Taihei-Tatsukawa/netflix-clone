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
            h-[12vw]
            w-full
            cursor-pointer
            rounded-md
            object-cover
            shadow-xl
            transition
            delay-300
            group-hover:opacity-90
            sm:group-hover:opacity-0
        "
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div
        className="
          invisible
          absolute
          top-0
          z-10
          w-full
          scale-0
          opacity-0
          transition
          delay-300
          duration-200
          group-hover:-translate-y-[6vw]
          group-hover:translate-x-[2vw]
          group-hover:scale-110
          group-hover:opacity-100
          sm:invisible
        "
      >
        <img
          className="
              duration
              h-[12vw]
              w-full
              cursor-pointer
              rounded-t-md
              object-cover
              shadow-xl
              transition
            "
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />
      </div>
    </div>
  );
};

export default MovieCard;
