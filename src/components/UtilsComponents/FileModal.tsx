import GenericButton from './GenericButton'

function FileModal({ fileId, setShowModal }:
  {
    fileId: string,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  }
  ) {
    
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 rounded-t">
              <h4 className="text-3xl font-semibold">
                Archivo
              </h4>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {fileId === '$0' && 
              <img className="mx-auto object-cover h-96 w-96" src={`/src/assets/pictures/${fileId}.webp`} />
            }
            {fileId === '$1' && 
              <video src={`/src/assets/pictures/${fileId}.mp4`} autoPlay />
            }
            <div className="flex items-center justify-around p-6 border-t border-solid border-blueGray-200 rounded-b">
              <GenericButton
                text="Cancelar"
                type="reset"
                disabled={false}
                handleClick={() => setShowModal(false)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default FileModal
