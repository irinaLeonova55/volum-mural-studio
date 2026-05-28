import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';
import Burger from './Burger';

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isBurger, setIsBurger] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isBurger ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isBurger]);

  useEffect(() => {
    if (!isBurger) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBurger(false);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isBurger]);

  return (
    <div className="w-full mx-auto min-h-full">
      <Header openBurger={() => setIsBurger(true)} />
      <main>
        <Outlet context={{ setIsModalOpen }} />
      </main>
      <Footer />

      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Burger isBurger={isBurger} onClose={() => setIsBurger(false)} />
    </div>
  );
};

export default Layout;
