import { useState } from 'react'

function VotesItem(props: { votes: number }) {
  const [votes, setVotes] = useState(props.votes)
  const [voted, setVoted] = useState(false)

  const handelUpvote = () => {
    if (!voted) {
      setVotes(votes + 1)
      setVoted(true)
    } else {
      setVotes(votes - 1)
      setVoted(false)
    }
  }

  return (
    <div className="border-r-2 p-3">
      <button onClick={handelUpvote} className="p-1 ms-1 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-800 hover:bg-gray-600 disabled:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span>{votes}</span>
      </button>
    </div>
  )
}

export default VotesItem
