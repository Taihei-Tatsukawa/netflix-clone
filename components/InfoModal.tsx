import useInfoModal from '@/hooks/useInfoModal';
import useMovie from '@/hooks/useMovie';
import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, SetIsVisible] = useState(!!visible);

  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    SetIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    SetIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="
    fixed
    inset-0
    z-50
    flex
    items-center
    justify-center
    overflow-y-auto
    overflow-x-hidden
    bg-black
    bg-opacity-80
    transition
    duration-300
  "
    >
      <div
        className="
          relative
          mx-auto
          w-auto
          max-w-3xl
          overflow-hidden
          rounded-md
        "
      >
        <div
          className={`
            ${isVisible ? 'scale-100' : 'scale-0'}
            relative
            flex-auto
            transform
            bg-zinc-900
            drop-shadow-md
            duration-300
          `}
        >
          <div className="relative h-96">
            <video
              className="
                h-full
                w-full
                object-cover
                brightness-[60%]
              "
              autoPlay
              muted
              loop
              poster={data?.thumbnailUrl}
              src={data?.videoUrl}
            ></video>
            <div
              className="
                absolute
                right-3
                top-3
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-black
                bg-opacity-70
              "
              onClick={() => {}}
            >
              <AiOutlineClose className="text-white" size={20} />
            </div>

            <div
              className="
                absolute
                bottom-[10%]
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
