import FieldItem from './FieldItem'
import { Teammate, Manager } from '../../utils/types'

function InterventionFields({ user, isGlobal }: { user: Teammate | Manager, isGlobal: boolean }) {
  return (
    <>
      <FieldItem
        text="Fecha Inicio"
        isHighlighted
        data={isGlobal ? user.user.startDate : user.companyStartDate}
      />
      <FieldItem
        text="Antigüedad"
        isHighlighted
        data={isGlobal ? "4 años" : "2 años"}
      />
      <FieldItem
        text="Rol"
        isHighlighted
        data={user.user.rol}
      />
    </>
  )
}

export default InterventionFields
