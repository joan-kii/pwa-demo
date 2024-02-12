import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { parseText } from '../../utils/helpers'
import { Context } from '../../utils/context'
import CopyLink from './CopyLink'

function TextParsed({ text }: { text: string}) {
  const navigate = useNavigate()
  const { setLayout } = useContext(Context)
  const textParsed = parseText(text)

  return (
    <p>
      {textParsed.map((chunk, idx) => {
        return (
          <span key={idx}>
            <span>{chunk.before}</span>
            {chunk.token === '#' &&
              <>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => {
                    navigate(`/team/intervention/${chunk.linkId}`)
                    setLayout('recent')
                    window.scrollTo(0, 0)
                  }}
                >
                  {chunk.link}
                </span>
                <CopyLink link={chunk.link} />
              </>
            }
            {chunk.token === '@' &&
              <>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => {
                    navigate(`/team/user/${chunk.linkId}`)
                    setLayout('team')
                    window.scrollTo(0, 0)
                  }}
                >
                  {chunk.link}
                </span>
                <CopyLink link={chunk.link} />
              </>
            }
            {chunk.token === '$' &&
              <>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => {
                    navigate(`/team/files/${chunk.linkId}`)
                    setLayout('recent')
                    window.scrollTo(0, 0)
                  }}
                >
                  {chunk.link}
                </span>
                <CopyLink link={chunk.link} />
              </>
            }
            {chunk.token === '&' &&
              <>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => {
                    navigate(`/team/intervention/${chunk.linkId}`)
                    setLayout('recent')
                    window.scrollTo(0, 0)
                  }}
                >
                  {chunk.link}
                </span>
                <CopyLink link={chunk.link} />
              </>
            }
            <span>{chunk.after}</span>
          </span>
        )
      })}
    </p>
  )
}

export default TextParsed
