import React, { useEffect, useState } from "react";
import TimeSlot from "./timeSlot";
import moment from "moment";

const targetTime = moment("2024-05-25");

const CountdownMonths: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetweenYears = moment.duration(targetTime.diff(currentTime)).years();
  const timeBetweenMonths = moment.duration(targetTime.diff(currentTime)).months();
  const timeBetweenDays = moment.duration(targetTime.diff(currentTime)).days();
  const timeBetweenHours = moment.duration(targetTime.diff(currentTime)).hours();
  const timeBetweenMinutes = moment.duration(targetTime.diff(currentTime)).minutes();
  const timeBetweenSeconds = moment.duration(targetTime.diff(currentTime)).seconds();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center py-6 text-1xl tracking-tight text-white sm:text-2xl">
            <TimeSlot time={timeBetweenYears.toString()} timeType={"å"} />
            <TimeSlot time={timeBetweenMonths.toString()} timeType={"m"} />
            <TimeSlot time={timeBetweenDays.toString()} timeType={"d"} />
            <TimeSlot time={timeBetweenHours.toString()} timeType={"t"} />
            <TimeSlot time={timeBetweenMinutes.toString()} timeType={"m"} />
            <TimeSlot time={timeBetweenSeconds.toString()} timeType={"s"} />
        </div>
    </>
  );
};

export default CountdownMonths;