import React, { useState, useEffect } from 'react';
import image from '../Images/Desktop -1.png';
import './BiddingPage.css'

function BiddingPage() {

  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

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

    return(
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
        <div className='grey-box'>
          <div className='row-12'>
            <div className='col'>
              <h6>Auction Details</h6>
              <p><b>Department: </b>NLMC</p> 
              <p><b>Auction ID: </b>3011</p>
              <p><b>Auction Brief: </b>test</p>
              <p><b>Product/Service/Work Keywords: </b>test</p>
              <p><b>Type of contract: </b>Goods</p>
              <p><b>Remarks: </b></p>
              <p><b>Officer: </b>sid officer</p>
              <p><b>Auction no: </b>test</p>
            </div>
            <div className='col'>
            <h6>Bidding Rules</h6>
            <p><b>Bid submission for: </b>Each line item</p> 
            <p><b>Line item wise bid submission time allowed?: </b>No</p> 
            <p><b>Auto bid allowed?: </b>No</p> 
            <p><b>First bid acceptance condition: </b>Yes</p>
            <p><b>Increment/ Decreament in multiples:</b>Yes</p> 
            <p><b>Allowed auto extension?: </b>Yes</p> 
            <p><b>Bidding price increment in: </b>Figure</p>
            <p><b>Item selection: </b>Yes</p> 
            </div>
          </div>
          <div className='row-12'>
            <div className='col'>
            <h6>Auction Varient</h6>
            <p><b>Demo auction: </b>Yes</p> 
            <p><b>Demo auction: </b>Yes</p> 
            <p><b>Demo auction: </b>Yes</p> 
            </div>
            <div className='col'>
            <h6>Bidders</h6>
            <p><b>Demo auction: </b>Yes</p> 
            <p><b>Demo auction: </b>Yes</p> 
            <p><b>Demo auction: </b>Yes</p> 
            </div>
            <div className='col'>
            <h6>Accessibility</h6>
            <p><b>Demo auction: </b>Yes</p>  
            </div>
          </div>
          <div className='row-12'>
            <div className='col'>
            <h6>Evaluation</h6>
            <p><b>Demo auction: </b>No</p> 
            </div>
            <div className='col'>
            <h6>Location</h6>
            <p><b>Demo auction: </b>Yes</p> 
            </div>
            <div className='col'>
            <h6>Time</h6>
            <p><b>Demo auction: </b>Yes</p>
            <p><b>Demo auction: </b>Yes</p>             
            </div>
          </div>
        </div>
        </div>
      </div>

        </div>
    )
}

export default BiddingPage;