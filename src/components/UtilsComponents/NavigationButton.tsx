import { useNavigate } from 'react-router-dom'

function NavigationButton() {
  const navigate = useNavigate()
  
  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(+1)
  }

  return (
    <div className="fixed flex m-5 border-2 rounded-lg text-gray-900">
      <button onClick={goBack} className="border-r-2 p-2 hover:opacity-75">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
        </button>
      <button onClick={goForward} className="p-2 hover:opacity-75">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  )
}

export default NavigationButton
