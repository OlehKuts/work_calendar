import React from "react";
import { VisitLine } from "./VisitLine";
import { EmptyCell } from "./EmptyCell";

export const DayItem = ({ day, index }) => {
  const { dayNumber } = day;
  const lines = [1, 1, 1];
  return (
    <>
      {index % 7 === 5 || index % 7 === 6 ? (
        <>
          <div className="weekend">
            <div className="weekendHeader">{index < 31 ? dayNumber : ""} </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          {dayNumber ? (
            <>
              <div className="dayItem">
                <VisitLine isUsual={false} date={dayNumber} />
                {lines.map((line, index) => (
                  <VisitLine key={index} isUsual={true} />
                ))}
              </div>{" "}
            </>
          ) : (
            <EmptyCell />
          )}
        </>
      )}
    </>
  );
};
