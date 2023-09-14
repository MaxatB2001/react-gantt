import { Task } from "../../models/Task";
import GanttTask from "../GantTask/Task";
import "./TasksRow.css";

type TaskRowProps = {
  task: Task;
};

const TasksRow = ({ task }: TaskRowProps) => {
  return (
    <>
      <div className="task-row">
        <div className="task-row-label" style={{ width: "201px" }}>
          <div className="task-row-text">{task.title}</div>
          <span onClick={() => console.log(task)} className={"task-row-label-btn"}></span>
        </div>
        <div className="task-container">
          <GanttTask rowIndex={0} key={task.id} task={task} />
        </div>
      </div>
      {task.children?.map(child => 
        <TasksRow key={child.id} task={child}/>    
    )}
    </>
  );
};

export default TasksRow;
