import { Task } from "../models/Task";
import { calculateDifferenceInDays } from "../utils/helpers";

type TaskProps = {
  task: Task;
  rowIndex: number
};

const GanttTask = ({ task, rowIndex }: TaskProps) => {
  const testStart = 1693515600000
  const testEnd = 1696021200000
  const left = calculateDifferenceInDays(testStart, task.startDate)
  console.log(left)
  return (
    <div
      id={task.id.toString()}
      style={{
        height: "15px",
        backgroundColor: "#0000ff",
        color: "white",
        width: calculateDifferenceInDays(task.startDate, task.endDate) * 26 + "px",
        // borderRadius: "2px",
        zIndex: 1000,
        position: "absolute",
        left:  calculateDifferenceInDays(testStart, task.startDate) * 38 + "px",
        top: rowIndex == 0 ? 8 : 0
      }}
    >
      {/* {task.title} */}
    </div>
  );
};

export default GanttTask;
