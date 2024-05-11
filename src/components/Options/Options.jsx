import css from "./Options.module.css";

export default function Options({
  feedbackOptions: { good, neutral, bad },
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  console.log("good:", good);
  console.log("neutral:", neutral);
  console.log("bad:", bad);
  console.log("totalFeedback:", totalFeedback);

  return (
    <div className={css.container}>
      <button
        className={css.btn_contained}
        onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={css.btn_contained}
        onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button
        className={css.btn_contained}
        onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn_outlined} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
