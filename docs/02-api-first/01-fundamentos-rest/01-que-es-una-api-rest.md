# ¿Qué es una API REST?

Una **API** (Application Programming Interface) es un conjunto de reglas que permite que diferentes aplicaciones puedan comunicarse entre sí. Una **API REST** es un tipo de API basada en el estilo arquitectónico **REST** (Representational State Transfer), ampliamente utilizado en aplicaciones web debido a su simplicidad, flexibilidad y compatibilidad con HTTP.

---

## Características de una API REST

Una API REST utiliza HTTP como protocolo base y se apoya en los siguientes principios:

* **Cliente/Servidor**
  Separamos responsabilidades: el servidor gestiona datos y reglas de negocio, el cliente consume la información.

* **Sin estado (Stateless)**
  Cada petición HTTP es independiente y contiene toda la información necesaria para procesarla.

* **Interfaz uniforme**
  Se utilizan métodos HTTP estándar como GET, POST, PUT y DELETE para realizar operaciones sobre recursos.

* **Recursos como entidades principales**
  Todo en una API REST se modela como un recurso: usuarios, tareas, pedidos, productos, etc.

* **Representación de recursos**
  Los recursos se transfieren normalmente en formato JSON, aunque REST permite otros formatos.

---

## REST no es un estándar

REST **no es un protocolo ni un formato**, sino un estilo de arquitectura. No define cómo debe implementarse una API exactamente, sino que establece un conjunto de restricciones para diseñar sistemas escalables, simples y desacoplados.

Por este motivo, no todas las APIs que dicen ser "REST" cumplen realmente las reglas definidas por este estilo arquitectónico.

---

## Beneficios de REST

* Sencillez y legibilidad
* Escalabilidad y facilidad para distribuir componentes
* Independencia entre cliente y servidor
* Uso de HTTP como protocolo universal
* Amplia adopción y soporte en múltiples lenguajes

---

En el siguiente contenido abordaremos los **principios de diseño REST** que nos permitirán estructurar nuestras APIs correctamente desde su diseño inicial.
