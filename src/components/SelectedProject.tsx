import { Link } from 'react-router-dom';

interface SelectedProjectProps {
  title: string;
  spaceTypeText: string;
  location: string;
  technique: string;
  heroImage: string;
  id: number;
  slug: string;
}

const SelectedProject = ({
  title,
  spaceTypeText,
  location,
  technique,
  heroImage,
  slug,
}: SelectedProjectProps) => {
  return (
    <div className="flex flex-col w-full gap-0 sm:gap-0 pb-3 sm:pb-0">
      <Link to={`/collection/${slug}`}>
        <div className="relative w-full flex flex-col-reverse sm:grid sm:grid-cols-[3fr_2fr] gap-2 sm:gap-0">
          <div className="md:sticky md:top-25 md:h-12 w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-3">
            <div className="block w-full">
              <p className="text-2xl font-medium">{title}</p>
              <p className="text">{spaceTypeText}</p>
            </div>
            <div className="w-full">
              <p>{location}</p>
              <p>{technique}</p>
            </div>
          </div>
          <div className="w-full aspect-square rounded-lg overflow-hidden">
            <img
              src={heroImage}
              loading="lazy"
              className="w-full h-full object-cover transform-gpu animate-[cinematic_14s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SelectedProject;
