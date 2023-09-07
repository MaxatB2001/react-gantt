import moment from "moment";
import { resources, tasks } from "../data/mock-data";
import { calculateDifferenceInDays, mapTasksToUser } from "../utils/helpers";
import ResourceRow from "../components/ResourceRow";
import { useEffect } from "react";

const GantChart = (props: { startDate: number; endDate: number }) => {
  const { innerHeight, innerWidth } = window;
  console.log(innerWidth)
  const differnceInDays = calculateDifferenceInDays(
    props.startDate,
    props.endDate
  );
  const cellWidth = Math.ceil((innerWidth - 210) / differnceInDays)
  console.log(cellWidth)
  // const startDate = moment(props.startDate)
  // const endDate = moment(props.endDate)

  return (
    <div style={{ position: "relative" }}>
      {[...Array(differnceInDays)].map((x, i) => (
        <span
        key={i}
          style={{
            position: "absolute",
            top: 0,
            width: "1px",
            borderLeft: "1px solid rgba(0,0,0,0.2)",
            left: 210 + cellWidth * (i + 1) ,
            height: "100%",
            display: "block"
          }}
        ></span>
      ))}
      {mapTasksToUser(tasks, resources).map((resource) => (
        <ResourceRow key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default GantChart;
