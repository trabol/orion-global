# 📚 NestJS Books & Authors API

API RESTful construida con **NestJS**, **MongoDB** y **TypeORM**, que permite gestionar libros y autores, incluyendo relaciones de muchos a muchos, validaciones y documentación Swagger.

---

## 🚀 Tecnologías

- **NestJS**: Framework para construir APIs escalables y modulares.
- **TypeORM**: ORM para interacción con MongoDB.
- **MongoDB**: Base de datos NoSQL.
- **Swagger**: Documentación automática de la API.
- **Docker**: Contenedores para el backend y la base de datos.

---

## 📁 Estructura del Proyecto

src/
│
├── books/
│ ├── book.controller.ts
│ ├── book.service.ts
│ ├── entities/book.entity.ts
│ ├── dto/
│ │ ├── create-book.dto.ts
│ │ ├── book-response.dto.ts
│ │ └── book-avg.dto.ts
│ └── interfaces/book.interface.ts
│
├── authors/
│ ├── author.controller.ts
│ ├── author.service.ts
│ ├── entities/author.entity.ts
│ ├── dto/create-author.dto.ts
│ └── interfaces/author.interface.ts
│
├── app.module.ts
└── main.ts
---

## 🔧 Instalación

```bash
# Clonar el repositorio
git clone <URL-del-repo>
cd orion-global

# Instalar dependencias
npm install

# Crear archivo .env (opcional si usas variables de entorno)

# Levantar con Docker
docker-compose up --build
