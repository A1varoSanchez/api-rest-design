# Buenas prácticas en diseño REST

El diseño de APIs REST no solo consiste en exponer recursos; también debe seguir un conjunto de buenas prácticas para garantizar que la API sea **clara, consistente, fácil de consumir y mantenible a largo plazo**. Estas buenas prácticas facilitan el trabajo tanto de equipos de desarrollo como de integradores externos.

---

## Principios clave de buenas prácticas

### 1. Nombres consistentes y significativos

Usar sustantivos en plural para los recursos:

* Correcto: `/tasks`, `/users`, `/orders`
* Incorrecto: `/taskList`, `/doTask`, `/manageUsers`

---

### 2. Uso correcto de métodos HTTP

Evitar rutas con verbos o acciones:

* Correcto: `DELETE /users/10`
* Incorrecto: `POST /deleteUser/10`

---

### 3. Estructura de URLs coherente

Mantener jerarquías simples:

* Correcto: `/users/7/tasks`
* Incorrecto: `/tasks/user/7`

---

### 4. Filtros y búsqueda con query params

Evitar diseñar rutas innecesarias:

* Correcto: `/tasks?status=done&priority=high`
* Incorrecto: `/tasks/done/high`

---

### 5. Paginación y limitación de resultados

Evitar devolver respuestas demasiado grandes:

```
GET /tasks?page=2&limit=10
GET /users?offset=20&size=10
```

---

### 6. Estructura clara de errores

Respuestas con mensajes útiles y estándar:

```
{
  "error": "Validation failed",
  "details": [
    "The 'title' field is required"
  ]
}
```

---

### 7. Versionado de la API

Evitar romper integraciones existentes:

* Recomendado: `/api/v1/tasks`
* Evitar: cambios sin versionado

---

### 8. Documentación actualizada

La documentación debe ser parte viva de la API. Herramientas como **OpenAPI + Swagger UI** facilitan su mantenimiento.

---

## Resumen

| Buen práctica                       | Beneficio                           |
| ----------------------------------- | ----------------------------------- |
| URLs claras y orientadas a recursos | Facilita usabilidad                 |
| Métodos HTTP bien aplicados         | Estándares consistentes             |
| Código de estado correcto           | Mejor comunicación cliente-servidor |
| Estructura de errores               | Diagnóstico rápido                  |
| Versionado API                      | Evolución segura                    |
| Documentación                       | Integración ágil                    |

---

En el siguiente archivo entraremos en la parte práctica introduciendo **API First** como metodología inicial para diseñar APIs correctamente.