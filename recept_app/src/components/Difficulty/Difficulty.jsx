import React from "react";
import styles from "./Difficulty.module.css";

export default function Difficulty({ ingredients }) {
    const getDifficulty = (numIngredients) => {
      if (numIngredients <= 3) return "Easy";
      if (numIngredients <= 6) return "Medium";
      return "Hard";
    };
  
    const difficulty = getDifficulty(ingredients.length);
  
    return (
      <div className={styles.difficulty}>
        <strong>Difficulty:</strong> <span className={styles[difficulty.toLowerCase()]}>{difficulty}</span>
      </div>
    );
  }