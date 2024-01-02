import snappy from "../assets/images/icon-snappy-process.svg";
import prices from "../assets/images/icon-affordable-prices.svg";
import people from "../assets/images/icon-people-first.svg";
import OfferCard from "./OfferCard";

const OfferSection = () => {
  return (
    <section className="mx-auto w-full mt-[5rem] md:mt-[10rem]">
      <div className="flex flex-col gap-6 md:gap-12 max-w-[1080px] mx-auto w-full justify-center py-3 px-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-[var(--DG-Violet)] rounded-xl w-[128px] h-[2px] sm:mb-10 mb-8"></div>
          <h1 className="text-5xl md:text-6xl  font-dmSerif text-[var(--VD-Violet)]">
            We’re different
          </h1>
        </div>
        <div className="flex md:flex-row flex-col gap-6 lg:gap-10 md:gap-8 mb-4 mt-12 md:mt-12 md:mb-24 w-full">
          <OfferCard
            iconUrl={snappy}
            title="Snappy Process"
            paragraph="Our application process can be completed in minutes, not hours. Don’t get 
  stuck filling in tedious forms."
          />
          <OfferCard
            iconUrl={prices}
            title="Affordable Prices"
            paragraph="We don’t want you worrying about high monthly costs. Our prices may be low, 
  but we still offer the best coverage possible."
          />
          <OfferCard
            iconUrl={people}
            title="People First"
            paragraph="Our plans aren’t full of conditions and clauses to prevent payouts. We make 
  sure you’re covered when you need it."
          />
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
