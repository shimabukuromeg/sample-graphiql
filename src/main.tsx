import React from 'react'
import ReactDOM from 'react-dom/client'
import GraphiQLApp from './GraphiQLApp'
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GraphiQLApp />
  </React.StrictMode>
)
