import { FeedbackBtn } from '../FeedbackOption/FeedbackOption.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <FeedbackBtn
        name="good"
        onClick={event => onLeaveFeedback(event.target.name)}
      >
        Good
      </FeedbackBtn>
      <FeedbackBtn
        name="neutral"
        onClick={event => onLeaveFeedback(event.target.name)}
      >
        Neutral
      </FeedbackBtn>
      <FeedbackBtn
        name="bad"
        onClick={event => onLeaveFeedback(event.target.name)}
      >
        Bad
      </FeedbackBtn>
    </>
  );
};
