import { useContext } from 'react'

import InterventionItem from './InterventionItem'
import { interventions } from '../utils/interventions'
import { Context } from '../utils/context'

function InterventionsList() {
  const { layout }= useContext(Context)
  console.log(layout);
  
  return (
    <>
      {interventions.map((intervention) => <InterventionItem {...intervention} key={intervention._id} />)}
    </>
  )
}

export default InterventionsList
