const MagazinesSection = () => {
  return (
    <section className="dark" id="magazine">
      <div className="jaali"></div>
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">The Working Lawyer</div>
          <h2>
            A monthly magazine, free with your<br />
            registration
          </h2>
          <p className="lede">
            Four issues since April 2026, each built around a conversation with a
            Senior Advocate or Law Officer of India. Your year of platform access
            includes every issue.
          </p>
        </div>

        <div className="mags">
          <figure className="mag reveal in">
            <img src="/images/img_16.jpg" alt="Sr. Adv. Sanjay Jain" loading="lazy" />
            <figcaption>
              <span>Issue 1 · April 2026</span>
              <strong>Sr. Adv. Sanjay Jain</strong>
            </figcaption>
          </figure>

          <figure className="mag reveal in">
            <img src="/images/img_17.jpg" alt="Sr. Adv. Mohit Mathur" loading="lazy" />
            <figcaption>
              <span>Issue 2 · May 2026</span>
              <strong>Sr. Adv. Mohit Mathur</strong>
            </figcaption>
          </figure>

          <figure className="mag reveal in">
            <img src="/images/img_18.jpg" alt="Sr. Adv. Nandita Rao" loading="lazy" />
            <figcaption>
              <span>Issue 3 · June 2026</span>
              <strong>Sr. Adv. Nandita Rao</strong>
            </figcaption>
          </figure>

          <figure className="mag reveal in">
            <img src="/images/img_19.jpg" alt="Sr. Adv. Chetan Sharma" loading="lazy" />
            <figcaption>
              <span>Issue 4 · July 2026</span>
              <strong>Sr. Adv. Chetan Sharma</strong>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default MagazinesSection;
