import React from "react";
import classNames from "classnames";
import { Icon } from "../Icon";
import Countdown from "react-countdown";
import "./Timer.css";

const timerOptions = [30, 60, 90, 180];
const timerRenderOptions = timerOptions.map((t) => ({
  display: t,
  actual: t * 1000,
}));

export const Timer = () => {
  const [duration, setDuration] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);
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
    setTimerOn(true);
  };

  const renderer = ({ completed, seconds, formatted }) => {
    return (
      <span
        className={classNames("Timer-counter", {
          "Timer-counter-expired": initialized && completed,
          "Timer-counter-expiring": seconds <= 5 && !completed,
          "Timer-counter-warning": seconds <= 15 && seconds > 5,
        })}
      >
        {initialized ? `${formatted.minutes}:${formatted.seconds}` : "00:00"}
      </span>
    );
  };

  return (
    <React.Fragment>
      <span className="Timer">
        <Icon
          classes={["Timer-icon", "grey-disabled"]}
          icon={timerOn ? "timer" : "timer_off"}
          size="large"
        />

        <span className={classNames("Timer-options")}>
          {timerRenderOptions.map(({ display, actual }) => (
            <span
              className={classNames({
                "Timer-selected": actual === duration,
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
          className="Timer-counter"
          key={timerDate}
          renderer={renderer}
          date={timerDate}
          onComplete={() => setTimerOn(false)}
        />
      </span>
    </React.Fragment>
  );
};
