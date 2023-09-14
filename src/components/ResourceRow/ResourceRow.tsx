import { Resource } from "../../models/Resource";
import { groupTasks } from "../../utils/helpers";
// import moment from "moment";
import GanttTask from "../GantTask/Task";
import "./ResourceRow.css"

type ResourceRowProps = {
  resource: Resource;
  projectId?: string
};

const ResourceRow = ({ resource, projectId }: ResourceRowProps) => {
  
  const grouppedTasks = groupTasks(resource.tasks);

  return (
    <>
      {grouppedTasks.map((tasks, index) => (
        <div
        className="resource-row"
          key={index}
          style={{ height: index == 0 ? "24px" : "16px", position: "relative", display: "flex", borderTop: index == 0 ? "1px solid rgba(0,0,0,0.3)" : "" }}
        >
          <div
          className="resource-row-label"
            style={{
              width: "201px",
            }}
          >
            <div className="resource-row-text">{index == 0 ? resource.name : ""}</div>
          </div>
          <div style={{position: "relative",}}>
            {tasks.map((task) => (
              <GanttTask key={task.id} task={task} rowIndex={index} projectId={projectId}/>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ResourceRow;
