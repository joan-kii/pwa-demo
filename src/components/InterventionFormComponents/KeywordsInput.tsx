import { useState, useEffect } from 'react'

import GenericButton from '../UtilsComponents/GenericButton'
import BulbSuggestion from './BulbSuggestion'
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
    <div className="w-full flex flex-col">
      <div className="mx-2 flex justify-between">
        <label htmlFor="add-keyword" className="font-light">Añadir palabras clave</label>
        <BulbSuggestion isSuggesting={hasMinKeywords} text="Las intervenciones con 3 o más palabras clave son más útiles." />
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
    </div>
  )
}

export default KeywordsInput
