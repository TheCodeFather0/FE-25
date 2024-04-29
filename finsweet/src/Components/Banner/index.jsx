import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = ({ title, description, image, button, viewPricing = false }) => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="row align-items-center justify-content-between ">
          <div className="col-6">
            <p className={styles.slogan}>{title}</p>
            <p className={styles.subSlogan}>{description}</p>

            {button}
            {viewPricing && (
              <Link className={styles.pricingBtn} to="/">
                View Pricing <FaLongArrowAltRight className={styles.arrow} />
              </Link>
            )}
          </div>
          <div className="col-6">
            <img src={image} alt="banner image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
