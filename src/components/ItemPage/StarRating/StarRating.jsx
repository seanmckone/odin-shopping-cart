import PropTypes from "prop-types";

import styles from "./StarRating.module.css";
import starIcon from "../../../assets/icons/star.png";

function StarRating({ rating }) {
  // Create an array of stars based on the rating value
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img src={starIcon} key={i} className={styles.star} />);
  }

  return <div className={styles.starContainer}>{stars}</div>;
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
