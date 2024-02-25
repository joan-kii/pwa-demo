import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { parseText } from '../../utils/helpers'
import { Context } from '../../utils/context'
import CopyLink from './CopyLink'
import FileModal from './FileModal'

function TextParsed({ text }: { text: string }) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState<boolean>(false)
  const { setLayout } = useContext(Context)
  const textParsed = parseText(text)

  return (
    <>
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
            {chunk.link === '$0' &&
              <>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setShowModal(true)
                  }
                >
                  {chunk.link}
                </span>
                <CopyLink link={chunk.link} />
                {showModal && <FileModal fileId={chunk.link} setShowModal={setShowModal} />}
              </>
            }
            {chunk.link === '$1' &&
              <>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setShowModal(true)
                  }
                >
                  {chunk.link}
                </span>
                <CopyLink link={chunk.link} />
                {showModal && <FileModal fileId={chunk.link} setShowModal={setShowModal} />}
              </>
            }
            {chunk.link === '$3' &&
              <>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => window.open(`/src/assets/pictures/${chunk.link}.pdf`)
                  }
                >
                  {chunk.link}
                </span>
                <CopyLink link={chunk.link} />
              </>
            }
            {chunk.link === '$2' &&
              <>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => window.open('https://www.google.com.sa/maps/search/@36.3562246,-5.2313558,18z?entry=ttu')
                  }
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
    </>
  )
}

export default TextParsed
