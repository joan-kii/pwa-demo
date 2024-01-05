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
      tal y como hemos leído aquí y aquí //// BACKLINKS ////.\
      El final de carrera no tiene signos de haberse desplazado accidentalmente, por lo que decidimos buscar otras explicaciones.\
      Se observa que el tubo de salida choca con la tubería de agua que pasa justo por encima tal y como se observa en la imagen.\
      //// IMAGEN ////\
      Se ajusta el sensor inductivo de posición superior para evitar que la bóveda suba demasiado y choque con la tubería al subir.',
    pending: false,
    date: '22/12/2023 11:33',
    fakeDate: 8,
    managerPraise: true,
    votes: 6,
    comments: [
      {
        _id: 0,
        author: 'Rafael Ramos',
        date: '22/12/2023 18:56',
        text: 'Ese era el problema. No tenía sentido que se hubiera desplazado el final de carrera. Bravo!',
        votes: 0,
        managerPraise: false,
        comments: []
      },
      {
        _id: 1,
        author: 'Juan Juarez',
        date: '23/12/2023 08:15',
        text: 'Este era el motivo por el que los operadores se quejaban de que la bóveda no encajaba en la base.\
          En esta intervención //// BACKLINK //// se mencionaba este problema.\
          Fernando, quizás sería buena idea actualizar dicha intervención.',
        votes: 1,
        managerPraise: true,
        comments: [
          {
            _id: 2,
            author: 'Fernando Fernández',
            date: '23/12/2023 09:42',
            text: 'Cierto. Paso el aviso.',
            votes: 0,
            managerPraise: false,
            comments: []
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
      //// BACKLINK ////\
      el eje trasero de la arrastradora sigue desalineado. Se rearma convertidor para que puedan trabajar, pero\
      queda pendiente de reparar por mantenimiento mecánico.',
    pending: true,
    date: '19/12/2023 17:02',
    fakeDate: 7,
    managerPraise: false,
    votes: 0,
    comments: [
      {
        _id: 3,
        author: 'Fernando Fernández',
        date: '19/12/2023 17:12',
        text: 'Aghh... Vuelvo a pasar el aviso.',
        votes: 0,
        managerPraise: false,
        comments: []
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
    fakeDate: 6,
    managerPraise: false,
    votes: 0,
    comments: []
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
    fakeDate: 5,
    managerPraise: false,
    votes: 0,
    comments: []
  },
  {
    _id: 4,
    author: 'Daniel Dante',
    keywords: ['máquina 2', 'bóveda', 'base'],
    description: 'Máquina 2 no alcanza temperatura objetivo.',
    text: 'Nos avisan los operadores de producción que han detectado menos temperatura en los últimos procesos.\
      No se detecta ninguna anomalía, por lo que se decide subir el Set Point de temperatura en 20ºC. Queda pendiente\
      de aprobación por parte de producción.\
      //// EDITADO ////\
      En esta intervención //// BACKLINK //// realizada por el compañero Sergio Semper se explica el motivo por el que\
      no alcanzaban la temperatura objetivo. Se reestablece SP original.',
    pending: false,
    date: '15/12/2023 07:55',
    fakeDate: 4,
    managerPraise: true,
    edited: true,
    editionDate: '23/12/2023 16:40',
    votes: 3,
    comments: [
      {
        _id: 4,
        author: 'Fernando Fernández',
        date: '23/12/2023 09:45',
        text: 'Dani, edita la intervención para que refleje lo ocurrido con el tubo de salida. Esta es la intervención\
          //// BACKLINK //// en la que se explica lo ocurrido.',
        votes: 0,
        managerPraise: false,
        comments: [
          {
            _id: 5,
            author: 'Daniel Dante',
            date: '23/12/2023 16:44',
            text: 'Hecho!',
            votes: 0,
            managerPraise: false,
            comments: []
          }
        ]
      }
    ]
  },
  {
    _id: 5,
    author: 'Santiago Sánchez',
    keywords: ['trafo 2', 'refrigeración', 'válvula', 'posicionador', 'trafo 1', 'trafo 2'],
    description: 'Ajuste posicionador de la válvula de refrigeración del transformador.',
    text: 'Ante las dudas expresadas por algunos compañeros sobre el ajuste del posicionador\
      de la válvula de refrigeración del trafo, se decide grabar un video en el que se explica\
      cómo hacerlo. Si alguien necesita alguna aclaración más, por favor hacédmelo saber.\
      //// VÍDEO ////',
    pending: false,
    date: '15/10/2023 12:48',
    fakeDate: 1,
    managerPraise: true,
    votes: 8,
    comments: [
      {
        _id: 6,
        author: 'Rafael Ramos',
        date: '16/10/2023 13:02',
        text: 'Yo siempre me equivocaba en el paso 3. Estad atentos a lo que hace Santi en el minuto 3.15.\
          Que no os pase lo que tantas veces me ha pasado...',
        votes: 0,
        managerPraise: false,
        comments:[]
      },
      {
        _id: 7,
        author: 'Antonio Antúnez',
        date: '16/10/2023 16:51',
        text: 'Santi, si no me equivoco, este ajuste es el mismo en todos los trafos, no?',
        votes: 2,
        managerPraise: true,
        comments: [
          {
            _id: 8,
            author: 'Santiago Sánchez',
            date: '16/10/2023 20:56',
            text: 'Yo no he ajustado nunca los otros posicionadores. Por lo que no estoy 100% seguro.',
            votes: 0,
            managerPraise: false,
            comments: []
          }
        ]
      },
      {
        _id: 9,
        author: 'Fernando Fernández',
        date: '17/10/2023 07:15',
        text: 'Magníficamente explicado. Sirva este tutorial como referencia para el ajuste de todos los\
          posicionadores de las válvulas de refrigeración de los 3 trafos, ya que, como dice Antonio,\
          son idénticos. Santi, porfa, añade las palabras clave "trafo 1" y "trafo 3". Muy buen trabajo,\
          Santiago. Bien hecho!!!',
        votes: 0,
        managerPraise: false,
        comments: [
          {
            _id: 10,
            author: 'Santiago Sánchez',
            date: '17/10/2023 19:01',
            text: 'Añadidas, jefe!',
            votes: 0,
            managerPraise: true,
            comments: []
          }
        ]
      }
    ]
  },
  {
    _id: 6,
    author: 'Juan Juarez',
    keywords: ['caudalímetro', 'gas', 'principal', 'ubicación'],
    description: 'Señal anómala del caudalímetro general de fábrica.',
    text: 'Nos avisan desde el Departamento de Suministros de que en los últimos meses han detectado un\
      consumo excesivo de gas según el dato que tenemos en fábrica pero no en el consumo facturado,\
      por lo que con toda seguridad, se debe a un mal fucionamiento de nuestro equipo.\
      Como no hay ninguna intervención registrada sobre dicho caudalímetro, se realiza una investigación\
      para localizarlo, ya que no tenemos ni idea de dónde está instalado. Después de un buen rato buscando\
      se localiza el instrumento en esta ubicación: //// COORDENADAS ////. No se realiza niguna comprobación\
      más por atender otras prioridades.',
    pending: true,
    date: '26/11/2023 21:38',
    fakeDate: 3,
    managerPraise: false,
    votes: 0,
    comments: [
      {
        _id: 11,
        author: 'Fernando Fernández',
        date: '27/11/2023 07:02',
        text: 'Madre mía, ni sabía que eso estaba ahí. Lo añado a la lista de trabajos pendientes.',
        votes: 0,
        managerPraise: false,
        comments: []
      }
    ]
  },
  {
    _id: 7,
    author: 'Sergio Semper',
    keywords: ['máquina 1', 'maniobra', 'giro brazo', 'planos', 'relé'],
    description: 'No gira brazo superior.',
    text: 'El operador nos informa de que no gira el brazo superior. Se comprueba que el relé de la maniobra\
      no funciona. Se busca repuesto pero no se encuentra al tratarse de un relé obsoleto. Se monta un relé de\
      24VDC y se comprueba correcto funcionamiento.',
    pending: true,
    date: '12/11/2023 10:50',
    fakeDate: 2, 
    managerPraise: false,
    votes: 0,
    comments: [
      {
        _id: 12,
        author: 'Fernando Fernández',
        date: '12/11/2023 11:37',
        text: 'Sergio, vamos a cambiar todos los relés a 24VDC. Deja la intervención en pendiente y la\
          añadiré a la lista de trabajos pendientes. He actualizado los planos. Aquí os los paso:\
          //// ARCHIVO ////',
        votes: 0,
        managerPraise: false,
        comments: [
          {
            _id: 10,
            author: 'Sergio Semper',
            date: '13/11/2023 06:36',
            text: 'Pendiente la he dejado.',
            votes: 0,
            managerPraise: false,
            comments: []
          }
        ]
      }
    ]
  }
]
