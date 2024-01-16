import React, { useState, useEffect } from 'react';
import image from '../Images/Desktop -1.png';
import './Homepage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate(); // Get the navigation function

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    // Implement your search functionality here using searchQuery
    console.log(`Searching for: ${searchQuery}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleBidNowClick = () => {
    navigate('/bid'); 
  };

  return (
    <div>
      <img src={image} alt="Description of the image" />
      <div className="navbar">
        <div className="left-nav">
          <a href="/" className="left-nav">Home</a>
          <a href="#" className="left-nav">About Us</a>
          <a href="#" className="left-nav">Contact</a>
          <a href="#" className="left-nav">FAQs</a>
        </div>
        <div className="right-nav">
          <a href="/login" className="sign-in">Sign in</a>
        </div>
      </div>

      <div className="content">
        <div className="main-content">
          <span className="time-icon">⏱️</span>
          <span className="date-time">{currentTime.toLocaleString()}</span>
          {/* Additional main content here */}
          <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter keywords"
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
        <div className="grey-padded-box">
        <div className="inner-box">
        <div className="row">
        <i class="fa-solid fa-1"></i>
            <span><b>Auction Id:</b></span>
            <span>3011</span>
            <span><b>Department Name:</b></span>
            <span>NLMC</span>
            <span><b>Event Type:</b></span>
            <span>Online</span>
            <span><b>Bidding Mode :</b></span>
            <span>Random</span>
  </div>
  <div className="row">
    <span className="test-label">Test</span>
    <button className="bid-button"  onClick={handleBidNowClick}>Bid Now</button>
  </div>
  <div className="row">
    <span><b>Start Date:</b></span>
    <span>11/30/2023</span>
    <span>07:10:56</span>
    <span><b>End Date:</b></span>
    <span>04/15/2023</span>
    <span>05:19:45</span>
  </div>
  </div>
  {/* Second container */}
  <div className="inner-box">
        <div className="row">
          <div className='number'>1</div>
            <span><b>Auction Id:</b></span>
            <span>3011</span>
            <span><b>Department Name:</b></span>
            <span>NLMC</span>
            <span><b>Event Type:</b></span>
            <span>Online</span>
            <span><b>Bidding Mode :</b></span>
            <span>Random</span>
  </div>
  <div className="row">
    <span className="test-label">Test</span>
    <button className="bid-button"  onClick={handleBidNowClick}>Bid Now</button>
  </div>
  <div className="row">
    <span><b>Start Date:</b></span>
    <span>11/30/2023</span>
    <span>07:10:56</span>
    <span><b>End Date:</b></span>
    <span>04/15/2023</span>
    <span>05:19:45</span>
  </div>
  </div>
    </div>
        </div>
        <div className="sidebar">
           <h3>Confidentiality
Guaranteed!</h3>
         
        </div>
      </div>

      <footer className="footer">
        {/* Add footer content here */}
      </footer>
    </div>
  );
}

export default HomePage;
