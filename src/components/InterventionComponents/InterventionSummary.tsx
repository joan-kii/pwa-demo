import { useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react'


import { Comment, Intervention } from '../../utils/types'
import { Context } from '../../utils/context'
import InterventionHeader from './InterventionHeader'
import InterventionKeywords from './InterventionKeywords'
import InterventionPending from './InterventionPending'

function InterventionSummary(intervention: Intervention) {
  const navigate = useNavigate()
  const { setClipboard } = useContext(Context)

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
      <div className="container flex mx-auto mt-5 p-2 w-2/3 bg-gray-50 border-solid border-x-2 border-t-2 border-gray rounded-t-lg shadow">
        <Link
          to={`/team/intervention/${intervention._id}`}
          className="text-sky-600"
        >
          {`#${intervention._id}`}
        </Link>
        <div className="group relative">
          <button className="ml-3" onClick={() => setClipboard(`<a href="http://localhost:5173/team/intervention/${intervention._id})">@${intervention._id}</a>`)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>
            <span className="absolute left-10 top-0 scale-0 min-w-full rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Copiar enlace al portapapeles</span>
          </button>
        </div>
      </div>
      <div
        onClick={() => navigate(`/team/intervention/${intervention._id}`)}
        className="container flex flex-col mx-auto py-2 w-2/3 bg-gray-50 border-solid border-2 border-gray rounded-b shadow hover:cursor-pointer hover:opacity-75">
        <InterventionHeader {...intervention} />
        <div className="mx-auto pb-2 w-1/2">
          <h3 className="py-2 text-lg font-semibold text-slate-800">{intervention.description}</h3>
          <p className="h-12 overflow-hidden text-slate-800">{intervention.text}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
        <InterventionKeywords {...intervention} />
        <div className="mx-12 flex justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p className="font-light text-slate-800">{intervention.votes} votos</p>
          </div>
          {intervention.pending &&
            <InterventionPending />
          }
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
            <p className="font-light text-slate-800">{commentsCount} {commentsCount === 1 ? 'comentario' : 'comentarios'}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default InterventionSummary
