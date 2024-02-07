import { useNavigate } from 'react-router-dom'

import { parseText } from '../../utils/helpers'
import CopyLink from './CopyLink'

function TextParsed({ text }: { text: string}) {
  const navigate = useNavigate()
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
