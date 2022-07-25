import React from 'react'
import "./recomposible5.css"
export default function Recomposible5() {
    return (
      <div className="itembox5">
        <h3>Frequently Asked questions</h3>
        <div>
          <div className="querybox">What is Netflix?</div>
          <div className="querybox">How much does netflix cost?</div>
          <div className="querybox">Where can i watch?</div>
          <div className="querybox">How do i cancel?</div>
          <div className="querybox">What can i watch on Netflix?</div>
          <div className="querybox">Is Netflix good for kids?</div>
        </div>

        <div className="header-title2">
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
    );
        
}