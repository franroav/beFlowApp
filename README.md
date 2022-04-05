# beFlowApp

EndPoints:
Payments:
GET /api/payments -> Retorna toda la lista con todos los pagos en un array.
GET /api/payments/:id -> Retorna objeto con un pago
PUT /api/payment/:email/:shop -> Actuliza un pagos.
POST /api/payments -> Añade un pagos.
DELETE /api/payment/remove-credits -> Elimina un pago.

Test con Mocha y Chai
Luego de correr la aplicacion con 'npm start' abrir otra terminal y ejecutar el comando 'npm test'.
