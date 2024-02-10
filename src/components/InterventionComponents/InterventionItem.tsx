import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import InterventionHeader from './InterventionHeader'
import InterventionKeywords from './InterventionKeywords'
import InterventionPending from './InterventionPending'
import InterventionApprove from '../UtilsComponents/ManagerApprove'
import TextParsed from '../UtilsComponents/TextParsed'
import CommentForm from '../CommentComponents/CommentForm'
import CommentsList from '../LayoutComponents/CommentsList'
import { Context } from '../../utils/context'
import GenericButton from '../UtilsComponents/GenericButton'
import ItemHeader from '../LayoutComponents/ItemHeader'

function InterventionItem() {
  const { setLayout, interventions } = useContext(Context)
  const { interventionId } = useParams()
  const intervention = interventions.find((intervention) => intervention._id === Number(interventionId))
  
  useEffect(() => {
    setLayout('intervention')
  }, [setLayout])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {intervention &&
        <div className="flex flex-col">
          <div className="mx-auto w-2/3">
            <ItemHeader content={intervention} />
          </div>
          <div className="container flex mx-auto mb-5 py-2 w-2/3 border-solid border-2 border-gray rounded-b shadow">
            <div className="flex flex-col p-3 w-full">
              <InterventionHeader {...intervention} />
              <div className="mx-auto">
                <InterventionKeywords {...intervention} />
              </div>
              <div className="m-3 text-slate-800">
                <h3 className="py-2 text-lg text-center font-semibold">{intervention.description}</h3>
                <div className="w-full py-3 px-5 text-justify">
                  <TextParsed text={intervention.text} />
                </div>
              </div>
              <div className="flex justify-around">
                {intervention.managerApprove &&
                  <InterventionApprove />
                }
                {intervention.pending &&
                  <InterventionPending />
                }
              </div>
              {intervention.author === 'Sergio Samper' &&
                <div className="mr-6 flex justify-end">
                  <GenericButton text="Editar Intervención" type="button" handleClick={() => {}}/>
                </div>
              }
              <div className="my-4 divide-y-2">
                <CommentForm />
              </div>
              <CommentsList {...intervention}/>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default InterventionItem
