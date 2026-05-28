import ContactForm from './ContactForm';
import type { ContactFormData } from '../types/contact';
import closeIcon from '../assets/icons/close.svg';

interface ModalProps {
  onClose: () => void;
  isModalOpen: boolean;
}

const Modal = ({ onClose, isModalOpen }: ModalProps) => {
  if (!isModalOpen) return null;

  const handleSubmit = (data: ContactFormData) => {
    console.log(data);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex border items-center justify-center z-1000">
      <div className="relative bg-white p-8 sm:p-16 max-w-160 w-full h-auto rounded-xl flex justify-center flex-col items-center">
        <button
          className="absolute top-8 right-8 cursor-pointer"
          onClick={onClose}
        >
          <img src={closeIcon} alt="Close" className="w-4 h-auto" />
        </button>
        <h2 className="w-full text-4xl font-medium text-center mb-10">
          Contact us
        </h2>
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Modal;
