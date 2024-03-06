
import './App.css'
import Card from './componentes/Card'
import Header from './componentes/Header'

function App() {

  return (
    <>
      
      <Header Title='Minha pagina maneira'/>
      <div className='cardSection'>
      <Card
        Nome='Melissa barbosa'
        Img='https://th.bing.com/th/id/OIP.XRumQ60vsT5xBp-5bqNbdAHaHA?rs=1&pid=ImgDetMain'
        Email='mel@gmail.com'
        Rm={552535}
        Funcao={'meow'}
        />
      </div>
    </>
  )
}

export default App
