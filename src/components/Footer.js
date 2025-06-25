import React from "react";

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
      Developed by Akhil Santhosh © {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
