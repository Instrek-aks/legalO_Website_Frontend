const CredentialsSection = () => {
  const docs = [
    {
      title: "Incubation partnership with GNDU",
      img: "/images/img_20.jpg",
    },
    {
      title: "Divya Himachal",
      img: "/images/img_21.jpg",
    },
    {
      title: "CNV News",
      img: "/images/img_22.jpg",
    },
    {
      title: "Hills Post",
      img: "/images/img_23.jpg",
    },
  ];

  const advocates = [
    { name: "Vikas Gogne", role: "Advocate and student mentor", img: "/vikasN.webp" },
    { name: "Satyam Chaturvedi", role: "Industry and institutional partnerships", img: "/satyamN.webp" },
    { name: "Aprajita Budhwar", role: "Judicial knowledge with implementable guidance", img: "/aprajita.webp" },
    { name: "Nitish Dham", role: "Delhi Cantonment board panel advocate", img: "/Nitish.webp" },
    { name: "Sumit Misra", role: "Complex litigation with a pro bono practice", img: "/sumit.webp" },
    { name: "Yugasha Gargey", role: "Assistant Professor and research scholar", img: "/yug.webp" },
    { name: "Vimmy Miglani", role: "Doctoral research on cryptocurrency law", img: "/vimmy.webp" },
    { name: "Dr. Priyanka Chaudhary", role: "Academic mentor in law teaching", img: "/priyanka.webp" },
    { name: "Dr. Ajmer Singh", role: "Academic mentor in legal education", img: "/ajmer.webp" },
    { name: "Naginder Benipal", role: "Senior Panel Counsel, constitutional law", img: "/Naginder.webp" },
    { name: "Ankit Siwach", role: "Strategic counsel, government litigation", img: "/Ankit.webp" },
    { name: "Shashwat Saxena", role: "District and Sessions Court practitioner", img: "/saxsena.webp" },
    { name: "Naomi Chandra", role: "Senior litigator and former Amicus Curiae", img: "/naomi.webp" },
    { name: "Tarun Agarwal", role: "Founder & Managing Partner, TBA Legal", img: "/tarun.webp" },
    { name: "Shreyansh Rathi", role: "Supreme Court & Delhi High Court Advocate", img: "/shreyansh_new.webp" },
    { name: "Purva Kohli", role: "Litigation & Dispute Resolution Lawyer", img: "/purva_new.webp" },
    { name: "Anika Bajpai", role: "Senior Associate & Advocate", img: "/anika.webp" },
    { name: "Rohit Chaturvedi", role: "Attorney at Parin Law Office", img: "/rohit.webp" },
    { name: "Apurva Sanjeti", role: "Legal & Contracting Professional", img: "/apurva.webp" },
    { name: "Palak Sharma", role: "Associate Advocate, Dispute Resolution", img: "/palak.webp" },
    { name: "Deveshi Mishra", role: "Delhi High Court Advocate", img: "/deveshi.webp" },
    { name: "Manav Tanwani", role: "Advocate & Legal Practitioner", img: "/manav.webp" },
    { name: "Ritu Raj Srivastava", role: "Principal Associate & Advocate, Karanjawala & Co.", img: "/ritu.webp" },
    { name: "Akash Raj", role: "Patna High Court Advocate", img: "/akash.webp" },
    { name: "Meenal Duggal", role: "Advocate, 8+ Years Legal Practice", img: "/meenal.webp" },
    { name: "Nehal Godhania", role: "Cross-Border Contracts & Compliance", img: "/nehal.webp" },
    { name: "Subham Chatterjee", role: "Legal academic and research scholar", img: "/subham.webp" },
    { name: "Keshav Tomar", role: "Profound legal research and drafting", img: "/keshav.webp" },
  ];

  return (
    <section className="dark" id="about">
      <div className="jaali"></div>
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">Credibility</div>
          <h2>
            Incubated at GNDU Amritsar, guided<br />
            by the Bar
          </h2>
          <p className="lede">
            Legal Olympiad is incubated at the Golden Jubilee Centre for
            Entrepreneurship and Innovation, Guru Nanak Dev University, Amritsar,
            under RUSA 2.0, and entrusted to design mandatory first-year practical
            curriculum. The exam is proctored and your rank is published. Nothing
            about it is self-declared.
          </p>
        </div>

        {/* 4 Media / Incubation Document Cards */}
        <div className="creds" style={{ marginBottom: "52px" }}>
          {docs.map((item, idx) => (
            <figure className="cred reveal in" key={idx}>
              <img src={item.img} alt={item.title} loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>

        {/* Our Mentors Eyebrow */}
        <div className="head" style={{ marginBottom: "28px" }}>
          <div className="eyebrow">Our Mentors</div>
        </div>

        {/* 14 Mentors Circular Avatar Portraits Grid */}
        <div className="people">
          {advocates.map((adv, idx) => (
            <div className="adv reveal in" key={idx}>
              {adv.img ? (
                <img src={adv.img} alt={adv.name} loading="lazy" />
              ) : (
                <div className="circle-avatar">{adv.initials}</div>
              )}
              <strong>{adv.name}</strong>
              <span>{adv.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
