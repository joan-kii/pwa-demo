import { Intervention } from '../utils/types'

function InterventionKeywords(intervention: Intervention) {
  return (
    <div className="flex pr-8 pb-5 justify-end items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
      </svg>
      <p className="font-light text-slate-800">{intervention.keywords.join(' - ')}</p>
    </div>
  )
}

export default InterventionKeywords