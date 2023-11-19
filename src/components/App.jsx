import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';
import { Statistics } from './Statistic/Statistics';
import { FeedbackOptions } from './FeedbackOption/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    if (name === 'good') {
      return setGood(prevState => prevState + 1);
    }
    if (name === 'neutral') {
      return setNeutral(prevState => prevState + 1);
    }
    if (name === 'bad') {
      return setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const totalFeedback = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {!totalFeedback && <Notification />}
      {totalFeedback > 0 && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
};

export const App = () => {
  return (
    <div>
      <Feedback />
      <GlobalStyle />
    </div>
  );
};
