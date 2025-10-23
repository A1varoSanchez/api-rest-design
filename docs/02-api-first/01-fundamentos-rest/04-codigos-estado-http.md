# Códigos de estado HTTP

Los **códigos de estado HTTP** forman parte esencial del diseño de una API REST. A través de ellos, el servidor informa claramente al cliente sobre el resultado de una petición. Un uso correcto de estos códigos mejora la claridad de la API, facilita la depuración y ayuda a construir integraciones más robustas.

---

## Categorías de códigos

| Rango | Tipo               | Significado general                     |
| ----- | ------------------ | --------------------------------------- |
| 1xx   | Informativos       | Poco utilizados                         |
| 2xx   | Éxito              | La petición fue procesada correctamente |
| 3xx   | Redirección        | Se requiere acción adicional            |
| 4xx   | Error del cliente  | La petición es incorrecta               |
| 5xx   | Error del servidor | Fallo al procesar la petición           |

---

## Códigos más utilizados en APIs REST

| Código                        | Significado                   | Caso de uso                      |
| ----------------------------- | ----------------------------- | -------------------------------- |
| **200 OK**                    | Petición exitosa              | GET o PUT correctos              |
| **201 Created**               | Recurso creado                | POST exitoso                     |
| **204 No Content**            | Sin contenido en la respuesta | DELETE o PUT sin body            |
| **400 Bad Request**           | Error en la petición          | Datos incorrectos                |
| **401 Unauthorized**          | No autenticado                | Requiere login/token             |
| **403 Forbidden**             | No permitido                  | Permisos insuficientes           |
| **404 Not Found**             | Recurso no encontrado         | ID inexistente                   |
| **409 Conflict**              | Conflicto de datos            | Duplicados o estado incompatible |
| **500 Internal Server Error** | Error en el servidor          | Excepción no controlada          |

---

## Buenas prácticas

✔ Usar siempre un código coherente con el resultado
✔ No devolver **200 OK** en caso de error
✔ No usar **500 Internal Server Error** para todo
✔ Enviar mensajes de error útiles y estructurados
✔ Documentar los posibles códigos de error de cada endpoint
✔ Combinar códigos con cuerpo de respuesta claro (JSON de error)

---

## Ejemplo de respuesta de error correcta

```
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": "Invalid task data",
  "details": "The field 'title' is required"
}
```

---

En el siguiente contenido abordaremos cómo **diseñar APIs REST orientadas a recursos** utilizando rutas bien estructuradas.