const PartnerTicker = () => {
  const colleges = [
    "Guru Nanak Dev University, Amritsar",
    "GGS Indraprastha University, Delhi",
    "City Group of Colleges, Lucknow",
    "The NorthCap University",
    "SGT University",
    "DAV University, Jalandhar",
    "Shoolini University",
    "SHEDS College of Law",
    "Bahra University",
    "ICFAI University",
    "APG University, Shimla",
    "MAIT Baddi",
    "Banasthali Vidyapith",
    "Vivekananda Global University",
  ];

  return (
    <div className="strip" aria-label="Partner law colleges">
      <div className="track">
        {colleges.map((name, idx) => (
          <span key={`a-${idx}`}>{name}</span>
        ))}
        {colleges.map((name, idx) => (
          <span key={`b-${idx}`}>{name}</span>
        ))}
      </div>
    </div>
  );
};

export default PartnerTicker;
