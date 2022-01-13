## Api de una tienda ecommerce

<details>
<summary>PARA NO DESARROLLADORES  </summary>
<br>
</details>

Existen 3 tipos de usuarios:

1. SuperAdmin.

   - Se crea uno solo, el user y password es creado por el desarrollador.
   - Puede ver todos los datos de usuario, menos la password.
   - Puede modificar solamente el role de los usuarios.
   - Debe contar con middleware que compruebe existencia de token
   - Debe contar con middleware que compruebe que el token tenga role de SuperAdmin.
   - Debe contar con middleware que compruebe que el id ingresado sea
   - No tiene otra funcionalidad mas.

2. Admin
   - Puede CRUD productos.
   - Debe tener middleware que compruebe existencia de token
   - Debe tener middleware que comprueba token de role admin
   - Debe tener middleware que compruebe que el nombre de producto ya esta en base de datos
   - Puede CRUD categorias.
3. User

   - Puede ver los productos de la tienda.
   - Puede ver sus ordenes de compra
   - Puede ver sus direcciones
   - Puede ver sus datos personales
   - Puede modificar su password
   - Puede CRUD dirrecciones
   -

4. No User (Guest)
   - Solo podra ver los productos con una capa de redis

<details>
<summary>Reglas de commit</summary>
<br>
[add] - Agregar un nuevo elemento
<br>
[del] - Eliminar un elemento
<br>
[mod] - Modificar un elemento
<br>
[fix] - Corregir un error
<br>
[doc] - Agregar documentacion
<br>
[test] - Agregar un test o modificarlo
<br>
[change] - Cambiar una caracteristica
<br>
[merge] - Merge de una branch
<br>
[dep] - Dependencias
<br>
[feat] - Nueva caracteristica
<br>
[refactor] - Refactorizar un codigo
<br>
[perf] - Mejora de performance
<br>
[revert] - Revertir un commit
<br>
[style] - Cambiar estilo, formato, nombre de variables
<br>
[ci] - Cambios en la integracion continua
<br>
[chore] - Cambios menores
<br>

</details>

#### Regla de commits
