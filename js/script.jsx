import '@maket/css/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@core/App.jsx'
import { BrowserRouter } from 'react-router-dom'

const wrap = document.querySelector('.wrapper');

ReactDOM.render(<BrowserRouter><App wrap={wrap}/></BrowserRouter>, wrap)