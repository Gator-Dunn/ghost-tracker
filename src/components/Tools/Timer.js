import React from "react";
import classNames from "classnames";
import Countdown from "react-countdown";

const timerOptions = [30, 60, 90, 180];
const timerRenderOptions = timerOptions.map((t) => ({
  display: t,
  actual: t * 1000,
}));

const Timer = () => {
  const [duration, setDuration] = React.useState(0);
  const [timerDate, setTimerDate] = React.useState();
  const [initialized, setInitialized] = React.useState(false);

  const clickHandler = (e) => {
    let {
      target: {
        dataset: { actual = 0 },
      },
    } = e;

    actual = Number(actual);

    const newTimerDate = Date.now() + actual;
    setDuration(actual);
    setTimerDate(newTimerDate);
    setInitialized(true);
  };

  const renderer = ({ completed, minutes, seconds, formatted }) => {
    return (
      <span
        className={classNames("timer__counter", {
          "timer__counter--expired": initialized && completed,
          "timer__counter--expiring": minutes === 0 && seconds <= 5 && !completed,
          "timer__counter--warning":
            minutes === 0 && seconds <= 15 && seconds > 5,
        })}
      >
        {initialized ? <span>{`${formatted.minutes}:${formatted.seconds}`}</span> : <span>00:00</span>}
      </span>
    );
  };

  return (
    <React.Fragment>
      <span className="timer__label">Timer</span>
      <span className={classNames("timer__options")}>
        {timerRenderOptions.map(({ display, actual }) => (
          <span
            className={classNames({
              "timer__selected": actual === duration,
            })}
            key={display}
            data-actual={actual}
            onClick={clickHandler}
          >
            {display}
          </span>
        ))}
      </span>

      <Countdown
        className="timer__counter"
        key={timerDate}
        renderer={renderer}
        date={timerDate || new Date()}
      />
    </React.Fragment>
  );
};

export default Timer;
