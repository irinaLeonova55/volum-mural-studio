const About = () => {
  return (
    <section className="w-full relative z-20 bg-white">
      <div className="max-w-340 px-4 mx-auto pt-10 sm:pt-24">
        <div className="flex flex-col justify-center max-w-2xl w-full mx-auto">
          <h1 className="w-full text-3xl sm:text-4xl font-medium text-center  mb-4 sm:mb-6">
            About
          </h1>

          <p className="mb-5 sm:mb-10">
            Our studio specializes in contemporary mural design for
            architectural and public spaces worldwide. We collaborate with
            architects, interior designers, developers, hotels, restaurants, and
            cultural brands to create site-specific artworks that feel deeply
            connected to their environment.
          </p>
          <p>
            Every composition is developed individually, taking into account
            scale, light, materials, and the identity of the space. From
            intimate interiors to monumental public installations, we approach
            each project as a dialogue between art and architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
