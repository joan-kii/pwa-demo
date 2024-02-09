import { useContext, useEffect, useState } from 'react'

import InterventionSummary from '../InterventionComponents/InterventionSummary'
import { Context } from '../../utils/context'
import { orderByKeywords } from '../../utils/helpers'
import { Intervention } from '../../utils/types'

function InterventionsList() {
  const { layout, interventions, keywords }= useContext(Context)
  const [interventionsToRender, setInterventionsToRender] = useState<Intervention[]>(interventions.sort((a, b) => b.fakeDate - a.fakeDate))

  useEffect(() => {
    if (layout === 'recent') {
      setInterventionsToRender(interventions.sort((a, b) => a.fakeDate - b.fakeDate))
    } else if (layout === 'pending') {
      setInterventionsToRender(interventions.filter((intervention) => intervention.pending))
    }
  }, [layout])

  orderByKeywords(interventionsToRender, keywords)
  
  return (
    <div className="mb-5">
      {interventionsToRender.map((intervention) => <InterventionSummary {...intervention} key={intervention._id} />)}
    </div>
  )
}

export default InterventionsList
