const Footer = () => {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <img
              src="/images/img_38.png"
              alt="Legal Olympiad"
              style={{ height: "40px", marginBottom: "18px" }}
            />
            <p style={{ fontSize: "13.5px", color: "var(--jade)", maxWidth: "34ch" }}>
              India's national benchmark exam, practical training and hiring pipeline for
              law students.
            </p>
          </div>

          <div>
            <h5>THE EXAM</h5>
            <a href="https://app.legalolympiad.com/exam/registration">Register for 2.0</a>
            <a href="https://app.legalolympiad.com/exam/syllabus">Syllabus</a>
            <a href="#benefits">What you get</a>
            <a href="#faq">FAQs</a>
          </div>

          <div>
            <h5>EXPLORE</h5>
            <a href="#steps">Training programmes</a>
            <a href="#magazine">The Working Lawyer</a>
            <a href="#conversations">Podcast</a>
            <a href="#about">About us</a>
          </div>

          <div>
            <h5>CONTACT</h5>
            <a href="mailto:connect@legalolympiad.com">connect@legalolympiad.com</a>
            <a href="tel:+917827050511">+91 78270 50511</a>
            <a href="https://legalolympiad.com">legalolympiad.com</a>
            <a href="mailto:connect@legalolympiad.com">Colleges &amp; firms: partner with us</a>
          </div>
        </div>

        <div className="fbot">
          <span>© 2026 Legal Olympiad. All rights reserved.</span>
          <div>
            <a href="/terms-of-service" style={{ display: "inline", marginRight: "16px" }}>
              Terms of Service
            </a>
            <a href="/privacy-policy" style={{ display: "inline" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
