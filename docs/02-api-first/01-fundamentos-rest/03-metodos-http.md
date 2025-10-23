# Métodos HTTP en APIs REST

En REST los **métodos HTTP** definen la acción que se desea realizar sobre un recurso. No se trata solo de “funciones técnicas”, sino de un **lenguaje semántico** universal que facilita que las APIs sean fáciles de entender e integrar.

Los métodos HTTP más utilizados en diseño REST son:

---

## Métodos principales

| Método | Descripción                      | Uso típico                       |
| ------ | -------------------------------- | -------------------------------- |
| GET    | Obtiene recursos                 | Consultar datos                  |
| POST   | Crea un recurso nuevo            | Crear usuario, tarea, pedido…    |
| PUT    | Reemplaza un recurso completo    | Actualizaciones totales          |
| PATCH  | Modifica parcialmente un recurso | Actualizaciones parciales        |
| DELETE | Elimina un recurso               | Borrar usuario, tarea, producto… |

---

## Ejemplos sobre un mismo recurso (tasks)

| Acción                        | URL         | Método |
| ----------------------------- | ----------- | ------ |
| Obtener todas las tareas      | `/tasks`    | GET    |
| Obtener una tarea por id      | `/tasks/15` | GET    |
| Crear nueva tarea             | `/tasks`    | POST   |
| Actualizar una tarea completa | `/tasks/15` | PUT    |
| Modificar parte de una tarea  | `/tasks/15` | PATCH  |
| Eliminar una tarea            | `/tasks/15` | DELETE |

---

## Métodos idempotentes

Algunos métodos en HTTP deben ser **idempotentes**, es decir, puedes repetirlos varias veces sin cambiar el resultado final:

| Método | Idempotente    | Motivo                                 |
| ------ | -------------- | -------------------------------------- |
| GET    | Sí             | Obtener datos no altera recursos       |
| PUT    | Sí             | Reemplaza siempre el mismo recurso     |
| DELETE | Sí             | El recurso termina eliminado igual     |
| POST   | No             | Cada POST puede crear elementos nuevos |
| PATCH  | No garantizado | Depende de la implementación           |

---

## Reglas importantes de uso

✔ No usar POST para actualizar → usar PUT o PATCH
✔ No usar GET para eliminar → usar DELETE
✔ No usar PUT si se va a modificar solo una parte → usar PATCH
✔ No crear endpoints con nombres de acción como `/createTask` o `/deleteUser`
✔ Los métodos ya indican la acción → **la lógica está en el verbo, no en la URL**

---

En el siguiente contenido hablaremos de **códigos de estado HTTP**, otra parte fundamental del lenguaje REST.