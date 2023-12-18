import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Login from './components/Login'
import TeamApp from './components/TeamApp'
import ManagerApp from './components/ManagerApp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/team" element={<TeamApp />} />
        <Route path="/manager" element={<ManagerApp />} />
      </Routes>
    </Router>
  )
}

export default App
