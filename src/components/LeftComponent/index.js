import React from "react";
import LeftImage from "../../assets/2.png";
import EyeIcon from "../../assets/eyeIcon.png";
import NotifyIcon from "../../assets/notifyIcon.png";
import BellIcon from "../../assets/bell.png";
import BarIcon from "../../assets/barchart.png";
import TestimonialImage from "../../assets/testimonial.png";
import "./LeftComponent.css";
const TestimonialGrid = ({ name, profession, description }) => {
  return (
    <div className="test_grid">
      <p className="title">
        {name} <span className="profession">{profession}</span>
      </p>
      <p className="description">{description}</p>
    </div>
  );
};
export const LeftComponent = () => {
  return (
    <div className="left_container">
      <div className="left_inner">
        <div className="notify_container">
          <div className="left_component">
            <img src={NotifyIcon} />
            <p className="heading">
              Get notified when a<br /> highly correlated <br /> whale makes a
              move
            </p>
            <p className="description">
              Find out when a certain whale moves <br /> more than any preset
              amount on-chain or <br /> when a dormant whale you care about{" "}
              <br /> becomes active.
            </p>
          </div>
          <div className="notify_parent_container">
            <div className="notify_crousel">
              <div className="notify_grid">
                <div className="heading">
                  <img src={BellIcon} />
                  <p>Save</p>
                </div>
                <p className="title">
                  We’ll be sending notifications to you here
                </p>
                <input placeholder="hello@gmal.com" className="notify_input" />
              </div>
              <div className="notify_grid">
                <div className="heading">
                  <img src={BarIcon} />
                  <input type="checkbox" checked className="check" />
                </div>
                <p className="title">
                  Notify me when any wallets move more than
                </p>
                <p className="dollar_container">$1,000.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="trends_container">
          <img src={LeftImage} className="left_image" />
          <div className="right_component">
            <img src={EyeIcon} />
            <p className="heading">
              Watch what the
              <br /> whales are doing
            </p>
            <p className="description">
              All whales are not equal. Know exactly <br />
              what the whales impacting YOUR <br />
              portfolio are doing.
            </p>
          </div>
        </div>

        <div className="testimonials_container">
          <p className="heading">Testimonials</p>
          <div className="divider"></div>
          <div className="bottom_container">
            <img src={TestimonialImage} className="test_image" />
            <div className="test_parent_container">
              <div className="test_grid_container">
                  <TestimonialGrid
                    name={"Jack F"}
                    profession={"Ex Blackrock PM"}
                    description={
                      "Love how Loch integrates portfolio analytics and whale watching into one unified app."
                    }
                  />
                  <TestimonialGrid
                    name={"Jack F"}
                    profession={"Ex Blackrock PM"}
                    description={
                      "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!"
                    }
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
