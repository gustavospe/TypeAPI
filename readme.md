# 🛒 API de E-commerce (Em Desenvolvimento)

Esta é uma API em desenvolvimento para um sistema de e-commerce. O objetivo é fornecer funcionalidades básicas para gerenciar produtos, usuários, pedidos e outras operações relacionadas a um ambiente de comércio eletrônico.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – Plataforma de desenvolvimento.
- **Express** – Framework para criação de APIs.
- **TypeORM** – ORM para interação com o banco de dados.
- **MySQL** – Banco de dados relacional.
- **dotenv** – Gerenciamento de variáveis de ambiente.
- **TypeScript** – Linguagem de programação utilizada no projeto.

---

## 📁 Estrutura do Projeto

- `src/data-source.ts`: Configuração da conexão com o banco de dados utilizando TypeORM.
- `src/index.ts`: Ponto de entrada da aplicação, responsável por inicializar o servidor.
- `src/entities/produto.ts`: Entidade Produto, que representa os produtos no banco de dados.

---

## ⚙️ Pré-requisitos

- Node.js (versão 16 ou superior)
- MySQL
- Gerenciador de pacotes (npm ou yarn)

---

## 🛠️ Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/gustavospe/TypeAPI.git
   cd TypeAPI
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   # Configuração do banco de dados
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=nome_do_banco

   # Configuração da API
   API_PORT=3000
   ```

4. Certifique-se de que o banco de dados MySQL está em execução e configurado corretamente.

5. Execute as migrações do banco de dados (se aplicável):
   ```bash
   npm run typeorm migration:run
   ```

6. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

7. Acesse a API:
   - http://localhost:3000

---

## 📡 Endpoints Disponíveis

- `GET /`: Endpoint básico para verificar se o servidor está funcionando.

---

## 📌 Próximos Passos

- [ ] Implementar endpoints para **CRUD de produtos**
- [ ] Adicionar **autenticação e autorização**
- [ ] Criar entidades para **usuários** e **pedidos**
- [ ] Implementar **testes automatizados**
- [ ] Melhorar a **documentação**

---

## 🤝 Contribuição

Este projeto está em desenvolvimento e **contribuições são bem-vindas**!  
Sinta-se à vontade para abrir **issues** ou enviar **pull requests**.

---

## 📄 Licença

Este projeto está sob a licença **MIT**.