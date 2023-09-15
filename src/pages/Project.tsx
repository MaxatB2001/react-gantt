import { useEffect, useState } from "react";
import TasksRow from "../components/TasksRow/TasksRow";
import { tasks } from "../data/mock-data";
import {
  buildTaskTree,
  calculateDifferenceInDays,
  updateObjectInTree,
} from "../utils/helpers";
import { Task } from "../models/Task";

const Project = (props: { startDate: number; endDate: number }) => {
  // const tree = buildTaskTree(tasks);

  const [tree, setTree] = useState<Task[]>([]);

  useEffect(() => {
  const start = performance.now();

    setTree(buildTaskTree(tasks));
    const end = performance.now();
    const elapsed = end - start;
  console.log(elapsed / 1000);
  }, []);
  // setProjectsTasks(tree)
  const differnceInDays = calculateDifferenceInDays(
    props.startDate,
    props.endDate
  );
  const cellWidth = Math.floor((innerWidth - 201) / differnceInDays);
  // Calculate the elapsed time

  console.log(tree);
  console.log(cellWidth);

  return (
    <div style={{ position: "relative" }}>
      {[...Array(differnceInDays)].map((x, i) => {
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              top: 0,
              width: "1px",
              borderLeft: "1px solid rgba(0,0,0,0.2)",
              left: 201 + cellWidth * (i + 1),
              height: "100%",
              display: "block",
            }}
          ></span>
        );
      })}
      {tree.map((task) => (
        <TasksRow key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Project;
