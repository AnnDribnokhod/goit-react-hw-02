import css from "./Feedback.module.css";

export default function Feedback({
  feedback,
  positiveFeedback,
  totalFeedback,
}) {
  const { good, neutral, bad } = feedback;

  return (
    <div className={css.container}>
      <p>Good:{good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {totalFeedback > 0 && <p>Total: {totalFeedback}</p>}
      {positiveFeedback > 0 && <p>Positive: {positiveFeedback}%</p>}
    </div>
  );
}
