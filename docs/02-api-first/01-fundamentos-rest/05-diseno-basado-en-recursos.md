# Diseño basado en recursos

En una API REST bien diseñada, el enfoque principal es **modelar los datos como recursos** y exponerlos a través de **URLs simples y coherentes**. En lugar de pensar en acciones o funciones, REST se basa en **sustantivos** que representan entidades del dominio del negocio.

---

## ¿Qué es un recurso?

Un recurso representa una entidad lógica del sistema:

* Usuario → `/users`
* Tarea → `/tasks`
* Producto → `/products`
* Pedido → `/orders`

Cada recurso puede tener subrecursos relacionados:

* Tareas de un usuario → `/users/{id}/tasks`
* Comentarios de una tarea → `/tasks/{id}/comments`

---

## Buen diseño de rutas REST

✔ Usar sustantivos en plural
✔ Evitar verbos en las URLs
✔ Mantener una estructura jerárquica simple
✔ Usar identificadores en el path para elementos concretos
✔ Usar query params para filtros o paginación

---

### Ejemplos correctos

| Acción                    | URL                  | Comentario    |
| ------------------------- | -------------------- | ------------- |
| Obtener todas las tareas  | `/tasks`             | Colección     |
| Obtener una tarea         | `/tasks/10`          | Recurso único |
| Listar tareas por usuario | `/users/5/tasks`     | Relación      |
| Buscar tareas             | `/tasks?status=done` | Filtros       |

---

### Ejemplos incorrectos

| URL incorrecta      | Problema                        |
| ------------------- | ------------------------------- |
| `/getAllTasks`      | No usar verbos                  |
| `/createTask`       | La acción va en el método HTTP  |
| `/deleteUserById/7` | La semántica ya la tiene DELETE |
| `/tasks/delete/10`  | No usar rutas de acción         |

---

## Orden recomendado de parámetros

Expresar relaciones de forma consistente ayuda a mantener claridad:

Correcto:

```
/users/12/tasks
/tasks/55/comments
```

Incorrecto:

```
/tasks/comments/55
/tasks/forUser/12
```

---

A continuación veremos **buenas prácticas REST adicionales** que ayudan a estandarizar aún más el diseño de APIs.