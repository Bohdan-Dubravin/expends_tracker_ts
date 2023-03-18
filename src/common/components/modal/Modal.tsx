import { useAppDispatch, useAppSelector } from '@/store';
import { toggleOpen } from '@/store/slices/modalSlice';

interface ModalProps {
  children: any;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50 opacity-0 transition-all duration-300 ease-in-out">
      <div className="bg-white rounded-lg p-6  relative ">
        <button
          onClick={() => dispatch(toggleOpen())}
          className="absolute top-0 right-0 m-4 h-4 w-4 bg-orange3"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
