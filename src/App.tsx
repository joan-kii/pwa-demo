import { Routes, Route } from 'react-router-dom'

import Login from './components/LayoutComponents/Login'
import TeamApp from './components/LayoutComponents/TeamApp'
import ManagerApp from './components/LayoutComponents/ManagerApp'
import InterventionsList from './components/LayoutComponents/InterventionsList'
import InterventionItem from './components/InterventionComponents/InterventionItem'

function App() {  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/team/*" element={<TeamApp />}>
        <Route path="intervention/*">
          <Route path="recent" element={<InterventionsList />} />
          <Route path="pending" element={<InterventionsList />} />
          <Route path=":interventionId" element={<InterventionItem />} />
        </Route>
      </Route>
      <Route path="/manager/*" element={<ManagerApp />}>
      <Route path="intervention/*">
          <Route path="recent" element={<InterventionsList />} />
          <Route path="pending" element={<InterventionsList />} />
          <Route path=":interventionId" element={<InterventionItem />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
