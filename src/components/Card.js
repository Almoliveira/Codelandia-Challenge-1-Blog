import { useState } from "react";
import styles from "./Card.module.css";
import { useDispatch } from 'react-redux';
import {listActions} from '../store/list'

const Card = (props) => {
  const [heartIcon, setHeartIcon] = useState(props.hearted);
  const dispatch = useDispatch();

  const imageClickHandler = () => {
    setHeartIcon(!heartIcon);
    dispatch(listActions.addHeart(props.id));
  };
  

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.dateContainer}>
          <h4>{props.date}</h4>
          <img
            className={styles.heartIcon}
            src={
              heartIcon
                ? require("../assets/icons/heart_filled.png")
                : require("../assets/icons/heart_outline.png")
            }
            alt="heart"
            onClick={imageClickHandler}
          />
        </div>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
      </div>
    </div>
  );
};

export default Card;
