import { useState } from 'react'

import { Draft } from '../../utils/types'
import GenericButton from '../UtilsComponents/GenericButton'
import DraftSummary from './DraftSummary'
import SingleDraft from './SingleDraft'

function DraftsGrid({ drafts, draftId, setDraftId }:
  {
    drafts: Draft[],
    draftId: number | null,
    setDraftId: React.Dispatch<React.SetStateAction<number | null>>
  }) {
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
      {
        draftId !== null ? <SingleDraft draft={drafts[draftId]} setDraftId={setDraftId} /> :
        <>
          {drafts.map((draft) => <DraftSummary key={draft._id} draft={draft} setDraftId={setDraftId} />)}
          <div className="flex justify-center mb-2">
            <GenericButton
              text="Nuevo Borrador"
              type="button"
              disabled={false}
              handleClick={() => setShowModal(!showModal)}
            />
          </div>
        </>
      }
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
                <div className="relative px-2 sm:p-4 flex-auto">
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
                <div className="relative px-2 sm:p-4 flex-auto">
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
                <div className="relative px-2 sm:p-4 flex-auto">
                <div className="mx-2 sm:h-8 flex justify-between">
                  </div>
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
                  >
                    <span>Sube un archivo</span>
                  </label>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-2 p-3"
                    multiple
                    accept="image/*, video/*, audio/*, .pdf, .doc"
                  />
                </div>
                <div className="relative px-2 flex flex-col sm:hidden">
                  <div className="mx-2 mb-2 flex justify-between">
                    <h3 className="font-light">Añadir archivo</h3>
                  </div>
                  <div className="flex justify-around mb-2">
                    <button className="py-2 px-2 text-sm font-medium text-white bg-gray-800 border-gray-800 hover:bg-gray-600 focus:ring-gray-300 rounded-lg border focus:ring-4 focus:outline-none disabled:bg-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                      </svg>
                    </button>
                    <button className="py-2 px-2 text-sm font-medium text-white bg-gray-800 border-gray-800 hover:bg-gray-600 focus:ring-gray-300 rounded-lg border focus:ring-4 focus:outline-none disabled:bg-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    </button>
                    <button className="py-2 px-2 text-sm font-medium text-white bg-gray-800 border-gray-800 hover:bg-gray-600 focus:ring-gray-300 rounded-lg border focus:ring-4 focus:outline-none disabled:bg-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                      </svg>
                    </button>
                    <button className="py-2 px-2 text-sm font-medium text-white bg-gray-800 border-gray-800 hover:bg-gray-600 focus:ring-gray-300 rounded-lg border focus:ring-4 focus:outline-none disabled:bg-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </button>
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
                    text="Guardar"
                    type="button"
                    disabled={false}
                    handleClick={() => handleDraftSubmit()}
                  />
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
