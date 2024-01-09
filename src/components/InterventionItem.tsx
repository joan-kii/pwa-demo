import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import CommentItem from './CommentItem'
import VotesItem from './VotesItem'
import { Context } from '../utils/context'

function InterventionItem() {
  const { setLayout, interventions } = useContext(Context)
  const { interventionId } = useParams()
  const intervention = interventions.find((intervention) => intervention._id === Number(interventionId))
  setLayout('none')

  return (
    <>
      {intervention &&
        <div className="container flex mx-auto my-5 w-2/3 bg-gray-50 border-solid border-2 border-gray rounded shadow">
          <VotesItem votes={intervention.votes} />
          <div className="flex flex-col p-3">
            <div className="flex">
              <p>{intervention.author}</p>
              <span>{intervention.date}</span>
              <p>Palabras clave: {intervention.keywords.join(' - ')}</p>
            </div>
            <div>
              <h3>{intervention.description}</h3>
              <p>{intervention.text}</p>
              {intervention.managerPraise &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
              }
            </div>
            <div>
              {intervention.comments?.map((comment) => {
                return <CommentItem {...comment} key={comment._id} />
              })}
            </div>
            <div>
              {intervention.pending &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>          
              }
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default InterventionItem
