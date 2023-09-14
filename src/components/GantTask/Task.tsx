import { useXarrow } from "react-xarrows";
import { Task } from "../../models/Task";
import { calculateDifferenceInDays } from "../../utils/helpers";
import "./Task.css"
import { useEffect } from "react";

type TaskProps = {
  task: Task;
  rowIndex: number;
  projectId?: string
};

const GanttTask = ({ task, rowIndex, projectId }: TaskProps) => {
  const updateXarrow = useXarrow();
  const testStart = 1693515600000
  
  useEffect(() => {
    return () => {
      console.log("TASK DESTROY")
    }
  }, [])

  return (
    <div
      onClick={updateXarrow}
      id={task.id.toString()}
      className={!projectId ? "" : projectId == task.projectUid ? "" : "gantt-taskbar-hidden"}
      style={{
        height: "15px",
        backgroundColor: "#0000ff",
        color: "white",
        width: calculateDifferenceInDays(task.startDate, task.endDate) * 57 + "px",
        // borderRadius: "2px",
        zIndex: 1000,
        position: "absolute",
        left:  calculateDifferenceInDays(testStart, task.startDate) * 57 + "px",
        top: rowIndex == 0 ? 8 : 0
      }}
    >
      {/* {task.title} */}
    </div>
  );
};

export default GanttTask;
