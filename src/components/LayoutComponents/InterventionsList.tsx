import { useContext } from 'react'

import InterventionSummary from '../InterventionComponents/InterventionSummary'
import { interventions } from '../../utils/interventions'
import { Context } from '../../utils/context'

function InterventionsList() {
  const { layout }= useContext(Context)
  const recentInterventionsList = interventions.sort((a, b) => b.fakeDate - a.fakeDate)
  const pendingInterventionsList = recentInterventionsList.filter((a) => a.pending)
  
  return (
    <div className="mb-5">
      {layout === 'recent' && recentInterventionsList.map((intervention) => {
          return <InterventionSummary {...intervention} key={intervention._id} />
        })
      }
      {layout === 'pending' && pendingInterventionsList.map((intervention) => {
          return <InterventionSummary {...intervention} key={intervention._id} />
        })
      }
    </div>
  )
}

export default InterventionsList
