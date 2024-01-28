import { useState, useContext } from 'react'

import Quote from '../InterventionFormComponents/Quote'
import KeywordsInput from '../InterventionFormComponents/KeywordsInput'
import Progress from '../InterventionFormComponents/Progress'
import TextInput from '../InterventionFormComponents/TextInput'
import FileInput from '../InterventionFormComponents/FileInput'
import PendingSwitch from '../InterventionFormComponents/PendingSwitch'
import ButtonsGroup from '../InterventionFormComponents/ButtonsGroup'
import BulbSuggestion from '../InterventionFormComponents/BulbSuggestion'
import { Intervention } from '../../utils/types'
import { Context} from '../../utils/context'

function InterventionForm() {
  const { interventions, activeUser, setLayout } = useContext(Context)
  const [keywordsList, setKeywordsList] = useState<string[]>([])
  const [description, setDescription] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [isPending, setIsPending] = useState(true)

  const newIntervention: Intervention = {
    _id: interventions.length + 1,
    author: `${activeUser.user.name} ${activeUser.user.lastName}`,
    keywords: keywordsList,
    description,
    text,
    pending: isPending,
    date: new Date().toLocaleString('es-SP', { timeZone: 'UTC' }),
    fakeDate: interventions.length + 1,
    managerApprove: false,
    comments: [],
    votes: 0,
    edited: false,
    editionDate: ''
  }
  
  const submitForm = () => {
    interventions.push(newIntervention)
    console.log('new intervention')
    setLayout('recent')
  }

  const cancelForm = () => {
    setKeywordsList([])
    setDescription('')
    setText('')
    setIsPending(true)
    console.log('intervention canceled');
  }

  const saveDraft = () => {
    console.log('draft saved');
  }

  return (
    <div className="relative">
      <form className="container flex flex-col mx-auto mt-5 mb-20 w-2/3 bg-gray-50 border-solid border-2 border-gray rounded-lg shadow">
        <div className="mx-auto px-20 w-full">
          <div className="border-b border-gray-900/10">
            <Quote />
            <div className="mt-10 p-5 bg-white border-solid border-2 border-gray rounded-lg">
              <KeywordsInput keywordsList={keywordsList} setKeywordsList={setKeywordsList} />
              <TextInput
                label="Descripción"
                text="Escribe una breve descripción de tu intervención."
                rows={1}
                content={description}
                setContent={setDescription}
              >
                <BulbSuggestion isSuggesting={false} text="Trata de escribir una descripción concisa." />
              </TextInput>  
              <TextInput
                label="Intervención"
                text="Cuéntanos qué ha pasado."
                rows={4}
                content={text}
                setContent={setText}
              >
                <BulbSuggestion isSuggesting={false} text="Relata lo ocurrido de forma secuencial. Da tantos detalles como puedas" />
              </TextInput>
              <FileInput />
              <PendingSwitch isPending={isPending} setIsPending={setIsPending} />
            </div>
          </div>
        </div>
        <ButtonsGroup handleSubmit={submitForm} handleCancel={cancelForm} handleSaveDraft={saveDraft} />
      </form>
      <div className="fixed bottom-10 right-20">
        <Progress />
      </div>
    </div>
  )
}

export default InterventionForm
