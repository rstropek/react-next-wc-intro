import './style.css'
import { setupCounter } from './counter.ts'
import { setupForm } from './basic-form.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello World</h1>

  <h2>Counter</h2>
  <button id="counter"></button>

  <h2>Form</h2>
  <div id="form"></div>

  <hr/>

  <p>Have fun with this sample</p>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupForm(document.querySelector<HTMLDivElement>('#form')!);
