import BulbSuggestion from './BulbSuggestion'

function PendingCheckbox({ isPending, setIsPending, isFinished, setIsFinished }:
  { isPending: boolean, setIsPending: React.Dispatch<React.SetStateAction<boolean>>,
    isFinished: boolean, setIsFinished:  React.Dispatch<React.SetStateAction<boolean>>
  }
) {
  const toggleState = (value: string) =>{
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
          <li>
            <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
            <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
              <div className="block">
                <div className="w-full text-lg font-semibold">0-50 MB</div>
                <div className="w-full">Good for small websites</div>
              </div>
              <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </label>
          </li>
          <li>
            <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
            <label htmlFor="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-lg font-semibold">500-1000 MB</div>
                <div className="w-full">Good for large websites</div>
              </div>
              <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </label>
          </li>
        </ul>
      </div>
      <div className="mr-1">
        <BulbSuggestion isSuggesting={false} text="Es importante comunicar en que estado se encuentra la intervención." />
      </div>
    </div>
  )
}

export default PendingCheckbox
