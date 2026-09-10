const CTASection = () => {
  return (
    <section className="dark" style={{ textAlign: "center" }}>
      <div className="jaali"></div>
      <div className="wrap">
        <div className="eyebrow">Legal Olympiad 2.0 · 18 October 2026</div>
        <h2 style={{ maxWidth: "20ch", margin: "0 auto 16px" }}>
          You can inherit a name.<br />
          You cannot inherit a<br />
          rank.
        </h2>
        <p className="lede center" style={{ marginBottom: "28px" }}>
          Registration is open to every law student and CLAT aspirant in India. Two minutes, ₹499.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            className="btn btn-g"
            href="https://app.legalolympiad.com/exam/registration"
          >
            Register now →
          </a>
          <a
            className="btn btn-o"
            href="https://app.legalolympiad.com/exam/syllabus"
          >
            See the syllabus
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
