import './style.css'
import { dayOfTheWeek } from './utils'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <h2>${dayOfTheWeek(new Date())}</h2>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
