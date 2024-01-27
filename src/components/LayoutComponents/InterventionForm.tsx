import Quote from '../InterventionFormComponents/Quote'
import KeywordsInput from '../InterventionFormComponents/KeywordsInput'
import Progress from '../InterventionFormComponents/Progress'
import TextInput from '../InterventionFormComponents/TextInput'
import FileInput from '../InterventionFormComponents/FileInput'
import PendingSwitch from '../InterventionFormComponents/PendingSwitch'
import ButtonsGroup from '../InterventionFormComponents/ButtonsGroup'
import BulbSuggestion from '../InterventionFormComponents/BulbSuggestion'

function InterventionForm() {
  return (
    <div className="relative">
      <form className="container flex flex-col mx-auto mt-5 mb-20 w-2/3 bg-gray-50 border-solid border-2 border-gray rounded-lg shadow">
        <div className="mx-auto px-20 w-full">
          <div className="border-b border-gray-900/10">
            <Quote />
            <div className="mt-10 p-5 bg-white border-solid border-2 border-gray rounded-lg">
              <KeywordsInput />
              <TextInput label="Descripción" text="Escribe una breve descripción de tu intervención." rows={1}>
                <BulbSuggestion isSuggesting={false} text="Trata de escribir una descripción concisa." />
              </TextInput>  
              <TextInput label="Intervención" text="Cuéntanos qué ha pasado." rows={4}>
                <BulbSuggestion isSuggesting={false} text="Relata lo ocurrido de forma secuencial. Da tantos detalles como puedas" />
              </TextInput>
              <FileInput />
              <PendingSwitch />
            </div>
          </div>
        </div>
        <ButtonsGroup />
      </form>
      <div className="fixed bottom-10 right-20">
        <Progress />
      </div>
    </div>
  )
}

export default InterventionForm
