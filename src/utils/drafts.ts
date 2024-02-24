import { Draft } from './types'

export const drafts: Draft[] = [
  { _id: 0,
    author: 'Sergio',
    description: 'Parada máquina 1',
    text: 'no arranca motor principal $1',
    date: '24/02/24',
    hour: '12:54'
  },
  { _id: 1,
    author: 'Sergio',
    description: 'detector soplado roto',
    text: 'se ha perdido el soporte horizontal $3',
    date: '22/01/24',
    hour: '18:01'
  },
  { _id: 2,
    author: 'Sergio',
    description: 'fuga de aceite bomba principal',
    text: 'junta rota. avisar a mantenimiento mecánico $0',
    date: '20/01/24',
    hour: '18:23'
  }
]
