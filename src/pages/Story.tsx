import artists from '../assets/images/artists.jpg';

const Story = () => {
  return (
    <section className="max-w-360 px-4 mx-auto pt-10 sm:pt-24 mb-25 sm:mb-62">
      <div className="flex flex-col justify-center max-w-2xl w-full mx-auto">
        <h1 className="w-full text-3xl sm:text-4xl font-medium text-center mb-6">
          Our Story
        </h1>
        <p className="text-center text-xl mb-5 sm:mb-10">
          Art Integrated Into Architecture
        </p>
        <p className="mb-5 sm:mb-10">
          Our studio specializes in contemporary mural design for architectural
          and public spaces worldwide. We collaborate with architects, interior
          designers, developers, hotels, restaurants, and cultural brands to
          create site-specific artworks that feel deeply connected to their
          environment.
        </p>

        <p className="mb-5 sm:mb-10">
          We create large-scale murals and artistic surfaces for architectural
          spaces, hospitality venues, cultural institutions, and public
          environments. Each project is designed to become part of the
          architecture itself — shaping atmosphere, movement, and the emotional
          experience of a place.
        </p>
        <p className="mb-5 sm:mb-10">
          Our work balances artistic expression with spatial thinking,
          transforming walls, facades, and public areas into immersive visual
          landmarks.
        </p>

        <h2 className="text-2xl text-center mb-6">Our Artists</h2>
        <img
          src={artists}
          alt="About studio"
          loading="lazy"
          className="w-full h-75 rounded-lg mb-10 object-cover"
        />
        <p className="mb-5 sm:mb-10">
          Our artists come from diverse creative backgrounds including muralism,
          fine art, illustration, spatial design, and contemporary graphic
          practices. This multidisciplinary approach allows us to develop visual
          languages tailored to each project rather than repeating a fixed
          style.
        </p>
        <p>
          We work internationally and collaborate with artists across different
          countries, enabling us to adapt to cultural contexts while maintaining
          a strong contemporary aesthetic. Whether creating a hand-painted
          interior mural or a large urban intervention, our team focuses on
          originality, precision, and lasting visual impact.
        </p>
      </div>
    </section>
  );
};

export default Story;
