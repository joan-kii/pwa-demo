import { useNavigate, Link } from 'react-router-dom'

import { Comment, Intervention } from '../../utils/types'
import InterventionHeader from './InterventionHeader'
import InterventionKeywords from './InterventionKeywords'
import InterventionPending from './InterventionPending'
import CopyLink from '../UtilsComponents/CopyLink'

function InterventionSummary(intervention: Intervention) {
  const navigate = useNavigate()

  const countComments = (comments: Comment[], count: number): number => {
    if (count > 0) {
      for (const comment of comments) {
        count += countComments(comment.comments, comment.comments.length)
      }
    }
    return count
  }

  const commentsCount = countComments(intervention.comments, intervention.comments.length)

  return (
    <>
      <div className="container flex mx-auto mt-5 p-2 w-5/6 sm:w-2/3 bg-gray-50 border-solid border-x-2 border-t-2 border-gray rounded-t-lg shadow">
        <Link
          to={`/team/intervention/${intervention._id}`}
          className="text-sky-600"
          >
          {`#${intervention._id}`}
        </Link>
        <CopyLink link={`#${intervention._id}`} />
      </div>
      <div
        onClick={() => navigate(`/team/intervention/${intervention._id}`)}
        className="container flex flex-col mx-auto py-2 w-5/6 sm:w-2/3 bg-gray-50 border-solid border-2 border-gray rounded-b shadow hover:cursor-pointer hover:opacity-75">
        <InterventionHeader {...intervention} />
        <div className="mx-auto pb-2 w-4/5 sm:w-1/2">
          <h3 className="py-2 sm:text-lg font-semibold text-center sm:text-left text-slate-800">{intervention.description}</h3>
          <p className="h-10 sm:h-12 overflow-hidden text-sm sm:text-base text-slate-800">{intervention.text}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
        <InterventionKeywords {...intervention} />
        <div className="mx-12 grid grid-cols-2 sm:grid-cols-3">
          <div className="p-1 mx-auto order-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p className="font-light text-sm sm:text-base text-slate-800">{intervention.votes} votos</p>
          </div>
          <div className="p-1 mx-auto order-3 sm:order-2 w-full col-span-2 sm:col-span-1 flex items-center justify-center">
            {intervention.pending &&
                <InterventionPending />
              }
          </div>
          <div className="p1 mx-auto order-2 sm:order-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
            <p className="font-light text-sm sm:text-base text-slate-800">{commentsCount} {commentsCount === 1 ? 'comentario' : 'comentarios'}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default InterventionSummary
