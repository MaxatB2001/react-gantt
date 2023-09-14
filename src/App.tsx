import { Xwrapper } from "react-xarrows";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader/CalendarHeader.tsx";
import GroupContextPovider from "./contexts/Tasks.context.tsx";
import GantChart from "./pages/GantChart";
import moment from "moment";
import "moment/dist/locale/ru";
import Project from "./pages/Project.tsx";
moment.locale("ru");

function App() {
  return (
    <>
      <GroupContextPovider>
        <Xwrapper>
          <CalendarHeader startDate={1693515600000} endDate={1696107600000} />
          {/* <GantChart startDate={1693515600000} endDate={1696107600000} /> */}
          <Project startDate={1693515600000} endDate={1696107600000}/>
        </Xwrapper>
      </GroupContextPovider>
    </>
  );
}

export default App;
