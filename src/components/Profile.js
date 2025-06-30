import react from "react";
import "./Profile.css";
import Magnet from "../reactbits/Magnet/Magnet";
import TiltedCard from "../reactbits/TiltedCard/TiltedCard";
function Profile() {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-container">
        <div className="profile-text">
        <h2> About Me</h2>
          <p>
            
            👋 Hi, I'm Akhil Santhosh, a B.Tech Computer Science and Engineering
            graduate (2021–2025) with a passion for building meaningful software
            solutions. I specialize in Python, Java, and web development using
            tools like Streamlit and Express.js. I've worked on projects such as
            an AI Doctor Chatbot, a Personal Finance Tracker, and a Carbon
            Footprint Calculator, all aimed at solving real-world problems
            through technology. I'm a strong believer in open-source
            collaboration, enjoy working with Linux systems, and love learning
            new technologies. My goal is to create software that not only works
            but makes a positive impact. 💻 Currently exploring full-stack
            development, API design, and cloud deployment. 📫 Feel free to
            connect with me on LinkedIn or check out my work on GitHub.
          </p>
          <Magnet padding={50} disabled={false} magnetStrength={10}>
            <a href="Akhil_Santhosh-resume.pdf" download className="resume">
              Resume
            </a>
            </Magnet>
        </div>
        
        <div className="profile-picture">
        <TiltedCard
  imageSrc="mcq.jpg"
  altText="Akhil santhosh -profile picture"
  captionText="Akhil Santhosh"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  // overlayContent={
  //   <p className="profile-card">
  //     Akhil Santhosh
  //   </p>
  // }
/>
          {/* <img src="mcq.jpg" alt="Akhil Santhosh" /> */}
        </div>
      </div>
    </section>
  );
}

export default Profile;
