import { Intervention } from '../utils/types'

function InterventionItem(intervention: Intervention) {
  return (
    <div className="container flex mx-auto my-5 p-5 w-2/3 bg-gray-50 border-solid border-2 border-gray rounded shadow">
      {intervention.author}
    </div>
  )
}

export default InterventionItem
