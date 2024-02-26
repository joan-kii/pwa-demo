import { Draft } from '../../utils/types'
import TextParsed from '../UtilsComponents/TextParsed'
import BackButton from '../UtilsComponents/BackButton'
import GenericButton from '../UtilsComponents/GenericButton'

function SingleDraft({ draft, setDraftId }:
  {
    draft: Draft,
    setDraftId: React.Dispatch<React.SetStateAction<number | null>>
  }) {
  return (
    <div className="mx-auto my-2 w-11/12 p-2 sm:w-2/3 flex flex-col items-center rounded-xl bg-gray-200 border-2 border-gray-300">
      <div className="w-full justify-start p-2 mb-3">
        <BackButton setState={setDraftId} />
      </div>
      <div className="m-1 sm:m-3 text-slate-800">
        <h3 className="sm:py-2 text-lg font-semibold">{draft.description}</h3>
        <div className="w-full sm:py-3 sm:text-justify">
          <TextParsed text={draft.text} />
        </div>
        <div className="mt-2 text-slate-800">
          <h3 className="sm:py-2 text-lg font-semibold">Archivos:</h3>
        </div>
        <div className="flex border-t border-solid border-blueGray-200 rounded-b">
          <p className="mr-2">{draft.files.type}: </p>
          <TextParsed text={draft.files.name} />
        </div>
        <div className="flex items-center justify-around p-6 border-t border-solid border-blueGray-200 rounded-b">
          <GenericButton
            text="Borrar"
            type="reset"
            disabled={false}
            handleClick={() => {}}
          />
        </div>
      </div>
  </div>
  )
}

export default SingleDraft
