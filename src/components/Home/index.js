// Home.js
import React from 'react';
import './index.css'; // Import the CSS file for styling
import Header from '../Header'; // Import the new Header component
import Creator from '../../assets/creator.jpg'; // Import your local logo
import Travel  from '../../assets/travel.jpg';
import Image from '../../assets/image.png';
import Interview from '../../assets/interview.jpg';

const Home = () => {
  const cards = [
    { name: 'CreatorAI', logo: Creator ,link: 'https://creator-ai-project.vercel.app/'},
    { name: 'ImagineAI', logo:  Image , link: 'test'},
    { name: 'Travelocity', logo: Travel, link:'https://aitravelplanner.onrender.com/'},
    { name: 'InterviewAI', logo: Interview , link: 'https://ai-mock-interview-snowy-nine.vercel.app/'},
  ];

  const details = [
    {
      image: Creator,
      text: 'CreatorAI is a platform that harnesses the power of artificial intelligence to create unique content.',
      link: 'https://creator-ai-project.vercel.app/',
    },
    {
      image: Image,
      text: 'ImagineAI allows you to visualize concepts through AI-generated art and designs.',
      link: 'https://imagineai.example.com',
    },
    {
      image: Travel,
      text: 'Travelocity offers personalized travel planning using AI technology.',
      link: 'https://aitravelplanner.onrender.com/',
    },
    {
      image:  Interview,
      text: 'InterviewAI prepares you for job interviews with simulated questions and feedback.',
      link: 'https://ai-mock-interview-snowy-nine.vercel.app/',
    },
  ];

  const toolsLogos = [
    { name: 'React', logo: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png' },
    { name: 'Node.js', logo: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png' },
    { name: 'MongoDB', logo: 'https://seeklogo.com/images/M/mongodb-logo-4A71340576-seeklogo.com.png' },
    { name: 'Express', logo: 'https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png' },
    { name: 'Tailwind CSS', logo: 'https://seeklogo.com/images/T/tailwind-css-wordmark-logo-3518C9010A-seeklogo.com.png' },
    { name: 'GitHub', logo: 'https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png' },
    { name: 'TypeScript', logo: 'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png' },
  ];

  return (
    <div className="home">
      <Header />
      <div className="background-home">
        <h1>Making AI More Accessible</h1>
        <button>Check Out Our Products</button>
      </div>
      <h1>Our Products</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-inner" onClick={() => window.location.href = card.link}>
              <div className="card-back">
                <div className="card-name">{card.name}</div>
              </div>
              <div className="card-front">
                <img className="card-logo" src={card.logo} alt={card.name} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Section */}
      <h1>Details Section</h1>
      <div className="detail-container">
        {details.map((detail, index) => (
          <div className="detail-item" key={index}>
            <img className="detail-image" src={detail.image} alt={`Detail ${index}`} />
            <div className="detail-text">
              {detail.text}
              <br />
              <a href={detail.link} rel="noopener noreferrer">
                <button className="detail-button">Check it out</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Tools Logos Section */}
      <div className="tools-logos">
        <h2>Tools Used in Development</h2>
        <div className="logo-container">
          {toolsLogos.map((tool, index) => (
            <img key={index} src={tool.logo} alt={tool.name} className="tool-logo" />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <h2>Connect with Us</h2>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} AI Studio. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
