import { useState } from 'react'

import { Draft } from '../../utils/types'
import GenericButton from '../UtilsComponents/GenericButton'
import DraftSummary from './DraftSummary'

function DraftsGrid({ drafts }: { drafts: Draft[] }) {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [description, setDescription] = useState<string>('')
  const [text, setText] = useState<string>('')

  const handleDraftSubmit = () => {
    setDescription('')
    setText('')
    setShowModal(false)
  }

  return (
    <>
      {drafts.map((draft) => <DraftSummary key={draft._id} draft={draft} />)}
      <div className="flex justify-center mb-2">
        <GenericButton text="Nuevo Borrador" type="button" handleClick={() => setShowModal(!showModal)} />
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-5/6 sm:w-2/3 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center sm:items-start justify-between p-3 sm:p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-base sm:text-3xl font-semibold">
                    Nuevo Borrador
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
                <div className="relative p-2 sm:p-4 flex-auto">
                  <div className="mx-2 sm:h-8 flex justify-between">
                    <label htmlFor="description" className="font-light">Descripción</label>
                  </div>
                  <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={({ target }) => {setDescription(target.value)}}
                    className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-2 p-3"
                    placeholder="Añade una descripción"
                    required 
                  />
                </div>
                <div className="relative p-2 sm:p-4 flex-auto">
                  <div className="mx-2 sm:h-8 flex justify-between">
                    <label htmlFor="text" className="font-light">Texto</label>
                  </div>
                  <input
                    type="text"
                    id="text"
                    value={text}
                    onChange={({ target }) => {setText(target.value)}}
                    className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-2 p-3"
                    placeholder="Añade el texto"
                    required 
                  />
                </div>
                <div className="flex items-center justify-around p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <GenericButton text="Cancelar" type="reset" handleClick={() => setShowModal(false)} />
                  <GenericButton text="Guardar" type="button" handleClick={() => handleDraftSubmit()} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default DraftsGrid
