import { useRoutes } from 'react-router-dom'

import Login from './components/Login'
import TeamApp from './components/TeamApp'
import InterventionsList from './components/InterventionsList'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/team/*',
      element: <TeamApp />,
      children: [
        {
          path: 'intervencion/recientes',
          element: <InterventionsList />,
        },
        { 
          path: 'intervencion/pendientes', 
          element: <InterventionsList/> 
        },
      ],
    },
  ])

  return routes
}

export default App
