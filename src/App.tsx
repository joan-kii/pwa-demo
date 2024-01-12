import { Routes, Route } from 'react-router-dom'

import Login from './components/LayoutComponents/Login'
import TeamApp from './components/LayoutComponents/TeamApp'
import InterventionsList from './components/LayoutComponents/InterventionsList'
import InterventionItem from './components/InterventionComponents/InterventionItem'

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
