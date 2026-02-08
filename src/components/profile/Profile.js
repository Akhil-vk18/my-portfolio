import "./Profile.css";
import Magnet from "../../reactbits/Magnet/Magnet";
import TiltedCard from "../../reactbits/TiltedCard/TiltedCard";
function Profile() {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-container">
        <div className="profile-text">
        <h2> About Me</h2>
         
            
     <h3>👋 Hi, I'm Akhil Santhosh </h3>
     <p>
Java Developer with hands-on experience building backend applications using Java Spring Boot, RESTful APIs, and MySQL. Strong foundation in Object-Oriented Programming, database design, and API integration. Experienced in developing and testing backend services, integrating frontend systems, and working with version control tools.
</p>
<p>
I'm a B.Tech Computer Science graduate (2021–2025) from SNM IMT with expertise in backend development. I love creating scalable applications that challenge me, push my problem-solving skills, and help me grow as a developer. My goal is to craft clean, efficient, and robust backend solutions.
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
/>
        </div>
      </div>
    </section>
  );
}

export default Profile;
