const stats = [
  {
    number: "200+",
    label: "Years of legal experience onboard",
    color: "text-[#ea4820]",
  },
  {
    number: "100+",
    label: " Years of technology experience onboard",
    color: "text-[#ea4820]",
  },
  {
    number: "30+",
    label: "Expert Professors",
    color: "text-[#ea4820]",
  },
  {
    number: "50+",
    label: "Mentors",
    color: "text-[#ea4820]",
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center fade-in-up stagger-${index + 1}`}
            >
              <div
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${stat.color} mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base font-semibold text-black tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
