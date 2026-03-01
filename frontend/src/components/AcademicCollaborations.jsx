const collaborations = [
  { id: 1, name: "City Academy Law College", city: "Lucknow" },
  { id: 2, name: "Vedanta Law College", city: "Lucknow" },
  { id: 3, name: "LBS Law College", city: "Lucknow" },
  { id: 4, name: "Central Law College", city: "Lucknow" },
  { id: 5, name: "City Law College", city: "Lucknow" },
  { id: 6, name: "Shoolini University", city: "Solan" },
  { id: 7, name: "SGT UNIVERSITY", city: "Gurugram" },
  { id: 8, name: "LR Group of Institutes", city: "Solan" },
  { id: 9, name: "Alakh Prakash Goyal University", city: "Shimla" },
];

const getInitials = (name) => {
  const parts = name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const AcademicCollaborations = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Academic <span className="text-[#C6930A]">Collaborations</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with leading law colleges and universities to support
            legal education, mentoring, and events. Our academic collaborators
            include the following institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collaborations.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#F6C57A] to-[#C6930A] text-white font-bold flex items-center justify-center text-lg">
                {getInitials(c.name)}
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {c.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">{c.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicCollaborations;
