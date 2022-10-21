import React, { Component } from 'react'

export default class FormSimple extends Component {
    //NECESITAMOS UNA VARIABLE DE REFERENCIA PARA CADA CONTROL DE FORMULARIO QUE DESEEMOS RECUPERAR SU VALOR

cajanombre = React.createRef();
cajaedad = React.createRef();


//EL SIGUIENTE PASO SERÁ TENER UN MÉTODO PARA CAPTURAR EL SUBMIT DEL FORMULARIO. EL MÉTODO DEBE RECIBIR UN EVENT
recibirDatosForm = (e) => {
        //LA PRIMERA INSTRUCCIÓN SIEMPRE SERÁ DETENER LA PROPAGACIÓN DEL EVENTO
        e.preventDefault();
        //EN LAS REFERENCIAS DE OBJETO, PARA CAPTURAR EL VALUE SE JUTILIZA referencia.current.value
        console.log(this.cajanombre.current.value);

}

  render() {
    return (
        

      
      <div>
      <form onSubmit={this.recibirDatosForm} >
        <h1>Formulario simple</h1>
    
        <label typeof='text'>Nombre</label>
        <input type='text' ref={this.cajanombre}/>
        <br />
        <label typeof='text'>Edad </label>
        <input type='text' ref={this.cajaedad}/>
        <br />
 
        <button>Enviar datos</button>
        </form>
      </div>
      
    )
  }
}
