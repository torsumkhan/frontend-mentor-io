import React, { useState } from "react";
import star from "../images/icon-star.svg";
import illustration from "../images/illustration-thank-you.svg";

function Card() {
  const [showcard1, setShowCard1] = useState(true);
  const [rating, setRating] = useState(0);
  const [style, setStyle] = useState("btn-wrapper");

  const clickHandler = () => {
    setShowCard1(false);
  };

  const ratingHandler = (e) => {
    setRating(e.target.innerHTML);
  };
  return (
    <div>
      {showcard1 ? (
        <div className="card-1">
          <div className="container">
            <div className="icon-container">
              <img src={star} />
            </div>
            <div className="title-container">
              <h1>How did we do?</h1>
            </div>
            <div className="text-container">
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div>
              <div className="rating-container">
                <div className="btn-wrapper">
                  <button onClick={ratingHandler}>1</button>
                </div>
                <div className="btn-wrapper">
                  <button id="btn" onClick={ratingHandler}>
                    2
                  </button>
                </div>
                <div className="btn-wrapper">
                  <button onClick={ratingHandler}>3</button>
                </div>
                <div className="btn-wrapper">
                  <button onClick={ratingHandler}>4</button>
                </div>
                <div className="btn-wrapper">
                  <button onClick={ratingHandler}>5</button>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <button onClick={clickHandler}>SUBMIT</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-2">
          <div className="container">
            <div className="illustration-container">
              <img src={illustration} />
            </div>
            <div className="rating">
              <p>You Selected {rating} out of 5</p>
            </div>
            <div className="title-container thankyou">
              <h1>Thank You!</h1>
            </div>
            <div className="text-container text-thankyou">
              <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
