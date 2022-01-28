## Api de una tienda ecommerce

Puede ver el trello aqui:

[Trello](https://trello.com/b/sTSXIfQZ/backlog)

Aplicacion Backend para una ecommerce, tengra 3 usuarios, super admin, admin , cliente e invitado.
La base de datos esta hecha en MySQL.

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

   - [ new ] puede ver usuario online, para atencion al cliente

3. Vendedor

- Puede ver todas las ordenes
- Puede ver todos los productos
- Puede ver todos los usuarios

3. User

   - Puede ver los productos de la tienda.
   - Puede ver sus ordenes de compra
   - Puede ver sus direcciones
   - Puede ver sus datos personales
   - Puede modificar su password
   - Puede CRUD dirrecciones
   - Puede CRUD ordenes de compra
   - La orden debe contar con
     - id_order
     - id_user
       - id_product
     - id_paymentMethod
     - id_address
     - id_status
   - El usuario debe esta online
   - El usuario debe poder deslogearse
   - El usuario podra cancelar una orden si el producto aun esta "sin armar"
   - El usuario prodra armar una orden si el producto esta en estado "sin armar"

4. No User (Guest)

   - Solo podra ver los productos con una capa de redis

5. Api alojada en Heroku
