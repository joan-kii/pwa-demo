import GenericButton from '../UtilsComponents/GenericButton'

function ButtonsGroup({ handleSubmit, handleCancel, handleSaveDraft }: {
  handleSubmit: () => void, handleCancel: () => void, handleSaveDraft: () => void
}) {

  return (
    <div className="my-10 mx-auto">
      <GenericButton type="button" text="Cancelar" handleClick={handleCancel} />
      <GenericButton type="button" text="Guardar Borrador" handleClick={handleSaveDraft} />
      <GenericButton type="button" text="Publicar" handleClick={handleSubmit} />
    </div>
  )
}

export default ButtonsGroup
