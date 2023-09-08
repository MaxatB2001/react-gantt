import { Resource } from "../models/Resource";
import { groupTasks } from "../utils/helpers";
import moment from "moment";
import GanttTask from "./Task";

type ResourceRowProps = {
  resource: Resource;
};

const ResourceRow = ({ resource }: ResourceRowProps) => {
  const grouppedTasks = groupTasks(resource.tasks);
  console.log("YES YES", grouppedTasks);

  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}>
      {grouppedTasks.map((tasks, index) => (
        <div
          key={index}
          style={{ height: index == 0 ? "24px" : "16px", position: "relative" }}
        >
          <div
            style={{
              width: "201px",
              borderRight: "1px solid #ddd",
              float: "left",
              position: "relative",
              height: "100%"
            }}
          >
            <div>{index == 0 ? resource.name : ""}</div>
          </div>
          <div style={{position: "relative", left: "201px",}}>
            {tasks.map((task) => (
              <GanttTask key={task.id} task={task} rowIndex={index}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceRow;
