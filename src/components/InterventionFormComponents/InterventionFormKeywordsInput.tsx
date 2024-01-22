import { useState } from 'react'
import GenericButton from '../UtilsComponents/GenericButton'

function InterventionFormKeywordsInput() {
  const [keyword, setKeyword] = useState('')

  return (
    <div className="sm:col-span-4">
      <label htmlFor="add-keyword" className="font-light">Añadir palabras clave</label>
      <input
        type="text"
        id="add-keyword"
        value={keyword}
        onChange={({ target }) => {setKeyword(target.value)}}
        className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-2 p-3"
        placeholder="Añade palabras clave separadas por comas"
        required 
      />
      <div className="flex justify-between items-center">
        <p className="text-sm font-light">{keyword ? keyword : 'p. ej.: máquina 1, rodillo entrada, buje'}</p>
        <GenericButton text="Añadir" />
      </div>
    </div>
  )
}

export default InterventionFormKeywordsInput
