import emailIcon from '../assets/icons/email.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';

const socialIcons = [emailIcon, linkedinIcon, instagramIcon, facebookIcon];

const Social = () => {
  return (
    <div className="flex justify-start gap-3 sm:gap-7 items-end">
      {socialIcons.map((icon, index) => (
        <a key={index} href="/" className="hover:opacity-70">
          <img
            src={icon}
            className={`w-auto ${index === 0 || index === 2 ? 'h-4' : 'h-4.5'}`}
          />
        </a>
      ))}
    </div>
  );
};

export default Social;
