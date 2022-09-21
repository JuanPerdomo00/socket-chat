var socket = io();

//  creo un variabale params donde obtengo el nombre.
var params = new URLSearchParams(window.location.search);

if(!params.has('nombre') || !params.has('sala')){
    // redireccionar al index.html   
    window.location = 'index.html';
    throw new Error(`El nombre y sala es necesario`);
     
};

var usuario = {
    nombre : params.get('nombre'),   //params con el metodo get traigo el nombre
    sala: params.get('sala')
}; 


socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, function(resp){              // recibe respuesta del archivo socket.js de la funcion que return  callback
        console.log('usuarios conectados', resp );
    } );

});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información 
// socket.emit('crearmensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});


//Escuchar cambios de usuarios
// cuando un usuario entra o sale del chat
socket.on('listaPersonas', function(mensaje){
    console.log(mensaje)
});


// Mensaje privados
socket.on('mensajePrivado', (mensaje)=>{
    console.log('mensaje Privado', mensaje)    

})