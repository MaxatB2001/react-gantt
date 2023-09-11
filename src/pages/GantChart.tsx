// import moment from "moment";
import { resources, tasks } from "../data/mock-data";
import { calculateDifferenceInDays, mapTasksToUser } from "../utils/helpers";
import ResourceRow from "../components/ResourceRow";
import Xarrow from "react-xarrows";

const GantChart = (props: { startDate: number; endDate: number }) => {
  const { innerWidth } = window;
  const differnceInDays = calculateDifferenceInDays(
    props.startDate,
    props.endDate
  );


  const cellWidth = Math.floor((innerWidth - 201) / differnceInDays)
  console.log(cellWidth ,"CELLL")
  // const startDate = moment(props.startDate)
  // const endDate = moment(props.endDate)
    

  return (
    <div style={{ position: "relative" }}>
      <Xarrow start={"2"} end={"3"} strokeWidth={2} path="grid"/>
      {[...Array(differnceInDays)].map((x, i) => {
        console.log(x);
        
        return (
          <span
          key={i}
            style={{
              position: "absolute",
              top: 0,
              width: "1px",
              borderLeft: "1px solid rgba(0,0,0,0.2)",
              left: 201 + cellWidth * (i + 1) ,
              height: "100%",
              display: "block"
            }}
          ></span>
        )
      })}
      {mapTasksToUser(tasks, resources).map((resource) => (
        <ResourceRow key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default GantChart;
