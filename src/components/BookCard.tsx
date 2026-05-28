import { Link } from 'react-router-dom';

interface BookCardProps {
  id: number;
  title: string;
  image: string;
  spaceTypeText: string;
  technique: string;
  slug: string;
  extrastyle: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  image,
  spaceTypeText,
  technique,
  slug,
  extrastyle,
}) => {
  return (
    <div className="flex flex-col pb-6 sm:pb-11">
      <Link to={`/collection/${slug}`}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`w-full object-cover rounded-lg ${extrastyle}`}
        />
        <h2 className="font-regular text-black text-xl mt-3 sm:mt-4 mb-1 sm:mb-2">
          {title}
        </h2>
        <p className="text-[#707070] font-medium">
          {spaceTypeText} · {technique}
        </p>
      </Link>
    </div>
  );
};

export default BookCard;
