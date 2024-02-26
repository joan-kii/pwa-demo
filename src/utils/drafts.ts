import { Draft } from './types'

export const drafts: Draft[] = [
  { _id: 0,
    author: 'Sergio',
    description: 'Parada máquina 1',
    text: 'no arranca motor principal, huele a quemado. no se atiende por falta de tiempo',
    date: '24/02/24',
    hour: '12:54',
    files: {
      type: 'Vídeo',
      name: '$1'
    }
  },
  { _id: 1,
    author: 'Sergio',
    description: 'detector soplado roto',
    text: 'se ha perdido el soporte horizontal. le han dado un golpe con la grua',
    date: '22/01/24',
    hour: '18:01',
    files: {
      type: 'Imagen',
      name: '$0'
    }
  },
  { _id: 2,
    author: 'Sergio',
    description: 'fuga de aceite bomba principal',
    text: 'junta rota. avisar a mantenimiento mecánico. se ha desconectado el motor',
    date: '20/01/24',
    hour: '18:23',
    files: {
      type: 'PDF',
      name: '$3'
    }
  }
]
