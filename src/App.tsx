import './App.css'
import CalendarHeader from './components/CalendarHeader/CalendarHeader.tsx'
import GantChart from './pages/GantChart'

function App() {

  return (
    <>
      <CalendarHeader  startDate={1693515600000} endDate={1696021200000}/>
      <GantChart startDate={1693515600000} endDate={1696021200000}/>
    </>
  )
}

export default App
