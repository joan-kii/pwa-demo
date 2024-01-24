import { useState } from 'react'

import GenericButton from '../UtilsComponents/GenericButton'
import KeywordTag from './KeywordTag'

function KeywordsInput() {
  const [keywords, setKeywords] = useState<string>('')
  const [keywordList, setKeywordList] = useState<string[]>([])

  const handleKeywords = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setKeywordList(keywordList.concat(keywords.split(', ')))
    setKeywords('')
  }
  console.log(keywordList);
  
  return (
    <div className="sm:col-span-4">
      <label htmlFor="add-keyword" className="font-light">Añadir palabras clave</label>
      <input
        type="text"
        id="add-keyword"
        value={keywords}
        onChange={({ target }) => {setKeywords(target.value)}}
        className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-2 p-3"
        placeholder="Añade palabras clave separadas por comas"
        required 
      />
      <div className="flex justify-between items-center">
        {keywords ?
          keywords :
          <p className="text-sm font-light">p. ej.: máquina 1, rodillo entrada, buje</p>
        }
        <GenericButton text="Añadir" type="submit" />
      </div>
    </div>
  )
}

export default KeywordsInput
