import React from 'react';
import './Main.css';
import { useState } from 'react';

export default function Main() {
  const [birthDate, setBirthday] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const calculateAge = () => {
    const birthdate = new Date(birthDate);

    const d1 = birthdate.getDate();
    const m1 = birthdate.getMonth() + 1;
    const y1 = birthdate.getFullYear();

    const today = new Date();
    const d2 = today.getDate();
    const m2 = today.getMonth() + 1;
    const y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
    setAge({ years: y3, months: m3, days: d3 });
  };
  const resetAge = () => {
    setBirthday("")
    setAge({ years: 0, months: 0, days: 0 });
  };
  
  return (
    <>
      <div className="container agecalculator text-center">
        <h1 className='fs-2'>AGE CALCULATOR</h1>
        <div className="inputdiv mt-4">
          <input type="date" value={birthDate} className='input p-2'onChange={(e) => setBirthday(e.target.value)}></input>
          <button onClick={calculateAge} id="age" className='btn btn-success'>calculate</button>
        </div>
        <p className='mt-4 fs-3'>
        YEAR: {age.years} <br />
        MONTH: {age.months} <br />
        DAY: {age.days}
      </p>
      <button className='btn btn-danger 'onClick={resetAge}>Reset</button>
      </div>
    </>
  )
}
