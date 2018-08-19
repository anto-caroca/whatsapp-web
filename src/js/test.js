const obtenerListaMensajes = (mensajes) => {
  
    mensajes = {};
    
      if(mensajes.lenght > 0) {
        return 'hay mensajes';
    } else if (mensajes.length < 1) {
        return 'no hay mensajes';
    }
    
      return mensajes;
    };
    
    module.exports = obtenerListaMensajes;

