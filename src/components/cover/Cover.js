import React from "react";
import "./Cover.css";
import RotatingText from "../../reactbits/RotatingText/RotatingText";
import Aurora from "../../reactbits/Aurora/Aurora";
import Quote from "../quotes/Quote";

function Cover() {
  return (
    <section className="cover-section">
      <Aurora
        className="aurora-bg"
        colorStops={["#DFB2F4", "#55D6C2", "#DFB2F4"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="cover-root">
        {/* <div className="cover-corner cover-top-left fade-in">
          <FaEye className="cover-eye" />
          <span className="cover-visitors">{VISITOR_COUNT}</span>
        </div> */}
        {/* <div className="cover-corner cover-top-right fade-in">
          {dateTime.toLocaleDateString()}
          <br />
          {dateTime.toLocaleTimeString()}
        </div> */}
        <div className="cover-center fade-in">
          <h1 className="cover-title">Akhil Santhosh</h1>
          <p className="cover-subtitle">
            Java Backend Developer | Spring Boot Specialist
          </p>
          <div className="wrapper">
            <div className="rotating-text">
              <RotatingText
                texts={["Build", "Deploy", "Optimize", "Scale"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <span className="plain-code">Backend APIs</span>
          </div>
        </div>
        <div className="quotes">
          <Quote />
        </div>
      </div>
    </section>
  );
}

export default Cover;
