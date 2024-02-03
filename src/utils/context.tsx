import React, { createContext, useState, ReactNode } from 'react'

import { Intervention, Layout, Teammate, Manager } from './types'
import { interventions } from './interventions'
import { teammate } from './users'

type defaultValueType = {
  layout: Layout
  setLayout: React.Dispatch<React.SetStateAction<Layout>>
  interventions: Intervention[]
  activeUser: Teammate | Manager
  setActiveUser: React.Dispatch<React.SetStateAction<Teammate | Manager>>
}

const defaultValue: defaultValueType = {
  layout: 'recent',
  setLayout: function() {},
  interventions: interventions,
  activeUser: teammate,
  setActiveUser: function () {}
}

const Context = createContext(defaultValue)

function ContextProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState<Layout>('recent')
  const [activeUser, setActiveUser] = useState<Teammate | Manager>(teammate)
  const value = {
    layout, setLayout, interventions,
    activeUser, setActiveUser
  }
  
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }