import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// All mentors matching the dark emerald jaali pattern theme
const mentors = [
  // Row 1
  { id: 1,  name: "Vikas Gogne",           desc: "Advocate and student mentor",                             image: "/vikasN.webp" },
  { id: 2,  name: "Satyam Chaturvedi",     desc: "Industry and institutional partnerships",                image: "/satyamN.webp" },
  { id: 3,  name: "Aprajita Budhwar",      desc: "Judicial knowledge with implementable guidance",         image: "/aprajita.webp" },
  // Row 2
  { id: 4,  name: "Nitish Dham",           desc: "Delhi Cantonment board panel advocate",                  image: "/Nitish.webp" },
  { id: 5,  name: "Sumit Misra",           desc: "Complex litigation with a pro bono practice",            image: "/sumit.webp" },
  { id: 6,  name: "Yugasha Gargey",        desc: "Assistant Professor and research scholar",               image: "/yug.webp" },
  // Row 3
  { id: 7,  name: "Vimmy Miglani",         desc: "Doctoral research on cryptocurrency law",                image: "/vimmy.webp" },
  { id: 8,  name: "Dr. Priyanka Chaudhary",desc: "Academic mentor in law teaching",                       image: "/priyanka.webp" },
  { id: 9,  name: "Dr. Ajmer Singh",       desc: "Academic mentor in legal education",                     image: "/ajmer.webp" },
  // Row 4
  { id: 10, name: "Naginder Benipal",      desc: "Senior Panel Counsel, constitutional law",               image: "/Naginder.webp" },
  { id: 11, name: "Ankit Siwach",          desc: "Strategic counsel, government litigation",               image: "/Ankit.webp" },
  { id: 12, name: "Shashwat Saxena",       desc: "District and Sessions Court practitioner",               image: "/saxsena.webp" },
  // Row 5
  { id: 13, name: "Naomi Chandra",         desc: "Senior litigator and former Amicus Curiae",              image: "/naomi.webp" },
  { id: 14, name: "Tarun Agarwal",         desc: "Founder & Managing Partner, TBA Legal",                  image: "/tarun.webp" },
  { id: 15, name: "Shreyansh Rathi",       desc: "Supreme Court & Delhi High Court Advocate",              image: "/shreyansh_new.webp" },
  // Row 6
  { id: 16, name: "Purva Kohli",           desc: "Litigation & Dispute Resolution lawyer",                 image: "/purva_new.webp" },
  { id: 17, name: "Anika Bajpai",          desc: "Senior Associate & Advocate",                            image: "/anika.webp" },
  { id: 18, name: "Rohit Chaturvedi",      desc: "Attorney at Parin Law Office",                           image: "/rohit.webp" },
  // Row 7
  { id: 19, name: "Apurva Sanjeti",        desc: "Legal & Contracting Professional",                       image: "/apurva.webp" },
  { id: 20, name: "Palak Sharma",          desc: "Associate Advocate, Dispute Resolution",                 image: "/palak.webp" },
  { id: 21, name: "Deveshi Mishra",        desc: "Delhi High Court Advocate",                              image: "/deveshi.webp" },
  // Row 8
  { id: 22, name: "Manav Tanwani",         desc: "Advocate & Legal Practitioner",                          image: "/manav.webp" },
  { id: 23, name: "Ritu Raj Srivastava",   desc: "Principal Associate & Advocate, Karanjawala & Co.",     image: "/ritu.webp" },
  { id: 24, name: "Akash Raj",             desc: "Patna High Court Advocate",                              image: "/akash.webp" },
  // Row 9
  { id: 25, name: "Meenal Duggal",         desc: "Advocate, 8+ Years Legal Practice",                      image: "/meenal.webp" },
  { id: 26, name: "Nehal Godhania",        desc: "Cross-Border Contracts & Compliance",                    image: "/nehal.webp" },
  { id: 27, name: "Subham Chatterjee",     desc: "Legal academic and research scholar",                    image: "/subham.webp" },
  // Row 10
  { id: 28, name: "Nishank Tripathi",      desc: "Supreme Court of India and Delhi High Court, Advocate",  image: "/images/Nishank Tripathi.jpg.jpeg" },
  { id: 29, name: "Apoorv Gupta",          desc: "Assistant Professor, Jindal Global Law School",          image: "/images/apporv.png" },
  { id: 30, name: "Archisha Satyarthi",    desc: "Advocate Delhi High Court",                              image: "/images/arish.png" },
  // Row 11
  { id: 31, name: "Kajal Rajput Sharma",   desc: "Founder, Chambers of Kajal Rajput Sharma",              image: "/images/kajal.png" },
  { id: 32, name: "Priyanka Popat",        desc: "Advocate & Legal Practitioner",                          image: "/images/priyanka.png" },
  { id: 33, name: "Sumit Ranjana",         desc: "Government Pleader, Delhi HC & Senior Panel Counsel, CAT", image: "/images/sumit.png" },
  // Row 12
  { id: 34, name: "Heena Sharma",          desc: "Litigation and Dispute Resolution",                      image: "/images/heena.png" },
  { id: 35, name: "Keshav Tomar",          desc: "Profound legal research and drafting",                   image: "/keshav.webp" },
];

const Mentors = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div style={{ minHeight: "100vh", background: "#07271E", color: "#ffffff", fontFamily: "'Poppins', system-ui, sans-serif" }}>
      <Header />

      {/* ── Main Mentors Section ─────────────────── */}
      <section
        style={{
          position: "relative",
          background: "#07271E",
          padding: "50px 0 100px",
          overflow: "hidden",
        }}
      >
        {/* Subtle Geometric Pattern overlay (Jaali effect) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            pointerEvents: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23D8B85C' stroke-width='1'%3E%3Cpath d='M0 40 L40 0 L80 40 L40 80 Z'/%3E%3Ccircle cx='40' cy='40' r='16'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Header label: OUR MENTORS */}
          <p
            style={{
              color: "#C6930A",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "48px",
            }}
          >
            OUR MENTORS
          </p>

          {/* 3-Column Mentors Grid matching screenshot */}
          <div
            className="mentor-grid-exact"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "44px 28px",
              justifyItems: "center",
            }}
          >
            {mentors.map((m) => (
              <div
                key={m.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  maxWidth: "240px",
                  width: "100%",
                }}
              >
                {/* Circular photo with gold ring border */}
                <div
                  style={{
                    width: "105px",
                    height: "105px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "2px solid #D8B85C",
                    boxShadow: "0 0 16px rgba(216, 184, 92, 0.15)",
                    background: "#0c3b2e",
                    marginBottom: "14px",
                  }}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                    onError={(e) => {
                      e.target.src = "/heroLaw.webp";
                    }}
                  />
                </div>

                {/* Name */}
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    margin: "0 0 6px 0",
                    fontFamily: "'Montserrat', system-ui, sans-serif",
                  }}
                >
                  {m.name}
                </h3>

                {/* Description / Role */}
                <p
                  style={{
                    color: "#A0B8A8",
                    fontSize: "12.5px",
                    lineHeight: 1.4,
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive grid rules */}
        <style>{`
          @media (max-width: 768px) {
            .mentor-grid-exact {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 36px 16px !important;
            }
          }
          @media (max-width: 480px) {
            .mentor-grid-exact {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 32px 16px !important;
            }
          }
        `}</style>
      </section>

      {/* ── Bottom Announcement Banner ─────────────────── */}
      {showBanner && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: "#09382B",
            borderTop: "1px solid rgba(216, 184, 92, 0.3)",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "13px",
              color: "#D8B85C",
              fontWeight: 500,
            }}
          >
            <strong style={{ color: "#E5C268", fontWeight: 700 }}>Legal Olympiad 2.0</strong>
            {" - Sunday, 18 October 2026, 12pm - 2pm - ₹499 - open to every law student and CLAT aspirant in India"}
          </div>
          <button
            onClick={() => setShowBanner(false)}
            style={{
              background: "none",
              border: "none",
              color: "#A0B8A8",
              fontSize: "16px",
              cursor: "pointer",
              padding: "4px 8px",
              marginLeft: "16px",
              lineHeight: 1,
            }}
            aria-label="Close announcement"
          >
            ✕
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Mentors;
