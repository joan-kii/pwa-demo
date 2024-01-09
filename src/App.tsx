import { Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import TeamApp from './components/TeamApp'
import InterventionsList from './components/InterventionsList'
import InterventionItem from './components/InterventionItem'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/team/*" element={<TeamApp />}>
        <Route path="intervention/recent" element={<InterventionsList />} />
        <Route path="intervention/pending" element={<InterventionsList />} />
        <Route path="intervention/:interventionId" element={<InterventionItem />} />
      </Route>
    </Routes>
  )
}

export default App
