import introMobile from "../assets/images/image-intro-mobile.jpg";
import introDesk from "../assets/images/image-intro-desktop.jpg";

const IntroSection = () => {
  return (
    <section className="mx-auto w-full intro-bg ">
      <div className="flex md:flex-row flex-col-reverse gap-6 max-w-[1080px] mx-auto w-full justify-center sm:py-3 sm:px-4 md:relative md:top-[80px]">
        <div className="md:max-w-[440px] py-3 px-4 i-center">
          <div className="bg-[var(--DG-Violet)] rounded-xl w-[128px] h-[2px] sm:mb-10 mb-8"></div>
          <h1 className="md:text-5xl text-4xl font-dmSerif font-semibold text-[var(--VL-Gray)] tracking-[.05em]">
            Humanizing your insurance.
          </h1>
          <p className="leading-6 text-[14px] font-dmSerif text-[var(--DG-Violet)]  mt-4">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className="uppercase border-[1px] px-4 py-2 text-[14px] border-[var(--VL-Gray)] bg-[var(--D-Violet)] hover:bg-[var(--VD-Violet)] text-[var(--VL-Gray)] font-karla  mt-6 sm:mb-0 mb-6">
            View Plans
          </button>
        </div>
        {/* <div className="intro-img md:w-[400px] md:h-[440px]"></div> */}
        <img src={introMobile} alt="/" className="flex md:hidden " />
        <img
          src={introDesk}
          alt="/"
          className="hidden md:flex lg:w-[450px] lg:h-[540px] md:w-[300px] md:h-[400px]"
        />
      </div>
    </section>
  );
};

export default IntroSection;
