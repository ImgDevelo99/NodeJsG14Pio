/*
hace referencia multiples callback de manera excesiva. esto suele ocurrir en aplicaciones que se realizan multiples
tares de manera asincronica.
*/
obtenerDatosUsuario(function(usuario){
    obtenerPosts(usuario_id, function(posts){
        obtenerComentarios(posts[0].id, function(comentario){
            console.log(comentario)
        });
    });
});
//------------------promesas-----------------------------------
obtenerDatosUsuario()
.then(usuario => obtenerPosts(usuario_id))
.then(posts => obtenerComentarios(posts[0].id))
.then(comentarios => console.log(comentarios))
.catch(error => console.error(error))

//----------------Async/Await-----------------------------------
async function manejoDatos() {
    try {
        const usuario = await obtenerDatosUsuario();
        const posts = await obtenerPosts(usuario_id);
        const comentarios = await obtenerComentarios(posts[0].id);
        console.log(comentarios);

    } catch (error) {
        console.error(error);
        
    }
    
} 