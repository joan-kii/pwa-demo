import GenericButton from '../UtilsComponents/GenericButton'

function ButtonsGroup() {
  const deleteIntervention = () => {
    console.log('deleted');
  }

  const saveInterventionDraft = () => {
    console.log('draft saved');
  }

  const saveIntervention = () => {
    console.log('saved');
  }

  return (
    <div className="my-10 mx-auto">
      <GenericButton type="button" text="Cancelar" handleClick={deleteIntervention} />
      <GenericButton type="button" text="Guardar Borrador" handleClick={saveInterventionDraft} />
      <GenericButton type="button" text="Publicar" handleClick={saveIntervention} />
    </div>
  )
}

export default ButtonsGroup
