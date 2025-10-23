# Principios de REST

El estilo arquitectónico REST está definido por un conjunto de **restricciones** que permiten construir sistemas distribuidos escalables, mantenibles y fáciles de evolucionar. Estos principios son la base para diseñar APIs que sigan buenas prácticas de arquitectura web.

---

## Principales restricciones REST

A continuación se describen las restricciones fundamentales:

---

### 1. Arquitectura Cliente-Servidor

REST establece una separación clara entre:

* **Cliente**: solicita recursos y muestra información.
* **Servidor**: gestiona datos y lógica de negocio.

Ventaja: facilita la escalabilidad y evolución de ambos lados de forma independiente.

---

### 2. Sin estado (Stateless)

Cada petición enviada al servidor debe contener toda la información necesaria para ser procesada. El servidor **no guarda el estado** de la conversación entre peticiones.

Ventajas:

* Mayor escalabilidad
* Implementación más simple
* Reducción de dependencias entre cliente y servidor

---

### 3. Cacheable

Las respuestas deben indicar si son **almacenables en caché** para mejorar el rendimiento. El uso adecuado de cabeceras HTTP como `Cache-Control` o `ETag` permite optimizar tiempos de respuesta y reducir carga en el servidor.

---

### 4. Interface uniforme

Es una de las características más importantes y define cómo interactuar con la API de forma predecible usando operaciones estándar sobre recursos.

Se implementa a través de:

* Identificación de recursos mediante URLs
* Uso de métodos HTTP
* Uso de representaciones como JSON o XML
* Mensajes autodescriptivos

---

### 5. Sistema en capas (Layered System)

La arquitectura puede componerse de **capas de servidores** (proxy, balanceadores, gateways, microservicios) sin que el cliente necesite conocer su complejidad interna.

Ventaja: añade flexibilidad, seguridad y permite escalar de forma eficiente.

---

### 6. Código bajo demanda (opcional)

En casos específicos, el servidor puede enviar código ejecutable al cliente (por ejemplo, scripts JavaScript). Es una restricción opcional y poco utilizada en APIs tradicionales.

---

## ¿Qué ocurre si no cumplimos estas restricciones?

Una API que viola varias de estas reglas comienza a perder propiedades REST y se conoce coloquialmente como **"RESTish"** o **"REST like"**, pero no será una API REST bien diseñada.

---

En el próximo tema profundizaremos en cómo aplicar estos principios mediante **métodos HTTP y diseño orientado a recursos**.