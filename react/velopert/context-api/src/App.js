import React from 'react'
import LeftPane from './components/LeftPane'
import RightPane from './components/RightPane'

import './App.css'

const App = () => {
  return (
    <div className="panes">
      <LeftPane />
      <RightPane />
    </div>
  )
}

export default App
