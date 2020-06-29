import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CallWidget from './components/CallWidget';

const root = document.createElement('DIV')
document.body.appendChild(root)

ReactDOM.render(
  <React.StrictMode>
    <div className='App'>
      <CallWidget />
    </div>
  </React.StrictMode>,
  root
)
