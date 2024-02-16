import FieldItem from './FieldItem'
import { Teammate, Manager } from '../../utils/types'

function InterventionFields({ user, isGlobal }: { user: Teammate | Manager, isGlobal: boolean }) {
  console.log(isGlobal);
  console.log(user);
  
  return (
    <>
      <FieldItem text="Fecha Inicio" data={user.companyStartDate} />
      <FieldItem text="Antigüedad" data="3 años" />
      <FieldItem text="Rol" data={user.user.rol} />
    </>
  )
}

export default InterventionFields
