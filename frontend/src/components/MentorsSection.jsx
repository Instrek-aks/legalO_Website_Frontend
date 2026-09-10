const MentorsSection = () => {
  return (
    <section id="mentors">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">Learning from the top advocates</div>
          <h2>
            You are not learning from a syllabus.<br />
            You are learning from them.
          </h2>
          <p className="lede">
            Every conversation, masterclass and mentorship session on the platform
            comes from advocates who argue at the highest levels of the Indian
            courts. This is the network your rank connects you into.
          </p>
        </div>

        <div className="bars">
          <figure className="bar reveal in">
            <img src="/images/img_13.jpg" alt="Sr. Adv. Mohit Mathur" />
            <figcaption>
              <strong>Sr. Adv. Mohit Mathur</strong>
              <span>President, Delhi High Court Bar Association</span>
            </figcaption>
          </figure>

          <figure className="bar reveal in">
            <img src="/images/img_14.jpg" alt="Sr. Adv. Chetan Sharma" />
            <figcaption>
              <strong>Sr. Adv. Chetan Sharma</strong>
              <span>Additional Solicitor General of India, Delhi High Court</span>
            </figcaption>
          </figure>

          <figure className="bar reveal in">
            <img src="/images/img_15.jpg" alt="Sr. Adv. Sanjay Jain" />
            <figcaption>
              <strong>Sr. Adv. Sanjay Jain</strong>
              <span>Former Additional Solicitor General of India</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
