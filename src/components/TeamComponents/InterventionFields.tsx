import FieldItem from './FieldItem'
import { Teammate, Manager } from '../../utils/types'

function InterventionFields({ user, isGlobal }: { user: Teammate | Manager, isGlobal: boolean }) {
  console.log(isGlobal);
  console.log(user);
  
  return (
    <>
      <FieldItem text="Intervenciones Creadas" data={user.companyInterventions.toString()} />
      <FieldItem text="Aprobaciones Recibidas" data={user.companyInterventionsApproveReceived.toString()} />
      <FieldItem text="Votos Recibidos" data={user.companyInterventionsVotesReceived.toString()} />
    </>
  )
}

export default InterventionFields
