/*
1- Comandos para gestion de base de datos NoSql
* db.Productos.find(); // devuelve todos los documentos.
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

//----------------------------CLUSTER-------------------------------------------
/*
contexto de bd es un conjunto de servidores o instacioas, se trabaja en conjunto para proporcionar disponibilidad,
escalabilidad del sistema o de la aplicacion,nos permite distribuir datos en varios nodos, nos ayuda a manejar
grandes volumenes de datos.

1. alta disponibilidad
2. Escalabilidad
3. Distribuicion geografica
4. tolerancia a fallos

---------cluster mongodb----
1. replica set (conjunto de replicas)
2. sherded cluster (particionamiento)
3. cluster en mongodb atlas

ventajas
1. mayor confiabilidad
2.mejor rendimiento
3. flexibilidad

-----------MONGODB ATLAS-----------------------
Es una plataforma de bd en la nube ofrecida por mongodb. la infraestructura de nube como(AWS, Azure, GCP )

1. Almacenamiento y gestion de BD en la nuve
2. escalabilidad automatica
3. segurida avanzada
4. monitoreo y administracion automatizada
5.  herramientas de analisis

----------------comandos de consulta y filtrado-----------------------------
1. operadores de comparacion
    db.nombreColeccion.find({ campo : {$gt: valor }}) // mayor que
    db.nombreColeccion.find({ campo : {$lt: valor }}) // menor que
    db.nombreColeccion.find({ campo : {$eq: valor }}) // igual a
    db.nombreColeccion,find({ edad : {$ne: 10 }}) //Distinto de

2. operadores logicos----------------
    db.nombreColeccion.find({ $and : [{campo1 : valor1} , {campo2 : valor2 }]})  V and V = V
    db.nombreColeccion.find({ $or : [{campo1 : valor1} , { campo2 : valor2 }]})  V or f = v                   

3.uso de expresiones regulares-----------
    db.nombreColeccion.find({ campo : /valor /}) // busca un texto que contega "valor"


------TALLER PRACTICO 1----------------
    use Tienda;
    db.createCollection("Productos");
    db.Productos.insertMany([
    { nombre: "Laptop", precio: 1200, cantidad: 50 },
    { nombre: "Teclado", precio: 50, cantidad: 200 },
    { nombre: "Ratón", precio: 25, cantidad: 300 }
    ]);
1. Lee todos los documentos en la colección "Productos" donde la cantidad sea mayor a 100.
    db.Productos.find({ cantidad: { $gt: 100 } });
2. Actualiza el precio de todos los productos cuyo precio sea menor a 5000, incrementándolo en un 10%.
    db.Productos.updateMany(
    { precio: { $lt: 100 } },
    [{ $set: { precio: { $multiply: ["$precio", 1.1] } } }]
    );
3. Elimina todos los productos cuyo nombre sea "Arroz".
    
-----------Comandos de proyeccion y ordenamientos-----------------------------
1.seleccionar campos especificos en el resultado
    db.nombreColeccion.find({}, {campo1 : 1, campo2: 1, _id: 0})

2. Ordenar documento
    db.nombreColeccion.find().sort({ campo: 1}) // Ascendente
    db.nombreColeccion.find().sort({ campo: -1}) // descentente

3.Limitar y saltar documento
    db.nombreColeecion.find().limit(5)
    db.nombreColeccion.find().skip(10) //es unmetodo pra omitir un numero de documento al realizar la consulta
    
-----------comando de agregacion------------------------------------    
1.uso de operadores $match para filtrar documentos
    db.nombreColeccion.aggregate([{ $match: { campo: "valor" }}])

2.uso de operador $group para agrupar documento:
    db.nombreColeccion.aggregate([{ $group: {_id: "$campoAgrupar", total:{$sum: 1 }}}])    
    
3.uso de $project para seleccionar campos
    db.nombreColeccion.aggregate([{ $project: { campo1: 1, campo2: 0 }}])   
    
-------Comandos administracion de BD y colecciones------------    
1. Eliminar una coleccion
    db.nombrecoleccion.drop()

2. eliminar bd
    db.dropDatabase()
    
---------------Comando de indices-------
1.crear un indice en un campo
    db.nombrecoleccion.create.Index({ campo : 1})

2.  db.nombrecoleccion.getIndexes()      

3.  db.nombrecoleccion.dropIndex("nombre del indice")

-----------operadores de Comparacion------------------------------
1. $eq : selecciona documentos donde el valor del campo es igual al valor especifico
    db.nombreColeccion.find({ campo : {$eq: valor }})
2. $ne: selecciona documentos donde el valor de un campo es diferente al valor especificado 
    db.nombreColeccion.find({ campo : { $ne : valor }})
3. $gt: selecciona documentos donde el valor de un campo es mayor que el valor especificado
    db.nombreColeccion.find({ campo : { $gt : valor }})     
4. $lt: seleciona documentos donde el valor de un campo es menor que el valor especificado
    db.nombreColeccion.find({ campo : { $lt : valor }})
5. $lte: selecciona documentos donde el valor de un campo es menor o igual al valor especificado 
    db.nombreColeccion.find({ campo : { $lte : valor }})
6. $in: selecciona documentos donde el valor de un campo esta en una lista de valores.
    db.nombreColeccion.find({ campo : { $in : [valor1, valor2, valor3] }})
7. $nin: seleciona documentos donde el valor de un campo no esta en una lsita de valores
    db.nombreColeccion.find({ campo : { $nin : [valor1, valor2, valor3] }})
8. $gte: selecciona documentos donde el valor de un campo es mayor o igual que
    db.nombreColeccion.find({ campo : { $gte : valor }})

------------------Operadores logico-------------   

*/
