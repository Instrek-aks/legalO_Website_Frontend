const StudentMisconceptions = () => {
  return (
    <section id="foryou">
      <div className="wrap">
        <div className="head" style={{ maxWidth: "1000px" }}>
          <div className="eyebrow">READ THIS BEFORE YOU DECIDE</div>
          <h2>
            Four reasons students think this is not<br />
            for them
          </h2>
          <p className="lede">Every one of them is the reason it is.</p>
        </div>
        <div className="grid g4">
          <div className="card">
            <h3>“I am not at an NLU.”</h3>
            <p>
              Your college does not appear on your rank. Only your reasoning does.
              That is the entire point of a national paper.
            </p>
          </div>
          <div className="card">
            <h3>“I have not prepared.”</h3>
            <p>
              There is nothing to cram. The paper tests reasoning, not memory. You
              are already carrying what it measures.
            </p>
          </div>
          <div className="card">
            <h3>“My college has not signed up.”</h3>
            <p>
              You do not need them. You register directly, in two minutes, from
              anywhere in India.
            </p>
          </div>
          <div className="card">
            <h3>“I am only in first year.”</h3>
            <p>
              Then sit it now. You get a benchmark today and three more years to beat
              it. Waiting costs you the comparison.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentMisconceptions;
