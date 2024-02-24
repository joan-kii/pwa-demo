import { Draft } from "../../utils/types"

function DraftsGrid({ drafts }: { drafts: Draft[] }) {
  return (
    <div>{drafts.map((draft) => <div key={draft._id} >{draft.description}</div>)}</div>
  )
}

export default DraftsGrid
