import './App.css';
import logo from './img/logo.ico';
import fondo from './img/fondo.png';
import item from './img/item.png';




function App() {
  return (

<div className='container'>
  
  <p className='textHeader'>Texto de header top</p>
    
    <nav className="navbar bg-body-tertiary">
      <navbar> 
      <img src={logo} height={40} width={100} alt="logo" className='logo' ></img>  
      </navbar> 
    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <button variant="link" className='button' >Inicio</button>
    <button variant="link" className='button'>Sección 2</button>
    <button variant="link" className='button'>Sección 3</button>
    </div>
    </nav> 

    <div className='box'>
    <img src={fondo} fluid alt="fondo"></img>
    <h1 className='text1'>Texto previo al título</h1>
    <h1 className='text2'>Título banner principal</h1>
    <button className='buttonSend'>Enviar</button>
    </div>

    <div className='items'>
      <div className='card'>
        <img src={item} alt="item" className='imgItem'></img>
        <h1>Item 1</h1>
        <p>Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje).
        Mientras puedes navegar en nuestro sitio antiguo.</p>
        </div>

        <div className='card'>
        <img src={item} alt="item" className='imgItem'></img>
        <h1>Item 1</h1>
        <p>Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje).
        Mientras puedes navegar en nuestro sitio antiguo.</p>
        </div>
        
        <div className='card'>
        <img src={item} alt="item" className='imgItem'></img>
        <h1>Item 1</h1>
        <p>Aún nuestro sitio está en conntrucción (somos muy perfeccionistas jeje).
        Mientras puedes navegar en nuestro sitio antiguo.</p>
        </div>
    


    </div>
</div>

  );
}

export default App;
