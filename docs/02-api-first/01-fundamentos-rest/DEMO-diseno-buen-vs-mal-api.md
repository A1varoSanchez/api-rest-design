# DEMO – Diseño: buena API vs mala API 

En esta demostración compararemos dos formas de diseñar APIs usando Node.js y Express:

1. Una **mala API**, típica de principiantes.
2. Una **buena API**, basada en principios REST correctos.

---

## ❌ Ejemplo de mala API (anti-pattern)

Este es un diseño típico cuando no se sigue REST ni buenas prácticas. Fíjate en que la API depende de **acciones** y **verbos en la URL**, lo que la hace difícil de usar y mantener.

```javascript
// server.js (mal diseño de API)
const express = require('express');
const app = express();
app.use(express.json());

app.post('/createTask', (req, res) => {
  res.send('Task created');
});

app.get('/getAllTasks', (req, res) => {
  res.send('List of tasks');
});

app.post('/updateTaskById/:id', (req, res) => {
  res.send(`Task ${req.params.id} updated`);
});

app.get('/removeTask/:id', (req, res) => {
  res.send(`Task ${req.params.id} removed`);
});

app.listen(3000, () => console.log('Bad API running on port 3000'));
```

Problemas graves detectados:

* ❌ Usa verbos en URLs (`createTask`, `updateTaskById`)
* ❌ Usar `GET` para borrar recursos es inseguro (`/removeTask`)
* ❌ `POST` usado para todo (incluso actualizar y borrar)
* ❌ No hay estructura basada en recursos
* ❌ No sigue estándares → documentación imposible de automatizar

---

## ✅ Ejemplo de buena API REST (correcta)

Diseño limpio basado en recursos (`tasks`) con métodos HTTP correctos y URLs consistentes.

```javascript
// server.js (buen diseño de API)
const express = require('express');
const app = express();
app.use(express.json());

app.get('/tasks', (req, res) => {
  res.json([{ id: 1, title: 'Sample task' }]);
});

app.get('/tasks/:id', (req, res) => {
  res.json({ id: req.params.id, title: 'Sample task' });
});

app.post('/tasks', (req, res) => {
  res.status(201).json({ message: 'Task created' });
});

app.put('/tasks/:id', (req, res) => {
  res.json({ message: `Task ${req.params.id} replaced` });
});

app.delete('/tasks/:id', (req, res) => {
  res.status(204).send();
});

app.listen(3000, () => console.log('Good API running on port 3000'));
```

Ventajas claras:
✅ URLs limpias basadas en sustantivos
✅ Métodos HTTP correctamente usados
✅ Semántica estándar
✅ Compatible con OpenAPI / Swagger
✅ Fácil de integrar y documentar

---

## Comparativa rápida

| Aspecto        | Mala API          | Buena API     |
| -------------- | ----------------- | ------------- |
| URLs           | Verbos y acciones | Recursos REST |
| Métodos HTTP   | Mal usados        | Correctos     |
| Seguridad      | Riesgo alto       | Correcta      |
| Documentación  | Manual y confusa  | Automática    |
| Mantenibilidad | Baja              | Alta          |

---

➡️ En la siguiente sección comenzamos con la metodología **API First**, para evitar errores como los del primer ejemplo desde el principio del diseño.