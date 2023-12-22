import { Intervention }from './types'

export const interventions: Intervention[] = [
  {
    _id: 0,
    author: 'Sergio Semper',
    keywords: ['bóveda', 'máquina 2', 'posición de trabajo'],
    description: 'El giro de la bóveda de la máquina 2 no alcanca la posición de trabajo',
    text: 'Nos comunica el operador de producción que no puede iniciar la secuencia de trabajo.\
      Se observa que la columna no alcanza la posicion de trabajo.\
      Según el operador esto ha ocurrido otras veces, y se solucionó ajustando el final de carrera,\
      tal y como hemos leído aquí y aquí.\
      El final de carrera no tiene signos de haberse desplazado accidentalmente, por lo que decidimos buscar otras explicaciones.\
      Se observa que el tubo de salida choca con la tubería de agua que pasa justo por encima tal y como se observa en la imagen\
      Se ajusta el sensor inductivo de posición superior para evitar que la bóveda suba demasiado y choque con la tubería al subir.',
    pending: false,
    date: '22/12/2023 11:33',
    managerPraise: true,
    votes: 6,
    comments: [
      {
        _id: 0,
        author: 'Rafael Ramos',
        date: '22/12/2023 18:56',
        text: 'Ese era el problema. No tenía sentido que se hubiera desplazado el final de carrera. Bravo!',
        votes: 0,
        managerPraise: false
      },
      {
        _id: 1,
        author: 'Juan Juarez',
        date: '23/12/2023 08:15',
        text: 'Este era el motivo por el que los operadores se quejaban de que la bóveda no encajaba en la base.\
          En esta intervención se mencionaba este problema. Fernando, quizás sería buena idea actualizar dicha intervención.',
        votes: 1,
        managerPraise: true,
        comments: [
          {
            _id: 3,
            author: 'Fernando Fernández',
            date: '23/12/2023 09:42',
            text: 'Cierto. Paso el aviso.'
          }
        ]
      },
    ]
  },
  {
    _id: 1,
    author: 'Antonio Antúnez',
    keywords: ['motor', 'arrastradora 3', 'alineación'],
    description: 'El motor de la arrastradora 3 dispara por sobreesfuerzo.',
    text: 'Según el jefe de línea, la arrastradora 3 tiene un problema de sincronización y pierde velocidad.\
      Se comprueba que ha disparado el convertidor por sobreesfuerzo. Como ya se informó en esta intervención,\
      el eje trasero de la arrastradora sigue desalineado. Se rearma convertidor para que puedan trabajar, pero\
      queda pendiente de reparar por mantenimiento mecánico.',
    pending: true,
    date: '19/12/2023 17:02',
    managerPraise: false,
    votes: 0,
    comments: [
      {
        _id: 0,
        author: 'Fernando Fernández',
        date: '19/12/2023 17:12',
        text: 'Aghh... Vuelvo a pasar el aviso.'
      }
    ]
  },
  {
    _id: 2,
    author: 'Rafael Ramos',
    keywords: ['bóveda', 'máquina 2'],
    description: 'Posición de trabajo bóveda máquina 2.',
    text: 'La bóveda no llega a la posición de trabajo. Se ajusta final de carrera y se comprueba\
      correcto funcionamiento.',
    pending: false,
    date: '18/12/2023 10:45',
    managerPraise: false,
    votes: 0,
  },
  {
    _id: 3,
    author: 'Santiago Sánchez',
    keywords: ['máquina 2', 'posición trabajo'],
    description: 'No arranca máquina 2.',
    text: 'Nos informa el operador de la máquina 2 de que no puede poner en marcha la máquina.\
      Se comprueba que la bóveda está físicamente en posición de inicio pero no hay señal de posicionamiento.\
      El brazo de la columna de giro no llega a activar el final de carrera, por lo que se ajusta dicho\
      final de carrera.',
    pending: false,
    date: '17/12/2023 19:22',
    managerPraise: false,
    votes: 0,
  },
  {
    _id: 4,
    author: 'Daniel Dante',
    keywords: ['máquina 2', 'bóveda', 'base'],
    description: 'Máquina 2 no alcanza temperatura objetivo.',
    text: 'Nos avisan los operadores de producción que han detectado menos temperatura en los últimos procesos.\
      No se detecta ninguna anomalía, por lo que se decide subir el Set Point de temperatura en 20ºC. Queda pendiente\
      de aprobación por parte de producción.',
    pending: true,
    date: '15/12/2023 07:55',
    managerPraise: false,
    votes: 1,
    // Seguir aquí
    comments: [
      {
        _id: 0,
        author: 'Rafael Ramos',
        date: '22/12/2023 18:56',
        text: 'Ese era el problema. No tenía sentido que se hubiera desplazado el final de carrera. Bravo!',
        votes: 0,
        managerPraise: false
      },
      {
        _id: 1,
        author: 'Juan Juarez',
        date: '23/12/2023 08:15',
        text: 'Este era el motivo por el que los operadores se quejaban de que la bóveda no encajaba en la base.\
          En esta intervención se mencionaba este problema. Fernando, quizás sería buena idea actualizar dicha intervención.',
        votes: 1,
        managerPraise: true,
        comments: [
          {
            _id: 3,
            author: 'Fernando Fernández',
            date: '23/12/2023 09:42',
            text: 'Cierto. Paso el aviso.'
          }
        ]
      },
    ]
  },
]