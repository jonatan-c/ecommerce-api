## Api de una tienda ecommerce

### ADMIN

El admin puede crear, editar y eliminar productos.
El admin puede crear, editar y eliminar categorias.

Existen 3 tipos de usuarios:

1. SuperAdmin.

   - Se crea uno solo, el user y password es creado por el desarrollador.
   - Puede ver todos los usuario, solo su nombre, email y role.
   - Puede modificar solamente el role de los usuarios.
   - No tiene otra funcionalidad mas.

2. Admin
   - Puede CRUD productos.
3. User

   - Puede ver los productos de la tienda.

4. No User (Guest)
   - Solo podra ver los productos con una capa de redis
