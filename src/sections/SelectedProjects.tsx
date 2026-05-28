import { artworks } from '../data/artworks';

import SelectedProject from '../components/SelectedProject';

const SelectedProjects = () => {
  return (
    <section className="max-w-340 w-full px-4 mx-auto py-24">
      <h2 className="text-3xl sm:text-4xl font-medium mt-4 mb-6 sm:mb-9">
        Selected Projects
      </h2>

      <div className="flex flex-col w-full gap-10">
        {artworks.slice(0, 4).map((artwork) => (
          <SelectedProject
            key={artwork.id}
            title={artwork.title}
            spaceTypeText={artwork.spaceTypeText}
            location={artwork.location}
            technique={artwork.technique}
            heroImage={artwork.heroImage}
            id={artwork.id}
            slug={artwork.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectedProjects;
