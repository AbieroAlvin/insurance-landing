import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import Logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <section className="mx-auto w-full footer-bg">
      <div className="w-full flex flex-col justify-center items-center py-8 px-12  max-w-[1080px] mx-auto">
        <div className="flex justify-between w-full">
          {/* logo */}
          <img src={Logo} alt="/" />
          <div className="flex justify-between gap-2">
            <img
              src={facebook}
              alt="/"
              className="cursor-pointer hover:bg-[var(--VD-Violet)]"
            />
            <img
              src={twitter}
              alt="/"
              className="cursor-pointer hover:bg-[var(--VD-Violet)]"
            />
            <img
              src={pinterest}
              alt="/"
              className="cursor-pointer hover:bg-[var(--VD-Violet)]"
            />
            <img
              src={instagram}
              alt="/"
              className="cursor-pointer hover:bg-[var(--VD-Violet)]"
            />
          </div>
        </div>
        <div className="flex w-full flex-col justify-between md:flex-row gap-8 md:gap-16 uppercase text-[12px] border-t-2 border-gray-500 py-6 mt-4 font-karla">
          <div className="flex-col flex gap-6">
            <h3 className="text-[var(--DG-Violet)] text-[14px]">Our company</h3>
            <div className="flex flex-col gap-2">
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                How we work
              </p>
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Why Insure?
              </p>
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                View plans
              </p>
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Reviews
              </p>
            </div>
          </div>
          <div className="flex-col flex gap-6">
            <h3 className="text-[var(--DG-Violet)] text-[14px]">Help Me</h3>
            <div className="flex flex-col gap-2">
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Faq
              </p>
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Terms of Use
              </p>
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Privacy Policy
              </p>
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Cookies
              </p>
            </div>
          </div>
          <div className="flex-col flex gap-6">
            <h3 className="text-[var(--DG-Violet)] text-[14px]">Contact</h3>
            <div className="flex flex-col gap-2">
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Sales
              </p>
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Support
              </p>
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Live Chat
              </p>
            </div>
          </div>
          <div className="flex-col flex gap-6">
            <h3 className="text-[var(--DG-Violet)] text-[14px]">Others</h3>
            <div className="flex flex-col gap-2">
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Careers
              </p>
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Press
              </p>
              <p className="cursor-pointer text-[var(--VD-Violet)] hover:underline">
                Licences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
