import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");
import "./CalendarHeader.css";
import { calculateDifferenceInDays } from "../../utils/helpers";

const CalendarHeader = (props: { startDate: number; endDate: number }) => {
  const { innerWidth } = window;
  const currDate = moment(props.startDate).subtract(1, "day");
  const lastDate = moment(props.endDate);
  const dates: moment.Moment[] = [];

  const differnceInDays = calculateDifferenceInDays(
    props.startDate,
    props.endDate
  );

  const cellWidth = Math.floor((innerWidth - 201) / differnceInDays);

  while (currDate.add(1, "days").diff(lastDate) < 0) {
    console.log(currDate.week());
    dates.push(currDate.clone());
  }

// const startDate = moment(props.startDate,);
// const endDate = moment(props.endDate);

// Generate an array of dates within the ran

// Extract years, months, and week numbers
var startTime = performance.now()
const years = [...new Set(dates.map(date => date.year()))].map(year => ({year, count: dates.filter(date => date.year() == year).length}));
const months = [...new Set(dates.map(date => date.month() + 1))].map(month => ({month, count: dates.filter(date => date.month() == month - 1).length}));
const weekNumbers = [...new Set(dates.map(date => date.isoWeek()))].map(wn => ({wn, count: dates.filter(date => date.isoWeek() == wn).length}));

console.log('Years:', years);
console.log('Months:', months);
console.log('Week Numbers:', weekNumbers);

var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

  return (
    <div className="calendar-header">
      <div style={{ width: "201px", display: "flex", flexDirection: "column" }}>
        <span className="timing-toolbar">
          <span className="timing-toolbar-item">
            <div
              style={{
                lineHeight: "20px",
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              {moment(props.startDate).format("MMMM").substring(0, 3)}
            </div>
            <div
              style={{
                lineHeight: "30px",
                fontSize: "26px",
                fontWeight: 600,
              }}
            >
              {moment(props.startDate).date()}
            </div>
            <div
              style={{
                textTransform: "uppercase",
                lineHeight: "23px",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              {moment(props.startDate).format("dddd").substring(0, 3)}
            </div>
          </span>
          <span className="timing-toolbar-item">
            <div
              style={{
                lineHeight: "20px",
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              {moment(props.endDate).format("MMMM").substring(0, 3)}
            </div>
            <div
              style={{
                lineHeight: "30px",
                fontSize: "26px",
                fontWeight: 600,
              }}
            >
              {moment(props.endDate).date()}
            </div>
            <div
              style={{
                textTransform: "uppercase",
                lineHeight: "23px",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              {moment(props.endDate).format("dddd").substring(0, 3)}
            </div>
          </span>
        </span>
        <div className="buttonbar"></div>
      </div>
      <div className="chart-calendar">
        <div
          style={{ height: "22px", lineHeight: "22px" }}
          className="calheader-row"
        >
          <div className="year-row-label-box">
            <span className="calheader-label" style={{fontWeight: 400}}>
              2023
            </span>
          </div>
        </div>
        <div
          style={{ height: "33px", lineHeight: "33px" }}
          className="calheader-row"
        >
          <div style={{width: (innerWidth - 201) / 2 }} className="year-row-label-box">
            <span className="calheader-label" style={{fontWeight: 500, textTransform: "uppercase",}}>
              Сентябрь
            </span>
          </div>
          <div style={{width: (innerWidth - 201) / 2 , left: ( (innerWidth - 201) / 2)}} className="year-row-label-box">
            <span className="calheader-label" style={{fontWeight: 500, textTransform: "uppercase",}}>
              Октябрь
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
