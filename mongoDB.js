/*
1- Comandos para gestion de base de datos NoSql
*listar bd : show dbs
*cambiar la bd : use (nombre de la bd que quiero utilizar)
*mstrar bd actual : db
*eliminar bd : db.dropDatabase();

2- Comandos para la gestion de colecciones
*listar colecciones : show collections
*crear coleccion : db.createCollection(nombre de la coleccion);
*eliminar coleccion : db.nombre_de_la_coleccion.drop();

3- comandos CRUD(create, read, update, delete)
3.1 (create)
    * insertar un solo documento : db.nombre_coleccion.insertOne({clave1: "valor", clave2: "valor2"});
    * insertar multiples documentos : db.nombre_de_la_coleccion.insertMany([
        {clave1: "valor1", clave4:"valor4"},
        {clave2: "valor2", clave5:"valor5"},
        {clave3: "valor3", clave6:"valor6"}
        ]);

3.2 (Read)
*leer todos los documentos en una coleccion: db.nombre_de_la_coleccion.find();
*leer un solo documento: db.nombde_de_la_coleccion.findOne({clave1: "valor1"});
*filtrar documentos con condicion: db.nombre_de_la_coleccion.find({clave1: "valor1"});  
                                db.nombre_de_la_coleccion.find({campo: { $gt : 10 } });// mayor que
*mostrar ciertos campos: db.nombre_de_la _coleccion.find({},{campo1: 1, campo2 :1 });   

3.3(update)
*actualizar un documento: db.nombre_de_la_coleccion.updateOne({campo1: "valor" },{$set:{campoupdate:"nuevo_valor"} });
*actualizar multiples documentos:db.nombre_de_la_coleccion.updateMany(
                                        {edad: {$gt: 18} }, //$gt : operador de comparacion (mayor que)
                                        {$set:{edadnuevo: "nuevo_valor"}}
                                        );
*incrementar el valor del campo :db.nombre_de_la_coleccion.updateOne(
                                        {campo:"valor"},
                                        {$inc: {campoNumerico: 1}} //$inc operador de actualizacion que incrementa el valor(numerico)
                                        );

3.4 (delete)
*eliminar un documento: db.nombre_de_la_coleccion.deleteOne({campo: "valor"});
*eliminar multiples doc: db.nombre_de_la_coleccion.deleteMany({edad:{$lt:10} });//  $lt(menor que)                                     
*/