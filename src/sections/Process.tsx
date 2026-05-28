import pencilImage from '../assets/images/pencil.png';
import sketchImage from '../assets/images/sketch.png';
import paintingImage from '../assets/images/painting.png';
import resultImage from '../assets/images/result.png';

const Process = () => {
  const process = [
    {
      id: 1,
      image: pencilImage,
      title: 'Discovery & Vision',
      step: '01',
      desc: 'We begin by understanding the architecture, atmosphere, and identity of the space.',
    },
    {
      id: 2,
      image: sketchImage,
      title: 'Concept Development',
      step: '02',
      desc: 'Our team develops custom mural concepts tailored to the environment, scale, materials, and lighting conditions.',
    },
    {
      id: 3,
      image: paintingImage,
      title: 'Production & Execution',
      step: '03 Painting',
      desc: 'From detailed planning to on-site painting and installation, our artists manage every stage of production.',
    },
    {
      id: 4,
      image: resultImage,
      title: 'Final Transformation',
      step: '04 Final Result',
      desc: 'The completed artwork becomes part of the space itself — enhancing movement, emotion, and atmosphere.',
    },
  ];

  return (
    <section className="relative w-full pt-36 bg-white z-30">
      <div className="w-full max-w-340 px-4 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-medium mb-6 sm:mb-9">
          Our Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {process.map((step) => (
            <div key={step.id} className="w-full pb-6 sm:pb-11">
              <img
                src={step.image}
                alt={step.title}
                loading="lazy"
                className="w-full h-65 rounded-lg object-cover"
              />
              <h3 className="font-regular text-black text-xl mt-3 sm:mt-4 mb-1 sm:mb-2">
                {step.title}
              </h3>

              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
