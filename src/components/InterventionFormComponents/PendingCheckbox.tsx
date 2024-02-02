import BulbSuggestion from './BulbSuggestion'

function PendingCheckbox({ isPending, setIsPending, isFinished, setIsFinished, progress, setProgress }:
  { isPending: boolean, setIsPending: React.Dispatch<React.SetStateAction<boolean>>,
    isFinished: boolean, setIsFinished:  React.Dispatch<React.SetStateAction<boolean>>,
    progress: number, setProgress:  React.Dispatch<React.SetStateAction<number>>
  }
) {
  const toggleState = (value: string) => {
    if (!(isFinished || isPending)) setProgress(progress +20)

    switch (value) {
      case 'pending':
        setIsFinished(false)
        setIsPending(true)
        break
      case 'finished':
        setIsFinished(true)
        setIsPending(false)
        break
      default:
        setIsFinished(false)
        setIsPending(false)
    }
  }
  
  
  return (
    <div className="mt-6 pt-8 flex items-center border-t-2 border-gray-300">
      <div className="flex grow justify-center">
        <ul className="grid w-full gap-6 md:grid-cols-2">
          <li className="flex justify-center">
            <input
              type="radio"
              id="finished"
              name="intervention-state"
              value="finished"
              className="hidden peer"
              onClick={() => toggleState('finished')}
              required
            />
            <label
              htmlFor="finished"
              className={`inline-flex items-center justify-between w-2/3 p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100`}
              >                           
              <div className="block">
                <div className="w-full text-lg font-semibold">Terminado</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </label>
          </li>
          <li className="flex justify-center">
            <input
              type="radio"
              id="pending"
              name="intervention-state"
              value="pending"
              className="hidden peer"
              onClick={() => toggleState('pending')}
            />
            <label
              htmlFor="pending"
              className="inline-flex items-center justify-between w-2/3 p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100">
              <div className="block">
                <div className="w-full text-lg font-semibold">Pendiente</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </label>
          </li>
        </ul>
      </div>
      <div className="mr-1">
        <BulbSuggestion isSuggesting={isFinished || isPending} text="Es importante comunicar en que estado se encuentra la intervención." />
      </div>
    </div>
  )
}

export default PendingCheckbox
