import React, { createContext, useState, ReactNode } from 'react'

import { Intervention, Layout, Teammate, Manager, Keyword } from './types'
import { interventions } from './interventions'
import { teammate } from './users'

type defaultValueType = {
  layout: Layout
  setLayout: React.Dispatch<React.SetStateAction<Layout>>
  keywords: Keyword[]
  setKeywords: React.Dispatch<React.SetStateAction<Keyword[]>>
  interventions: Intervention[]
  activeUser: Teammate | Manager
  setActiveUser: React.Dispatch<React.SetStateAction<Teammate | Manager>>
}

const defaultValue: defaultValueType = {
  layout: 'recent',
  setLayout: function() {},
  keywords: [],
  setKeywords: function() {},
  interventions: interventions,
  activeUser: teammate,
  setActiveUser: function () {}
}

const Context = createContext(defaultValue)

function ContextProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState<Layout>('recent')
  const [activeUser, setActiveUser] = useState<Teammate | Manager>(teammate)
  const [keywords, setKeywords] = useState<Keyword[]>([])
  const value = {
    layout, setLayout, interventions,
    keywords, setKeywords,
    activeUser, setActiveUser
  }
  
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
