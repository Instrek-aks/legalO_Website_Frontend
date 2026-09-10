import React, { useState, useEffect, useRef } from "react";

function useAnimatedCount(target, duration = 1800, isStarted = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isStarted) return;
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Smooth easeOutCubic curve
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, isStarted]);

  return count;
}

const ConversationsSection = () => {
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ytViews = useAnimatedCount(60, 1600, hasEntered);
  const igViews = useAnimatedCount(90, 1800, hasEntered);

  return (
    <section className="dark" id="bar" ref={sectionRef}>
      <div className="jaali"></div>
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">THE PODCAST</div>
          <h2>
            The senior Bar sits down with us, on<br />
            the record
          </h2>
          <p className="lede">
            Full conversations with the people who actually run the profession. Free to watch, on our YouTube channel.
          </p>
        </div>

        {/* Featured Large Video */}
        <a
          className="vid vid-lg reveal"
          href="https://youtube.com/@legalolympiad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/img_9.jpg"
            alt="Sr. Adv. Chetan Sharma Interview"
          />
          <div className="play"></div>
          <div className="vmeta">
            <em>LATEST EPISODE</em>
            <strong>Sr. Adv. Chetan Sharma</strong>
            <small>Additional Solicitor General of India, Delhi High Court</small>
          </div>
        </a>

        {/* 3 Smaller Videos Grid */}
        <div className="vids">
          <a
            className="vid reveal"
            href="https://youtube.com/@legalolympiad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/img_10.jpg"
              alt="Sr. Adv. Nandita Rao Interview"
            />
            <div className="play"></div>
            <div className="vmeta">
              <strong>Sr. Adv. Nandita Rao</strong>
              <small>Senior Advocate</small>
            </div>
          </a>

          <a
            className="vid reveal"
            href="https://youtube.com/@legalolympiad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/img_11.jpg"
              alt="Sr. Adv. Sanjay Jain Interview"
            />
            <div className="play"></div>
            <div className="vmeta">
              <strong>Sr. Adv. Sanjay Jain</strong>
              <small>Former Additional Solicitor General of India</small>
            </div>
          </a>

          <a
            className="vid reveal"
            href="https://www.youtube.com/@legalolympiad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/mo.png"
              alt="Sr. Adv. Mohit Mathur Interview"
            />
            <div className="play"></div>
            <div className="vmeta">
              <strong>Sr. Adv. Mohit Mathur</strong>
              <small>President, Delhi High Court Bar Association</small>
            </div>
          </a>
        </div>

        {/* Footer Stats + YouTube CTA Row */}
        <div className="podfoot">
          <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
            <div>
              <b style={{ fontVariantNumeric: "tabular-nums" }}>{hasEntered ? `${ytViews}K+` : "0K+"}</b>
              <span>Views on YouTube</span>
            </div>
            <div>
              <b style={{ fontVariantNumeric: "tabular-nums" }}>{hasEntered ? `${igViews}K+` : "0K+"}</b>
              <span>Views on Instagram</span>
            </div>
          </div>
          <div>
            <a
              className="btn btn-o"
              href="https://youtube.com/@legalolympiad"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open our YouTube channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationsSection;
