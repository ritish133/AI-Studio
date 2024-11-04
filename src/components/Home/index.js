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
    { name: 'CreatorAI', work: 'AI Content Creator', logo: Creator ,link: 'https://creator-ai-project.vercel.app/'},
    { name: 'ImagineAI', work: 'AI Image Generator', logo:  Image , link: 'https://imagine-ai-mern.vercel.app/'},
    { name: 'Travelocity', work: 'AI Travel Planner', logo: Travel, link:'https://aitravelplanner.onrender.com/'},
    { name: 'MockMateAI', work: 'AI Interview Mocker', logo: Interview , link: 'https://ai-mock-interview-azure.vercel.app/'},
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
      link: 'https://imagine-ai-mern.vercel.app/',
    },
    {
      image: Travel,
      text: 'Travelocity offers personalized travel planning using AI technology.',
      link: 'https://aitravelplanner.onrender.com/',
    },
    {
      image:  Interview,
      text: 'MockMateAI prepares you for job interviews with simulated questions and feedback.',
      link: 'https://ai-mock-interview-azure.vercel.app/',
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
      <div className="background-home relative">
        <div className=' flex flex-col justify-center items-center absolute top-64'>
          <h1>Making AI More Accessible</h1>
          <a href='#products'>
          <button>Check Out Our Products</button>
          </a>
        </div>
        
      </div>

      <h1 id="products" className='text-3xl font-bold mt-16 mb-10'>Our Products</h1>
      <div className="card-container m-10">

        {/* Creator AI */}
          <div className="card">
            <div className="card-inner" onClick={() => window.location.href = 'https://creator-ai-project.vercel.app/'}>
              <div className="card-back">
                <div className="flex flex-col justify-center items-center">
                  <img className="card-logo" src={Creator} alt='Creator AI' />
                  <h2 className='mt-5'>AI Content Creator</h2>
                </div>
              </div>
              <div className="card-front">
                <img className="card-logo" src={Creator} alt='Creator AI' />
              </div>
            </div>
          </div>

        {/* Imagine AI */}
          <div className="card">
            <div className="card-inner" onClick={() => window.location.href = 'https://imagine-ai-mern.vercel.app/'}>
              <div className="card-back">
                <div className="flex flex-col justify-center items-center">
                  <img className="card-logo" src={Image} alt='Imagine AI' />
                  <h2 className='-mt-5'>AI Image Generator</h2>
                </div>
              </div>
              <div className="card-front">
                <img className="card-logo" src={Image} alt='Imagine AI' />
              </div>
            </div>
          </div>

        {/* Travelocity */}
        <div className="card">
            <div className="card-inner" onClick={() => window.location.href = 'https://aitravelplanner.onrender.com/'}>
              <div className="card-back">
                <div className="flex flex-col justify-center items-center">
                  <img className="card-logo" src={Travel} alt='Travelocity' />
                  <h2 className='mt-5'>AI Travel Planner</h2>
                </div>
              </div>
              <div className="card-front">
                <img className="card-logo" src={Travel} alt='Travelocity' />
              </div>
            </div>
          </div>

        {/* MockMate AI */}
        <div className="card">
            <div className="card-inner" onClick={() => window.location.href = 'https://ai-mock-interview-azure.vercel.app/'}>
              <div className="card-back">
                <div className="flex flex-col justify-center items-center relative">
                  <img className="card-logo" src={Interview} alt='MockMate AI' />
                  <h2 className='absolute top-[110px]'>AI Interview Mocker</h2>
                </div>
              </div>
              <div className="card-front">
                <img className="card-logo" src={Interview} alt='MockMate AI' />
              </div>
            </div>
          </div>

      </div>


      {/* Detail Section */}
      <h1 id='details' className='text-3xl font-bold mt-24'>Details Section</h1>
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
      <div className="tools-logos" id='tools'>
        <h2 className='text-3xl font-bold mt-14'>Tools Used in Development</h2>
        <div className="logo-container mt-10">
          {toolsLogos.map((tool, index) => (
            <img key={index} src={tool.logo} alt={tool.name} className="tool-logo" />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} AI Studio. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
