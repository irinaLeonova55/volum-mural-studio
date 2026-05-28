import ContactForm from '../components/ContactForm';
import type { ContactFormData } from '../types/contact';

const Contacts = () => {
  const handleSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section className="max-w-360 px-4 mx-auto pt-10 sm:pt-24 mb-25 sm:mb-62">
      <div className="flex flex-col justify-center items-center max-w-140 w-full mx-auto">
        <h1 className="w-full text-4xl font-medium text-center mb-6">
          Contact us
        </h1>
        <p className="text-center text-xl mb-12 sm:mb-27">
          Say Hello send us your thoughts about our artworks or share your ideas
          with our Team!
        </p>
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default Contacts;
