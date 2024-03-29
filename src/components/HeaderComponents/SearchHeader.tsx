import { useState, useContext } from 'react'

import GenericButton from '../UtilsComponents/GenericButton'
import KeywordTag from '../InterventionFormComponents/KeywordTag'
import TopLogo from './TopLogo'
import TopSettings from './TopSettings'
import { Context } from '../../utils/context'

function SearchHeader() {
  const [showModal, setShowModal] = useState(false);
  const [keyword, setKeyword] = useState<string>('')
  const { keywords, setKeywords, setLayout } = useContext(Context)
  
  const handleKeywordSubmit = () => {
    setKeywords(keywords.concat(keyword))
    setKeyword('')
  }
  
  const handleKeywordListSubmit = () => {
    setShowModal(false)
    setLayout('recent')
  }

  const removeKeyword = (text: string) => {
    setKeywords(keywords.filter((keyword) => keyword !== text))
  }
  
  return (
    <div className="flex mx-auto px-3 pt-3 w-full justify-between items-center sm:px-4 sm:pt-6 lg:px-8">
      <TopLogo />
      <div className="flex shrink w-full ps-6 items-center justify-center">
        <GenericButton
          text="Realizar Búsqueda"
          disabled={false}
          type="button" handleClick={() => {
          setShowModal(true)
          setKeywords([])
        }} />
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-5/6 sm:w-2/3 my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-center sm:items-start justify-between p-3 sm:p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-base sm:text-3xl font-semibold">
                      Buscar Intervención
                    </h3>
                    <button
                      className="sm:p-1 sm:ml-auto bg-transparent border-0 text-black sm:float-right sm:text-3xl sm:leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-xl sm:text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-2 sm:p-6 flex-auto">
                    <div className="mx-2 sm:h-10 flex justify-between">
                      <label htmlFor="add-keyword" className="font-light">Añadir palabras clave</label>
                    </div>
                    <input
                      type="text"
                      id="add-keyword"
                      value={keyword}
                      onChange={({ target }) => {setKeyword(target.value)}}
                      className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-2 p-3"
                      placeholder="Añade palabras clave separadas por comas"
                      required 
                    />
                    <div className="flex h-8 items-center">
                      {keywords.length > 0 ?
                        keywords.map((keyword, idx) => <KeywordTag text={keyword} key={idx} handleRemove={removeKeyword} />) :
                        <p className="text-sm font-light">p. ej.: máquina 1, rodillo entrada, buje</p>
                      }
                    </div>
                    <div className="mt-1 flex justify-center">
                      <GenericButton
                        text="Añadir"
                        type="button"
                        disabled={false}
                        handleClick={handleKeywordSubmit}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-around p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <GenericButton
                      text="Cancelar"
                      type="reset"
                      disabled={false}
                      handleClick={() => setShowModal(false)}
                    />
                    <GenericButton
                      text="Buscar"
                      type="button"
                      disabled={!(keywords.length > 0)}
                      handleClick={() => handleKeywordListSubmit()}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      <TopSettings />
    </div>
  )
}

export default SearchHeader
