# Mi primer servidor Express

Crea una APIRest con Nodejs y Express con los siguientes endpoints:

|ruta|verbo|acción|
|---|---|---|
|/movies|GET|devuelve todas las películas|
|/movies/:id|GET|devuelve una película por su ID|
|/movies|POST|inserta una nueva película|
|/movies/:id|PUT|modifica información de la película|
|/movies/:id|DELETE|borra una película

TIP: _el parámetro :id se recupera con `request.params`

Los datos se encuentran en el fichero movies.js que deberás importar dentro del servidor.