import './App.css'
import CalendarHeader from './components/CalendarHeader/CalendarHeader.tsx'
import GantChart from './pages/GantChart'
import moment from 'moment'
import 'moment/dist/locale/ru';
moment.locale('ru')

function App() {

  return (
    <>
      <CalendarHeader  startDate={1693515600000} endDate={1698267600000}/>
      <GantChart startDate={1693515600000} endDate={1698267600000}/>
    </>
  )
}

export default App
