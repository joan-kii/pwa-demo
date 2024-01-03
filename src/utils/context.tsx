import React, { createContext, useState, ReactNode } from 'react'

import { Layout } from './types'

type defaultValueType = {
  layout: Layout,
  setLayout: React.Dispatch<React.SetStateAction<Layout>>
}

const defaultValue: defaultValueType = { layout: 'recent', setLayout: function() {}}
const Context = createContext(defaultValue)

function ContextProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState<Layout>('recent')
  const value = { layout, setLayout }
  
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }