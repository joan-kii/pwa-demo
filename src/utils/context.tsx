import React, { createContext, useState, ReactNode } from 'react'

import { Intervention, Layout } from './types'
import { interventions } from './interventions'

type defaultValueType = {
  layout: Layout
  setLayout: React.Dispatch<React.SetStateAction<Layout>>
  interventions: Intervention[]
}

const defaultValue: defaultValueType = {
  layout: 'recent',
  setLayout: function() {},
  interventions: interventions
}
const Context = createContext(defaultValue)

function ContextProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState<Layout>('recent')
  const value = {
    layout, setLayout, interventions
  }
  
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }