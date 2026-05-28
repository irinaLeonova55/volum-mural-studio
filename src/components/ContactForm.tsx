import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ContactFormData } from '../types/contact';
import Button from './Button';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [policyCheckbox, setPolicyCheckbox] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      name: userName,
      email: userEmail,
      phone: userPhone,
    });

    navigate('/thank-you');
  };

  return (
    <form className="max-w-125 w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Your name"
        className="w-full border-b border-[#D8D8D8] mb-10 pb-3 focus:outline-none"
      />
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Email"
        className="w-full border-b border-[#D8D8D8] mb-10 pb-3 focus:outline-none"
      />
      <input
        type="tel"
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
        placeholder="Phone Number"
        className="w-full border-b border-[#D8D8D8] mb-8 pb-3 focus:outline-none"
      />
      <Button type="submit" text="Send" />
      <label className="block mt-6 text-xs text-[#707070]">
        <input
          type="checkbox"
          name="policyCheckbox"
          required
          className="mr-2 w-3 h-3 accent-[#A18A68]"
          onChange={(e) => setPolicyCheckbox(e.target.checked)}
          checked={policyCheckbox}
        />
        I agree to the processing of my personal data and accept{' '}
        <a href="/policy" className="underline">
          the Privacy Policy.
        </a>
      </label>
    </form>
  );
};

export default ContactForm;
