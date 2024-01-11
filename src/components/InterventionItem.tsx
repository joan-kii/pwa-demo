import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import CommentItem from './CommentItem'
import InterventionHeader from './InterventionHeader'
import InterventionKeywords from './InterventionKeywords'
import InterventionPending from './InterventionPending'
import InterventionPraise from './InterventionPraise'
import VotesItem from './VotesItem'
import { Context } from '../utils/context'
import copyToClipboard from '../utils/helpers'

function InterventionItem() {
  const { setLayout, interventions } = useContext(Context)
  const { interventionId } = useParams()
  const intervention = interventions.find((intervention) => intervention._id === Number(interventionId))
  setLayout('none')

  return (
    <>
      {intervention &&
        <>
          <div className="container flex mx-auto mt-5 p-2 w-2/3 bg-gray-50 border-solid border-x-2 border-t-2 border-gray rounded-t-lg shadow">
            <h3>{`@${intervention._id}`}</h3>
            <div className="group relative">
              <button className="ml-3" onClick={() => copyToClipboard(`<a href="http://localhost:5173/team/intervention/${intervention._id})">@${intervention._id}</a>`)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
                <span className="absolute left-10 top-0 scale-0 min-w-full rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Copiar enlace al portapapeles</span>
              </button>
            </div>
          </div>
          <div className="container flex mx-auto py-2 w-2/3 border-solid border-2 border-gray rounded-b shadow">
            <VotesItem votes={intervention.votes} />
            <div className="flex flex-col p-3">
              <InterventionHeader {...intervention} />
              <div className="mx-auto">
                <InterventionKeywords {...intervention} />
              </div>
              <div className="m-3 text-slate-800">
                <h3 className="py-2 text-lg font-semibold ">{intervention.description}</h3>
                <p className="py-3 px-5 text-justify">{intervention.text}</p>
              </div>
              <div className="flex justify-around">
                {intervention.managerPraise &&
                  <InterventionPraise />
                }
                {intervention.pending &&
                  <InterventionPending />
                }
              </div>
              <div>
                {intervention.comments?.map((comment) => {
                  return <CommentItem {...comment} key={comment._id} />
                })}
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default InterventionItem
