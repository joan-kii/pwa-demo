import { Teammate, Manager } from '../../utils/types'

function BackButton({ setUser }:
  {
    setUser: React.Dispatch<React.SetStateAction<Teammate | Manager | null>> 
  }) {
  return (
    <div className="cursor-pointer" onClick={() => setUser(null)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
      </svg>
    </div>
  )
}

export default BackButton
