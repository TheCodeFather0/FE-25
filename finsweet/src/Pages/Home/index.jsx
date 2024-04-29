import React from "react";
import Banner from "../../Components/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner
        title="Building stellar websites for early startups"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt. View our work View Pricing"
        image="/Illustration.svg"
        button={
          <Link className="ourWorkBtn" to="/">
            View our work
          </Link>
        }
        viewPricing
      />
    </div>
  );
};

export default Home;
