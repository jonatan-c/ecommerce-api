## Api de una tienda ecommerce

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
