import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" style={{ marginTop: "60px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ display: "block", width: "100%" }}
      >
        <path
          fill="#FFF8DC"
          fillOpacity="1"
          d="M0,128L80,106.7C160,85,320,43,480,64C640,85,800,171,960,202.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div style={{ textAlign: "center", padding: "1rem", backgroundColor: "#FFF8DC" }}>
        <p style={{ margin: 0 }}>github @AztKloyd</p>
      </div>
    </footer>
  );
}