import React, { useState } from "react";
import "./styles.css";
import { months } from "./initialData/formData";
import { DayItem } from "./components/DayItem";
import { createNumsArr } from "./utils/createNumsArr";
import { createMonthlyList } from "./utils/createMonthlyList";
import { Header } from "./components/Header";

export const App = () => {
  const date = new Date();
  const year = date.getFullYear();
  const years = createNumsArr(year, year + 1);
  const [formMode, setFormMode] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(years[0]);
  const [finalList, setFinalList] = useState([]);

  const createCalendar = () => {
    setFinalList(createMonthlyList(currentYear, currentMonth));
    setFormMode(false);
    alert("Для друку не забудьте обрати альбомну орієнтацію!");
  };
  return (
    <div className="App">
      {formMode && (
        <div className="formContainer">
          <h1>Створіть місячний календар</h1>
          <select onChange={(e) => setCurrentMonth(Number(e.target.value))}>
            <option disabled>Оберіть місяць</option>
            {months.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <select onChange={(e) => setCurrentYear(e.target.value)}>
            <option disabled>Оберіть рік</option>
            {years.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <button onClick={createCalendar}>Підтвердити</button>
        </div>
      )}
      {!formMode && (
        <>
          <h2>{months[currentMonth].name}</h2>
          <Header />
          <div className="calendarContainer">
            {finalList.map((day, index) => (
              <DayItem day={day} key={index} index={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
