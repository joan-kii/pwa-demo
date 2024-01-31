import BulbSuggestion from './BulbSuggestion'

function FileInput({ setFiles }: { setFiles: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <div className="mt-6 pt-5 w-full flex flex-col border-t-2 border-gray-300">
      <div className="mx-2 mt-4 flex justify-between">
        <label htmlFor="add-keyword" className="font-light">Adjunta un archivo</label>
        <BulbSuggestion isSuggesting={false} text="Añadir un archivo dará contexto de lo ocurrido a tus compañeros." />
      </div>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-gray-50">
        <div className="text-center text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
            >
              <span>Sube un archivo</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                multiple
                accept="image/*, video/*, audio/*, .pdf, .doc"
                onChange={(event) => setFiles(event.target.value)}
              />
            </label>
            <p className="pl-1">o arrástralo aquí</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF, PDF hasta 10MB</p>
        </div>
      </div>
    </div>
  )
}

export default FileInput
