import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              JWELIN
              <br />
              <span>SHAH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 style={{ fontSize: "1rem", maxWidth: "35vw", marginTop: "1rem", lineHeight: "1.5" }}>I HELP PEOPLE, COMPANIES TO GET MORE ATTENTION BY MY EDITING</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Graphic Designer</div>
              <div className="landing-h2-2">Video Editor</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Video Editor</div>
              <div className="landing-h2-info-1">Graphic Designer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
