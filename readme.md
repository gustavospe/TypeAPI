# 🛒 E-commerce API (In Development)

This is an API currently in development for an e-commerce system. The goal is to provide basic functionalities to manage products, users, orders, and other operations related to an online commerce environment.

---

## 🚀 Technologies Used

- **Node.js** – Development platform.
- **Express** – Framework for creating APIs.
- **TypeORM** – ORM for database interaction.
- **MySQL** – Relational database.
- **dotenv** – Environment variable management.
- **TypeScript** – Programming language used in the project.

---

## 📁 Project Structure

- `src/data-source.ts`: Database connection configuration using TypeORM.
- `src/index.ts`: Application entry point, responsible for starting the server.
- `src/entities/produto.ts`: Product entity representing the products in the database.

---

## ⚙️ Prerequisites

- Node.js (version 16 or higher)
- MySQL
- Package manager (npm or yarn)

---

## 🛠️ Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/gustavospe/TypeAPI.git
   cd TypeAPI
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```env
   # Database configuration
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=database_name

   # API configuration
   API_PORT=3000
   ```

4. Make sure the MySQL database is running and properly configured.

5. Run the database migrations (if applicable):
   ```bash
   npm run typeorm migration:run
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Access the API:
   - http://localhost:3000

---

## 📡 Available Endpoints

- `GET /`: Basic endpoint to check if the server is running.

---

## 📌 Next Steps

- [ ] Implement **CRUD endpoints for products**
- [ ] Add **authentication and authorization**
- [ ] Create entities for **users** and **orders**
- [ ] Implement **automated tests**
- [ ] Improve the **documentation**

---

## 🤝 Contribution

This project is in development and **contributions are welcome**!  
Feel free to open **issues** or submit **pull requests**.

---

## 📄 License

This project is licensed under the **MIT** license.