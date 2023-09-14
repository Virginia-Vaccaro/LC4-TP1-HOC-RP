import './App.css'
import ButtonTooltip from './Components/ButtonTooltip'
import Toggle from './Components/Toggle'

const App = () => {
  return (
    <>
      <Toggle>
      {(show) => (
        <>
          <h3>Componente Toggle, click aquí</h3>
          {show ? <p>Este es el mensaje oculto :D</p> : null}
        </>
      )}
      </Toggle>
        <br></br>
        <br></br>
      <ButtonTooltip/>
      
    </>
  )
}

export default App
