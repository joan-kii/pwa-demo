import GenericButton from '../UtilsComponents/GenericButton'

function ButtonsGroup({ handleSubmit, handleCancel, handleSaveDraft }: {
  handleSubmit: () => void, handleCancel: () => void, handleSaveDraft: () => void
}) {

  return (
    <div className="my-10 mx-auto">
      <GenericButton
        type="button"
        text="Cancelar"
        disabled={false}
        handleClick={handleCancel}
      />
      <GenericButton
        type="button"
        text="Guardar Borrador"
        disabled={false}
        handleClick={handleSaveDraft}
      />
      <GenericButton
        type="button"
        text="Publicar"
        disabled={false}
        handleClick={handleSubmit}
      />
    </div>
  )
}

export default ButtonsGroup
