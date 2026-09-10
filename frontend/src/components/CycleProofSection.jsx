const CycleProofSection = () => {
  return (
    <section id="proof">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">CYCLE 1.0 · MARCH 2026</div>
          <h2>We have already done this once, on the ground</h2>
          <p className="lede">
            A physical national examination, designed, seated, invigilated and
            graded by the Legal Olympiad team across partner campuses in five
            states.
          </p>
        </div>

        <figure className="feature reveal">
          <img src="/images/img_2.jpg" alt="Legal Olympiad 1.0 Exam Center" />
          <figcaption>
            Legal Olympiad 1.0 test center — March 2026. Invigilated examination in
            progress across 12 partner law colleges.
          </figcaption>
        </figure>

        <div className="gal" style={{ marginBottom: "32px" }}>
          <div className="shot reveal">
            <img src="/images/img_3.jpg" alt="Classroom Exam Hall" />
          </div>
          <div className="shot reveal">
            <img src="/images/img_4.jpg" alt="Students Attempting Paper" />
          </div>
          <div className="shot reveal">
            <img src="/images/img_5.jpg" alt="Exam Invigilation" />
          </div>
          <div className="shot reveal">
            <img src="/images/img_6.jpg" alt="Candidate Verification Desk" />
          </div>
          <div className="shot reveal">
            <img src="/images/img_7.jpg" alt="Felicitation Ceremony" />
          </div>
          <div className="shot reveal">
            <img src="/images/img_8.jpg" alt="Trophy Presentation" />
          </div>
        </div>

        <div className="bigstat" style={{ marginTop: "40px" }}>
          <div>
            <b>25+</b>
            <span>Colleges whose students sat Cycle 1.0</span>
          </div>
          <div>
            <b>5</b>
            <span>States and territories covered</span>
          </div>
          <div>
            <b>100%</b>
            <span>Mentorship delivered to top rankers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CycleProofSection;
