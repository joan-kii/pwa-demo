import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import InterventionResume from '../InterventionComponents/InterventionResume'
import { interventions } from '../../utils/interventions'
import { Context } from '../../utils/context'

function InterventionsList() {
  const { layout, setLayout }= useContext(Context)
  const recentInterventionsList = interventions.sort((a, b) => b.fakeDate - a.fakeDate)
  const pendingInterventionsList = recentInterventionsList.filter((a) => a.pending)
  const location = useLocation()
  const path = location.pathname.split('/').at(-1)

  useEffect(() => {
    if (path === 'recent' || path === 'pending') setLayout(path)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])
  
  return (
    <>
      {layout === 'recent' && recentInterventionsList.map((intervention) => {
          return <InterventionResume {...intervention} key={intervention._id} />
        })
      }
      {layout === 'pending' && pendingInterventionsList.map((intervention) => {
          return <InterventionResume {...intervention} key={intervention._id} />
        })
      }
    </>
  )
}

export default InterventionsList
