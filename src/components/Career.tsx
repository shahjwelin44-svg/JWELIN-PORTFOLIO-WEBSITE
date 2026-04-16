import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Beginner Video Editor</h4>
                <h5>Self-Taught — Mobile Editing</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              At that time, around in 2021, I just started editing. I was
              learning the basics using mobile apps like CapCut and PicsArt,
              experimenting with cuts, transitions, and effects to build my
              foundation in video editing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate Editor &amp; Designer</h4>
                <h5>Freelance — PC Editing with Adobe Suite</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              At that time, I was becoming a good-level editor and I switched
              from mobile to PC for making my career in editing even better. I
              learned Adobe Premiere Pro and Photoshop, and approached and worked
              with many clients and content creators.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Video Editor &amp; Graphic Designer</h4>
                <h5>Freelance — Full-Time Editing &amp; Design</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Now it is almost 5–6 years I am into editing and I am earning from
              video editing and graphic designing. I just bought my dream PC
              with a Core i7 processor and RTX 5060 Ti — ready to take on
              bigger and better projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
