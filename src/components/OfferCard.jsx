const OfferCard = ({ iconUrl, paragraph, title }) => {
  return (
    <div className="flex flex-col items-center md:items-start md:text-left text-center gap-6">
      <img src={iconUrl} alt={title} />
      <div className="px-6 md:px-0">
        <h2 className="text-3xl font-dmSerif text-[var(--VD-Violet)] mb-3 md:mb-2">
          {title}
        </h2>
        <p className="font-karla text-[var(--DG-Violet)]">{paragraph}</p>
      </div>
    </div>
  );
};

export default OfferCard;
