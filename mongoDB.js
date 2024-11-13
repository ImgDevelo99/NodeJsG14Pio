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
1. $and : combina varias condiciones,donde deben de ser verdaderas para seleeccionar el documento
    db.nombrecoleccion.find({ $and: [{campo1: valor1}, {campo2 : valor2 }]})
2. $or :  combina varias condiciones, al menos una debe ser verdadera para seleccionar un documento
    db.nombreColeccion.find({ $or [{ campo1 : valor1 }, {campo2 : valor2 }]})
3. $not : seleccion documentos que no cumplan con la condicion especifica.
    db.nombrecoleccion.find({ campo : { $not : { $gte : valor } } } )
4. $nor : selecciona documentos donde ninguna de las condiciones es verdadera
    db.nombrecoleccion.find({ $nor: [{campo1: valor1}, {campo2 : valor2}]})

-------------- Operadores de elementos.-------------
 operadores que permiten verificar la existencia de un campo y su tipo
1.$exists: seleciona documentos si un campo existe o no
    db.nombrecoleccion.find({campo : { $exists : true } })
2.$type: selecciona documentos si el valor de un campo es de un tipo especifico
    db.nombrecoleccion.find({ campo : { $type: "string" } })

------------- operadores de array------------------
1. $all : selecciona documentos donde un campo de tipo array contiene todos los elementos especificos.
    db.nombrecoleccion.find({ campoArray : { $all : [valor1, valor2 ] } })
2. $elemMatch : selecciona documentos si al menos un elemento del array cumple con todas las condiciones especificas
    db.nombrecoleccion.find({ campoArray: { $elemMatch : {  campoInterno : valor } } })
3. $size :selecciona documentos donde un campo array tiene un numero especifico de elemento.
    db.nombrecoleccion.find({ campoArray : { $size : 3 } })

----------consultas avanzadas paipline de agregacion-------------------------------
se utiliza para hacer consultas avanzadas nos permite trasnformar y analizaar los datos, 
funciona mediante etapas o fases(pipes) podemos aplicar filtros, agrupamientos, calculos
$match, $group, $sort.

db.ventas.insertMany([
  {
    producto: "Laptop",
    cantidad: 10,
    precio_unitario: 1500,
    fecha_venta: ISODate("2023-09-01T00:00:00Z"),
    categoria: "Electrónica"
  },

    {
    producto: "Silla",
    cantidad: 20,
    precio_unitario: 100,
    fecha_venta: ISODate("2023-08-30T00:00:00Z"),
    categoria: "Muebles"
  },

  ISOdate : es un tipo de dato en mongodb  para representar fecha en formato universal UTC
  Z: que el tiempo esta en zona horaria UTC

1. obtener el total de ventas ( suma de cantidad * precio_unitario) para cada categoria de productos, pero solo las ventas
realizadas despues del 1 de septiembre del 2023.

*/
db.ventas.aggregate([
    {$match: { fecha_venta: { $gte: ISODate("2023-09-01T00:00:00Z") } } },
    {$group: { _id: "$categoria", totalVentas: {$sum: { $multiply: [ "$cantidad", "$precio_unitario"] } } } },
    {$sort: { totalVentas: -1}}
]);

//obtener la cantidad total de productos vendidos por cada categoria y calcular el promedio de precio unitario en cada una de ellas.
db.ventas.aggregate([
    {
        $group:{
            _id : "$categoria",
            totalCantidadVendida:{$sum: "$cantidad"},
            promedioPrecioUnitario: {$avg: "$precio_unitario"}
        }
    },
    {$sort: { totalCantidadVendida: -1}}
]);

//obtener la fecha de la venta mas reciente y las mas antigua para cada categoria,?
db.ventas.aggregate([
    {
    $group:{
        _id: "$categoria",
        primeraVenta:{$min: "$fecha_venta"},
        ultimaVenta:{$max: "$fecha_venta"},
    }
    },
    { $sort: {_id: 1 }}
]);

//obtener el ingreso total mensual 
//y el numero de productos vendidos por cada categoria en cada mes, 
//tambien calcular el promedio de los productos vendidos por mes y categoria.

db.ventas.aggregate([
    {
        $group:{
            _id:{
                categoria: "$categoria",
                mes: {$month: "$fecha_venta"},
                anio: {$year: "$fecha_venta"},
            },
            totalIngreso: {$sum: {$multiply: ["$cantidad", "$precio_unitario"]} },
            totalCantidadVendida: { $sum: "$cantidad"},
            promedioPrecioUnitario: {$avg: "$precio_unitario"}
        }
    },
    {$sort: {"_id.anio": 1, "_id.mes": 1, "_id.categoria": 1}}
]);

//-----------------------INDICES MONGODB ----------------------------------------------
/* Son estructuras de datos que mejoran la velocidad de las consultas en una coleccion, se evita que mongoDB
tenga que recorrer todos los documentos para encontrar coicidencias. Los indices se crean en campos
especificos de una coleccion y permite optimizar las busquedas.

1. Indice de campo unico = se crea en un solo campo de la coleccion
2. Indice compuesto =  un indice compuesto incluye varios campos y es util para consultas que dependan de varias condiciones
3. Indice de texto = se utilizan para realizar busquedas de texto completo en campos de tipo cadena.
4. Indice de geolocalizacion = facilita busquedas relacionadas con la ubicacion.
5. Indice parcial = crea un indice en un subconjunto  de documento que cumplan ciertos criterios
    ejemplo: indexar solo los documentos con stock mayor a 0.
6. Indice TTL (Time to live) = elimina automaticamente despues de un tiempo en especifico. util para colecciones con datos temporales    
 */