const ThankYou = () => {
  return (
    <section className="w-340 px-4 mx-auto ml-[40%] h-[80svh] flex flex-col justify-center text-[33px] font-medium">
      <h1>Request received.</h1>
      <p>We will contact you shortly.</p>
      <a
        href="/collection"
        className="w-50 flex justify-center items-center h-8 border-black bg-transparent text-black font-medium rounded-sm mt-2 sm:mt-5 uppercase text-xs border cursor-pointer tracking-wide hover:bg-black hover:text-white"
      >
        Back to Collection
      </a>
    </section>
  );
};

export default ThankYou;
