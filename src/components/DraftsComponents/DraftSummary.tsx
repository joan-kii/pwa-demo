import { Draft } from '../../utils/types'

function DraftSummary({ draft, setDraftId }:
  {
    draft: Draft,
    setDraftId: React.Dispatch<React.SetStateAction<number | null>>
  }) {
  return (
    <div
      className="mx-auto my-2 w-11/12 sm:w-2/3 flex items-center justify-center cursor-pointer"
      onClick={() => setDraftId((draft._id))}
    >
      <div className="w-full p-2 bg-gray-200 relative shadow overflow-hidden hover:shadow-lg group rounded-xl sm:p-5 border-2 border-gray-300">
        <div className="flex items-center gap-4">
          <div className="w-fit">
            <h1 className="text-gray-600 font-bold text-sm sm:text-base">{draft.description}</h1>
            <p className="text-gray-500 text-sm sm:text-base">{draft.date} {draft.hour}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DraftSummary
