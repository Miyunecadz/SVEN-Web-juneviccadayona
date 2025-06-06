# SVEN-Web-juneviccadayona

Welcome to the **SVEN-Web-juneviccadayona** repository!

This README will guide you through the setup process to get the development environment up and running quickly.

## Repository

- **GitHub:** [Miyunecadz/SVEN-Web-juneviccadayona](https://github.com/Miyunecadz/SVEN-Web-juneviccadayona)

## Tech Stack

- Frontend: Next.js
- Backend: Laravel
- Database: Mysql
- Containerization: Docker
- Orchestration: Docker Compose
- Build/Task Runner: Make

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Make](https://www.gnu.org/software/make/manual/make.html)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Miyunecadz/SVEN-Web-juneviccadayona.git
   cd SVEN-Web-juneviccadayona
   ```

2. **Run the Development Environment**

   To start the development environment, simply run:

   ```bash
   make up-dev
   ```

   This command will handle all necessary setup steps for you, such as installing dependencies, starting services, or spinning up containers.

## Accessing the Application

- **Frontend:**  
  Visit [http://localhost:3000](http://localhost:3000)  

- **Backend API:**  
  Visit [http://localhost:8000](http://localhost:8000)  

- **API Documentation (Swagger):**  
  Visit [http://localhost:8000/api/documentation](http://localhost:8000/api/documentation)

- **Database (MySQL):**  
  - Default connection string:  
    ```
    mysql://root:secret@localhost:3306/database_name
    ```
  - You can connect using a database client like [MySQL Workbench](https://www.mysql.com/products/workbench/), [DBeaver](https://dbeaver.io/), or similar.


## Notes

- If you encounter issues, ensure all prerequisites are installed and running.
- For custom configuration (like environment variables), check for an example file (e.g., `.env.example`) and copy it to `.env` if necessary.
- For more details on available commands, you can inspect the `Makefile`.

---

**Happy coding!**