import { useState } from 'react'

import DraftsGrid from '../DraftsComponents/DraftsGrid'
import { drafts } from '../../utils/drafts'

function DraftsLayout() {
  const [draftId, setDraftId] = useState<number | null>(null)

  return (
    <div className="relative w-full">
      <div className="container flex flex-col mx-auto mt-5 mb-20 w-11/12 sm:w-2/3 bg-gray-50 border-solid border-2 border-gray rounded-lg shadow">
        <div className="mx-auto sm:px-20 w-full">
          <DraftsGrid drafts={drafts} draftId={draftId} setDraftId={setDraftId} />
       </div>
     </div>
   </div>
  )
}

export default DraftsLayout
