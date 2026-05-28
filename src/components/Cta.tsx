import Button from './Button';
import { useOutletContext } from 'react-router-dom';

interface OutletContextProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cta = () => {
  const { setIsModalOpen } = useOutletContext<OutletContextProps>();

  return (
    <div className="relative mx-auto w-full flex items-center flex-col py-18 sm:py-36 z-50 bg-white">
      <h2 className="text-xl font-medium text-center">
        Interested in a custom mural project?
      </h2>
      <div className="max-w-80 w-full">
        <Button text="Discuss Project" onClick={() => setIsModalOpen(true)} />
      </div>
    </div>
  );
};

export default Cta;
