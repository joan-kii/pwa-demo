import { useState } from 'react'

import { Comment, Intervention } from '../../utils/types'
import CommentItem from '../CommentComponents/CommentItem'

function CommentsList(content: Intervention | Comment) {
  const [showComments, setShowComments] = useState(true)

  return (
    <div className="flex flex-col">
      {content.comments?.length > 0 &&
        <div className="flex my-2 px-auto items-center border-solid border-b-2 hover:cursor-pointer hover:opacity-70" onClick={() => setShowComments(!showComments)}>
          <p className="pr-1 text-gray-900">Comentarios {content.comments.length}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pr-1 text-gray-900 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
          <svg data-accordion-icon className="w-3 h-3 transition-all ease-in-out duration-500 shrink-0 items-center" style={{ rotate: showComments ? '0deg' : '180deg' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
          </svg>
        </div>
      }
      <div className={`transition-all ease-in-out duration-500 overflow-hidden ${showComments ? 'h-full' : 'h-0'}`}>
        {content.comments?.map((comment) => {
          return <CommentItem {...comment} key={comment._id} />
        })}
      </div>
    </div>
  )
}

export default CommentsList
