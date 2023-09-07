import { Task } from "../models/Task";
import { calculateDifferenceInDays } from "../utils/helpers";

type TaskProps = {
  task: Task;
};

const GanttTask = ({ task }: TaskProps) => {
  const testStart = 1693515600000
  const left = calculateDifferenceInDays(testStart, task.startDate)
  console.log(left)
  return (
    <div
      style={{
        height: "15px",
        backgroundColor: "#0000ff",
        color: "white",
        width: calculateDifferenceInDays(task.startDate, task.endDate) * 26 + "px",
        borderRadius: "2px",
        zIndex: 1000,
      }}
    >
      {/* {task.title} */}
    </div>
  );
};

export default GanttTask;
