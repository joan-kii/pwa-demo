import Quote from '../InterventionFormComponents/Quote'
import KeywordsInput from '../InterventionFormComponents/KeywordsInput'
import Progress from '../InterventionFormComponents/Progress'
import TextInput from '../InterventionFormComponents/TextInput'
import FileInput from '../InterventionFormComponents/FileInput'

function InterventionForm() {

  return (
    <div className="relative">
      <form className="container flex flex-col mx-auto my-5 w-2/3 bg-gray-50 border-solid border-2 border-gray rounded-lg shadow">
        <div className="mx-auto px-20 w-full">
          <div className="border-b border-gray-900/10">
            <Quote />
            <div className="mt-10 p-5 bg-white border-solid border-2 border-gray rounded-lg">
              <KeywordsInput />
              <TextInput label="Descripción" text="Escribe una breve descripción de tu intervención." rows={1} />
              <TextInput label="Intervención" text="Cuéntanos qué ha pasado." rows={4} />
              <FileInput />
              <div className="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                  Same as email
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                  No push notifications
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
      <div className="fixed bottom-10 right-20">
        <Progress />
      </div>
    </div>
  )
}

export default InterventionForm
