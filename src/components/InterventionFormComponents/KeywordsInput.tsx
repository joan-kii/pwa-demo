import { useState, useEffect } from 'react'

import GenericButton from '../UtilsComponents/GenericButton'
import KeywordTag from './KeywordTag'

function KeywordsInput() {
  const [keywords, setKeywords] = useState<string>('')
  const [keywordList, setKeywordList] = useState<string[]>([])
  const [hasMinKeywords, setHasMinKeywords] = useState<boolean>(false)

  useEffect(() => {
    if (keywordList.length > 2) {
      setHasMinKeywords(true)
    } else {
      setHasMinKeywords(false)
    }
  }, [keywordList])

  const handleKeywords = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setKeywordList(keywordList.concat(keywords.split(', ')))
    setKeywords('')
  }
  
  const removeKeyword = (text: string) => {
    setKeywordList(keywordList.filter((keyword) => keyword !== text))
  }
  
  return (
    <>
      <div className="mx-2 flex justify-between">
        <label htmlFor="add-keyword" className="font-light">Añadir palabras clave</label>
        <div className="group relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${hasMinKeywords ? 'green' : 'red'}`} className={`w-5 h-5 ${!hasMinKeywords && 'animate-pulse'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          <span className="absolute left-10 top-0 scale-0 min-w-full rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Las intervenciones con 3 o más palabras clave son más útiles.</span>
        </div>
      </div>
      <input
        type="text"
        id="add-keyword"
        value={keywords}
        onChange={({ target }) => {setKeywords(target.value)}}
        className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-2 p-3"
        placeholder="Añade palabras clave separadas por comas"
        required 
      />
      <div className="flex justify- items-center">
        {keywordList.length > 0 ?
          keywordList.map((keyword, idx) => <KeywordTag text={keyword} key={idx} handleRemove={removeKeyword} />) :
          <p className="text-sm font-light">p. ej.: máquina 1, rodillo entrada, buje</p>
        }
      </div>
      <div className="mt-4 flex justify-end">
        <GenericButton text="Añadir" type="button" handleClick={handleKeywords}/>
      </div>
    </>
  )
}

export default KeywordsInput
