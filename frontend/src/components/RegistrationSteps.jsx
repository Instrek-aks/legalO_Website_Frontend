const RegistrationSteps = () => {
  return (
    <section id="after">
      <span id="steps" style={{ display: "none" }} />
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">After the exam</div>
          <h2>The rank is the beginning, not the end</h2>
          <p className="lede">
            What happens in the twelve months after you sit the paper.
          </p>
        </div>

        <div className="steps">
          <div className="step reveal in">
            <b>1</b>
            <h3>Results in two weeks</h3>
            <p>
              All India Rank, State Rank and your official certificate.
            </p>
          </div>
          <div className="step reveal in">
            <b>2</b>
            <h3>Mentorship begins</h3>
            <p>
              One-to-one sessions with practising advocates, for every participant.
            </p>
          </div>
          <div className="step reveal in">
            <b>3</b>
            <h3>Training matched to you</h3>
            <p>
              Judgement Appreciation, Drafting and Pleading, Digital Litigation and Senior
              Counsel masterclasses.
            </p>
          </div>
          <div className="step reveal in">
            <b>4</b>
            <h3>Internships and jobs</h3>
            <p>
              Top 100 rankers are put in front of leading lawyers and hiring firms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSteps;
