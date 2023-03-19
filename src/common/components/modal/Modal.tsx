import useOnClickOutside from '@/common/hooks/DetectClickOutside';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleOpen } from '@/store/slices/modalSlice';
import { useRef } from 'react';
import img from '@/assets/close.png';
interface ModalProps {
  children: any;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => dispatch(toggleOpen()));
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40 flex items-center justify-center">
      <div
        ref={ref}
        className="relative p-4  bg-[#faeee6] rounded-xl shadow-lg "
      >
        <button
          onClick={() => dispatch(toggleOpen())}
          className="absolute top-[-15px] right-[-5px] bg-white sm:right-[-15px] rounded-full w-10 h-10 cursor-pointer flex justify-center items-center shadow-lg"
        >
          <img className="w-5 " src={img} alt="close-icon" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
