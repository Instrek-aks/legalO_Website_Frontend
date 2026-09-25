import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Linkedin, Search, Users, Star, BookOpen } from "lucide-react";

const allMentors = [
  // ─── Leadership / Founders ────────────────────────────────────────────────
  {
    id: 1,
    name: "Vineet Sharma",
    role: "Founder",
    category: "Leadership",
    image: "/Vineet.webp",
    description: "Leading the vision and strategic direction of Legal Olympiad",
    linkedin: "https://www.linkedin.com/in/vineet82/",
  },
  {
    id: 2,
    name: "Sanjana Wadhwa",
    role: "Co-Founder",
    category: "Leadership",
    image: "/sanjanO.webp",
    description: "Driving innovation in legal education and mentorship",
    linkedin: "https://in.linkedin.com/in/sanjanawadhwa94/",
  },
  {
    id: 3,
    name: "Praveen Sharma",
    role: "Co-Founder",
    category: "Leadership",
    image: "/praveen.JPG",
    description:
      "Providing seasoned expertise in business strategy and decision-making",
    linkedin: "https://www.linkedin.com/in/praveen-sharma-640086209/",
  },
  {
    id: 4,
    name: "Tithika Mittal",
    role: "Technology Ecosystem Coordinator",
    category: "Leadership",
    image: "/tithika_mittal.jpeg",
    description: "Orchestrating technology integration and digital platforms",
    imageClass: "scale-[1.7] origin-top",
    linkedin: "https://in.linkedin.com/in/tithika-mittal-504775321/",
  },
  // ─── Mentors ──────────────────────────────────────────────────────────────
  {
    id: 5,
    name: "Vikas Gogne",
    role: "Advocate and Student Mentor",
    category: "Mentor",
    image: "/vikasN.jpg",
    description:
      "Leveraging extensive judicial experience and profound legal acumen",
    linkedin: "https://www.linkedin.com/in/vikas-gogne-42918527/",
  },
  {
    id: 6,
    name: "Satyam Chaturvedi",
    role: "Industry and Institutional Partnerships",
    category: "Mentor",
    image: "/satyamN.jpg",
    description:
      "Offering judicial expertise coupled with actionable legal insights",
    linkedin: "https://www.linkedin.com/in/satyam-chaturvedi-18845171/",
  },
  {
    id: 7,
    name: "Aprajita Budhwar",
    role: "Mentor",
    category: "Mentor",
    image: "/aprajita.JPG",
    description:
      "Judicial knowledge with implementable guidance for law students",
    linkedin: "https://www.linkedin.com/in/aprajita-budhwar-122b87162/",
  },
  {
    id: 8,
    name: "Nitish Dham",
    role: "Delhi Cantonment Board Panel Advocate",
    category: "Mentor",
    image: "/Nitish.jpeg",
    description:
      "Delhi Cantonment Board Panel Advocate with hands-on courtroom expertise.",
    linkedin: "https://www.linkedin.com/in/nitish-dham-12b12a14b/",
  },
  {
    id: 9,
    name: "Sumit Misra",
    role: "Mentor",
    category: "Mentor",
    image: "/sumit.jpeg",
    description:
      "Complex litigation with a pro bono practice — experienced advocate with a strong pro bono ethos.",
    linkedin: "https://www.linkedin.com/in/sumitmisra92/",
  },
  {
    id: 10,
    name: "Yugasha Gargey",
    role: "Assistant Professor and Research Scholar",
    category: "Mentor",
    image: "/yug.jpeg",
    description:
      "Assistant Professor and research scholar committed to impactful legal education.",
    linkedin: "https://www.linkedin.com/in/yugasha-gargey-7a6773384/",
  },
  {
    id: 11,
    name: "Vimmy Miglani",
    role: "Mentor",
    category: "Mentor",
    image: "/vimmy.png",
    description:
      "Doctoral research on cryptocurrency law — academic expert blending core legal disciplines.",
    linkedin: "https://www.linkedin.com/in/vimmy-miglani-683295238/",
  },
  {
    id: 12,
    name: "Dr. Priyanka Chaudhary",
    role: "Academic Mentor in Law Teaching",
    category: "Mentor",
    image: "/priyanka.jpeg",
    description:
      "Academic mentor specializing in law teaching and scholarly research.",
    linkedin: "https://www.linkedin.com/in/priyanka-chaudhary-15b376338/",
  },
  {
    id: 13,
    name: "Dr. Ajmer Singh",
    role: "Academic Mentor in Legal Education",
    category: "Mentor",
    image: "/ajmer.jpg",
    description: "Academic mentor dedicated to excellence in legal education",
    linkedin: "https://www.linkedin.com/in/ajmer-singh-a74103214/",
  },
  {
    id: 14,
    name: "Naginder Benipal",
    role: "Senior Panel Counsel, Constitutional Law",
    category: "Mentor",
    image: "/Naginder.JPG",
    description:
      "Senior Panel Counsel with 16+ years experience in constitutional and public law practice.",
    linkedin: "https://www.linkedin.com/company/naginder-benipal/",
  },
  {
    id: 15,
    name: "Ankit Siwach",
    role: "Strategic Counsel, Government Litigation",
    category: "Mentor",
    image: "/Ankit.jpeg",
    description:
      "Delivering strategic legal counsel shaped by government litigation experience.",
    linkedin: "https://www.linkedin.com/in/ankit-siwach-a9b874179/",
  },
  {
    id: 16,
    name: "Shashwat Saxena",
    role: "District and Sessions Court Practitioner",
    category: "Mentor",
    image: "/saxsena.jpeg",
    description:
      "District and Sessions Court practitioner shaping the next generation of legal professionals.",
    linkedin: "https://www.linkedin.com/in/shashwat-saxena-92832054/",
  },
  {
    id: 17,
    name: "Naomi Chandra",
    role: "Senior Litigator and Former Amicus Curiae",
    category: "Mentor",
    image: "/naomi.jpeg",
    description:
      "Senior litigator and former Amicus Curiae mentoring aspiring lawyers.",
    linkedin: "https://www.linkedin.com/in/naomi-chandra-93b1983/",
  },
  {
    id: 18,
    name: "Tarun Agarwal",
    role: "Founder and Managing Partner, TBA Legal",
    category: "Mentor",
    image: "/tarun.png",
    description:
      "Founder and Managing Partner, TBA Legal, with expertise rooted in top-tier law firms.",
    linkedin: "https://www.linkedin.com/in/tarun-agarwal-tbalegal9/",
  },
  {
    id: 19,
    name: "Shreyansh Rathi",
    role: "Supreme Court and Delhi High Court Advocate",
    category: "Mentor",
    image: "/shreyansh_new.jpg",
    description:
      "Supreme Court and Delhi High Court Advocate handling complex litigation.",
    linkedin: "https://www.linkedin.com/in/shreyansh-rathi-912358140/",
  },
  {
    id: 20,
    name: "Purva Kohli",
    role: "Litigation and Dispute Resolution Lawyer",
    category: "Mentor",
    image: "/purva_new.jpg",
    description:
      "Litigation and Dispute Resolution Lawyer; trained Mediator based in Delhi.",
    linkedin: "https://www.linkedin.com/in/purva-kohli-2451b7117/",
  },
  {
    id: 21,
    name: "Anika Bajpai",
    role: "Senior Associate and Advocate",
    category: "Mentor",
    image: "/anika.jpg",
    description:
      "Senior Associate and Advocate with strong litigation and corporate advisory experience.",
    linkedin: "https://www.linkedin.com/in/anika-bajpai-424b1030/",
  },
  {
    id: 22,
    name: "Rohit Chaturvedi",
    role: "Attorney at Parin Law Office",
    category: "Mentor",
    image: "/rohit.jpg",
    description:
      "Attorney at Parin Law Office with strong litigation experience and client-focused legal practice.",
    linkedin: "https://www.linkedin.com/in/rohit-chaturvedi-a026b239/",
  },
  {
    id: 23,
    name: "Apurva Sanjeti",
    role: "Legal and Contracting Professional",
    category: "Mentor",
    image: "/apurva.jpg",
    description:
      "Legal and Contracting Professional specializing in legal operations and AI-enabled solutions.",
    linkedin: "https://www.linkedin.com/in/apurva-sanjeti-06737b39/",
  },
  {
    id: 24,
    name: "Palak Sharma",
    role: "Associate Advocate, Dispute Resolution",
    category: "Mentor",
    image: "/palak.jpg",
    description:
      "Associate Advocate handling litigation, arbitration, and dispute resolution.",
    linkedin: "https://www.linkedin.com/in/palaksharma30/",
  },
  {
    id: 25,
    name: "Deveshi Mishra",
    role: "Delhi High Court Advocate",
    category: "Mentor",
    image: "/deveshi.png",
    description: "Delhi High Court Advocate handling diverse litigation matters.",
    linkedin: "https://www.linkedin.com/in/deveshi-mishra/",
  },
  {
    id: 26,
    name: "Manav Tanwani",
    role: "Advocate and Legal Practitioner",
    category: "Mentor",
    image: "/manav.jpg",
    description:
      "Advocate and Legal Practitioner with litigation and advisory expertise.",
    linkedin: "https://www.linkedin.com/in/manav-tanwani-a80344109/",
  },
  {
    id: 27,
    name: "Ritu Raj Srivastava",
    role: "Principal Associate, Karanjawala and Co.",
    category: "Mentor",
    image: "/ritu.jpg",
    description:
      "Principal Associate at Karanjawala and Co., specializing in litigation and legal advisory.",
    linkedin: "https://www.linkedin.com/in/ritu-raj-7705a2a0/",
  },
  {
    id: 28,
    name: "Akash Raj",
    role: "Patna High Court Advocate",
    category: "Mentor",
    image: "/akash.jpg",
    description: "Advocate at Patna High Court with broad litigation experience.",
    linkedin: "https://www.linkedin.com/in/akash-raj-bb0114131/",
  },
  {
    id: 29,
    name: "Meenal Duggal",
    role: "Advocate, 8+ Years Legal Practice",
    category: "Mentor",
    image: "/meenal.jpg",
    description:
      "An experienced Advocate with 8 years of practice, offering guidance rooted in real-world legal expertise.",
    linkedin: "https://www.linkedin.com/in/meenal-duggal-b3002222b/",
  },
  {
    id: 30,
    name: "Nehal Godhania",
    role: "Cross-Border Contracts and Compliance",
    category: "Mentor",
    image: "/nehal.jpeg",
    description:
      "A seasoned Legal Professional with 10 years of cross-border contract and compliance expertise.",
    linkedin: "https://www.linkedin.com/in/nehal-godhania-a94838166/",
  },
  {
    id: 31,
    name: "Subham Chatterjee",
    role: "Legal Academic and Research Scholar",
    category: "Mentor",
    image: "/img1.jpeg",
    description:
      "Legal academic and research scholar dedicated to enriching legal discourse.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 32,
    name: "Nishank Tripathi",
    role: "Supreme Court of India and Delhi High Court Counsel",
    category: "Mentor",
    image: "/img2.jpeg",
    description:
      "Supreme Court of India and Delhi High Court Counsel with a distinguished practice.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 33,
    name: "Apoorv Gupta",
    role: "Assistant Professor, Jindal Global Law School",
    category: "Mentor",
    image: "/img3.jpeg",
    description:
      "Assistant Professor at Jindal Global Law School shaping future legal professionals.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 34,
    name: "Archisha Satyarthi",
    role: "Advocate Delhi High Court",
    category: "Mentor",
    image: "/img4.jpeg",
    description:
      "Advocate Delhi High Court with expertise in constitutional matters.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 35,
    name: "Kajal Rajput Sharma",
    role: "Founder, Chambers of Kajal Rajput Sharma",
    category: "Mentor",
    image: "/img5.jpeg",
    description:
      "Founder of Chambers of Kajal Rajput Sharma with expertise in diverse legal fields.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 36,
    name: "Priyanka Popat",
    role: "Advocate and Legal Practitioner",
    category: "Mentor",
    image: "/img6.jpeg",
    description:
      "Advocate and Legal Practitioner with comprehensive legal experience.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 37,
    name: "Sumit Ranjana",
    role: "Government Reader, Delhi HC and Senior Panel Counsel, CAT",
    category: "Mentor",
    image: "/img7.jpeg",
    description:
      "Government Reader at Delhi HC and Senior Panel Counsel at CAT with extensive public service.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 38,
    name: "Heena Sharma",
    role: "Litigation and Dispute Resolution",
    category: "Mentor",
    image: "/img8.jpeg",
    description:
      "Litigation and Dispute Resolution specialist with broad courtroom experience.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 39,
    name: "Kashav Tomar",
    role: "Profound Legal Research and Drafting",
    category: "Mentor",
    image: "/lawyer_photo.jpg",
    description:
      "Profound legal research and drafting expert supporting high-stakes matters.",
    linkedin: "https://www.linkedin.com/",
  },
];

const CATEGORIES = ["All", "Leadership", "Mentor"];

const MentorCard = ({ mentor, index }) => (
  <div
    className="group relative h-full"
    style={{ animationDelay: `${(index % 12) * 60}ms` }}
  >
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#C6930A] h-full flex flex-col mentor-card">
      {/* Image */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl flex-shrink-0">
        <img
          src={mentor.image}
          alt={mentor.name}
          loading="lazy"
          className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${
            mentor.imageClass || ""
          }`}
          onError={(e) => {
            e.target.src = "/heroLaw.jpg";
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold shadow ${
              mentor.category === "Leadership"
                ? "bg-[#C6930A] text-white"
                : "bg-white/90 text-[#C6930A] border border-[#C6930A]/30"
            }`}
          >
            {mentor.category}
          </span>
        </div>

        {/* Slide-up description */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-white text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            {mentor.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-gray-900 group-hover:text-[#C6930A] transition-colors duration-300 leading-snug flex-1">
            {mentor.name}
          </h3>
          {mentor.linkedin && (
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${mentor.name} LinkedIn`}
              className="w-7 h-7 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
            >
              <Linkedin className="w-3.5 h-3.5 text-white" />
            </a>
          )}
        </div>
        <p className="text-xs text-[#C6930A] font-semibold leading-snug mb-2">
          {mentor.role}
        </p>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-grow">
          {mentor.description}
        </p>
      </div>
    </div>
  </div>
);

const Mentors = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allMentors.filter((m) => {
      const matchesCategory =
        activeCategory === "All" || m.category === activeCategory;
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const mentorCount = allMentors.filter((m) => m.category === "Mentor").length;
  const leaderCount = allMentors.filter((m) => m.category === "Leadership").length;

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mentor-card {
          animation: fadeInUp 0.5s ease both;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <Header />

      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C6930A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C6930A 0%, transparent 40%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/heroLaw.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C6930A]/20 border border-[#C6930A]/40 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-[#C6930A]" />
            <span className="text-[#C6930A] text-sm font-semibold tracking-wide">
              Expert Mentorship Network
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Meet Our <span className="text-[#C6930A]">Mentors</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            India's top legal professionals, advocates, academics and judicial
            experts — guiding the next generation of law students through
            hands-on mentorship.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: Users, label: "Mentors", value: mentorCount + "+" },
              { icon: BookOpen, label: "Leadership", value: leaderCount },
              { icon: Star, label: "Avg. Years Exp.", value: "10+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Icon className="w-5 h-5 text-[#C6930A]" />
                  <span className="text-3xl font-bold text-white">{value}</span>
                </div>
                <p className="text-gray-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="sticky top-16 sm:top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Category Tabs */}
            <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-[#C6930A] text-white border-[#C6930A] shadow"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#C6930A] hover:text-[#C6930A]"
                  }`}
                >
                  {cat}
                  <span className="ml-1.5 text-xs opacity-70">
                    (
                    {cat === "All"
                      ? allMentors.length
                      : allMentors.filter((m) => m.category === cat).length}
                    )
                  </span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search mentors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-[#C6930A] focus:ring-1 focus:ring-[#C6930A] transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-400 text-lg">
                No mentors match your search. Try a different keyword.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-400 mb-8">
                Showing{" "}
                <span className="font-semibold text-gray-700">
                  {filtered.length}
                </span>{" "}
                mentor{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {filtered.map((mentor, i) => (
                  <MentorCard key={mentor.id} mentor={mentor} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Learn from the{" "}
            <span className="text-[#C6930A]">Best?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-base">
            Join the Legal Olympiad and get access to one-on-one guidance from
            India's top legal minds.
          </p>
          <a
            href="https://App.legalolympiad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C6930A] hover:bg-[#C6930A]/90 text-white font-bold px-8 py-3 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentors;
