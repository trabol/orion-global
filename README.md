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

```bash
src/
│
├── books/
│   ├── book.controller.ts
│   ├── book.service.ts
│   ├── entities/
│   │   └── book.entity.ts
│   ├── dto/
│   │   ├── create-book.dto.ts
│   │   ├── book-response.dto.ts
│   │   └── book-avg.dto.ts
│   └── interfaces/
│       └── book.interface.ts
│
├── authors/
│   ├── author.controller.ts
│   ├── author.service.ts
│   ├── entities/
│   │   └── author.entity.ts
│   ├── dto/
│   │   └── create-author.dto.ts
│   └── interfaces/
│       └── author.interface.ts
│
├── app.module.ts
└── main.ts

```

# Clonar el repositorio
git clone <URL-del-repo>
cd orion-global

# Instalar dependencias (usa --force en caso de conflictos)
npm install --force

# Copia el archivo .env.example y renómbralo a .env:
cp .env.example .env
# Edita el contenido según tu entorno:
```bash
MONGO_URL=mongodb://localhost:27017/orion-global
PORT=8000
NODE_ENV=development
```

▶️ Ejecución
🔌 Modo local
npm run start:dev

| Método | Ruta       | Descripción                             |
| ------ | ---------- | --------------------------------------- |
| POST   | `/authors` | Crear un nuevo autor                    |
| GET    | `/authors` | Listar autores con sus libros asociados |


| Método | Ruta                   | Descripción                                |
| ------ | ---------------------- | ------------------------------------------ |
| POST   | `/books`               | Crear un nuevo libro con autores           |
| GET    | `/books`               | Listar todos los libros con sus autores    |
| GET    | `/books/average-pages` | Promedio de páginas por capítulo por libro |

📝 Swagger

Puedes acceder a la documentación de Swagger una vez levantado el servidor en:

http://localhost:8000/api

```bash
POST /books
{
  "title": "El Principito",
  "chapters": 27,
  "pages": 100,
  "authorIds": ["64f07ac7d5b54c1e0ce3eb20"]
}
```
