import { Intervention, Comment } from '../../utils/types'
import CopyLink from '../UtilsComponents/CopyLink'
import VotesItem from '../UtilsComponents/VotesItem'

function ItemHeader({ content }: { content: Intervention | Comment }) {
  const isIntervention = content.hasOwnProperty('keywords') ? true : false
  
  return (
    <div className="container flex items-center justify-between mx-auto mt-5 py-1 px-3 bg-gray-50 border-solid border-x-2 border-t-2 border-gray rounded-t-lg shadow">
      <div className="flex">
        <h3>{`${isIntervention ? '#' : '&'}` + `${content._id}`}</h3>
        <CopyLink link={`${isIntervention ? '#' : '&'}` + `${content._id}`} />
      </div>
      <VotesItem votes={content.votes} />
    </div>
  )
}

export default ItemHeader
