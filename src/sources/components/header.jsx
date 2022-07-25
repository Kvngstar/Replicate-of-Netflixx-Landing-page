import React from 'react';
import "./header.css"

export default function Header() {
    return (
        <div className="first-section">
        <div className="overlay"></div>
        <div className="overlay2"></div>
        <div className="header">
          <div className="title">NETFLIX</div>
          <div>
            <button>Sign In</button>
          </div>
        </div>
        <div className="header-title">
          <div className="prospect">Unlimited movies, TV shows, and more.</div>
          <p>Watch anywhere. Cancel anytime</p>
          <br />
          <p>
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          <div className="searchbar">
            <input type="text" placeholder="Email adress" />
            <button>Get Started</button>
          </div>
            </div>
            </div>
    )
}