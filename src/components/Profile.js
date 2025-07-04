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
            
          I'm Akhil Santhosh, a Computer Science and Engineering graduate from the Class of 2025. Currently focused on Java development and backend technologies, I'm actively seeking internship opportunities as a fresher to apply my skills, learn from real-world projects, and grow as a developer.
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
