import { Draft } from '../../utils/types'
import TextParsed from '../UtilsComponents/TextParsed'
import BackButton from '../UtilsComponents/BackButton'

function SingleDraft({ draft, setDraftId }:
  {
    draft: Draft,
    setDraftId: React.Dispatch<React.SetStateAction<number | null>>
  }) {
  return (
    <div className="mx-auto my-2 w-11/12 sm:w-2/3 flex items-center justify-center rounded-xl bg-gray-200 border-2 border-gray-300">
      <BackButton setState={setDraftId} />
      <div className="m-1 sm:m-3 text-slate-800">
        <h3 className="sm:py-2 text-lg font-semibold">{draft.description}</h3>
        <div className="w-full sm:py-3 sm:text-justify">
          <TextParsed text={draft.text} />
        </div>
      </div>
  </div>
  )
}

export default SingleDraft
