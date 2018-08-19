const assert = require("assert"); 
const obtenerListaMensajes = require('../src/js/test');
let mensajes = {};

describe('obtenerListaMensajes', ()=>{
    it('debería indicar el tipo de mensaje', ()=>{
        assert.equal(typeof mensajes, "object");
    });
    
    it('debería devolver 0 si es que no hay mensajes', ()=>{
        assert.equal(obtenerListaMensajes === mensajes.length, 0);
    });

    it('debería devolver la cantidad de mensajes obtenidos', ()=>{
        assert.equal(obtenerListaMensajes === mensajes.length, 0);
    });
    it('debería  indicar si se creó una lista de mensajes', ()=>{
        assert.equal(obtenerListaMensajes === mensajes.value, 0);
    });

});
