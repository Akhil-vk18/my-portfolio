import "./Profile.css";
import Magnet from "../../reactbits/Magnet/Magnet";
import TiltedCard from "../../reactbits/TiltedCard/TiltedCard";
function Profile() {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-container">
        <div className="profile-text">
        <h2> About Me</h2>
         
            
     <h3>👋 Hi, I’m Akhil Santhosh </h3><p>
I’m a B.Tech Computer Science graduate (2021–2025) from SNM IMT with a passion for coding and building impactful software. My core skills include Java, Python, and JavaScript, and I’m currently diving deeper into full-stack development and exploring cloud technologies.

I love creating projects that challenge me, push my problem-solving skills, and help me grow as a developer. My goal is to craft clean, efficient, and user-friendly solutions that make a difference.
          </p>
          <Magnet padding={50} disabled={false} magnetStrength={10}>
            <a href="Akhil_Santhosh-resume.pdf" download className="resume">
              Resume
            </a>
            </Magnet>
        </div>
        
        <div className="profile-picture">
        <TiltedCard
  imageSrc="profile-pic.png"
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
