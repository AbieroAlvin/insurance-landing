const Work = () => {
  return (
    <section className="w-full mx-auto work-bg mb-[4rem] xl:max-w-[1080px] md:max-w-[800px] sm:mt-0 mt-12 px-4">
      <div className="p-8 flex md:flex-row flex-col gap-6 items-center justify-between">
        <div className="max-w-[450px]">
          <h1 className="text-3xl md:text-4xl text-center sm:text-left font-dmSerif text-[var(--VL-Gray)]">
            Find out more about how we work
          </h1>
        </div>

        <button className="uppercase border-[1px] px-4 py-2 text-[14px] border-[var(--VL-Gray)] bg-transparent hover:bg-[var(--VD-Violet)] text-[var(--VL-Gray)] font-karla">
          How We Work
        </button>
      </div>
    </section>
  );
};

export default Work;
