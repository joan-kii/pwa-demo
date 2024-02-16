function SwitchInput({ option1, option2, state, setState }:
  {
    option1: string, 
    option2: string,
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  }) {
  return (
    <div className="max-md:text-center">
      <div className="inline-flex items-center whitespace-nowrap">
        <div className="text-sm text-slate-500 mr-2 md:max-lg:sr-only">{option1}</div>
        <div className="relative">
          <input 
            type="checkbox"
            id="toggle"
            className="peer sr-only"
            x-model="isGlobbal"
            onChange={() => setState(!state)}
          />
          <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-gray-800 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-indigo-500">
            <span className="sr-only">Display</span>
          </label>
        </div>
        <div className="text-sm text-slate-500 ml-2">{option2}</div>
      </div>
    </div>
  )
}

export default SwitchInput
