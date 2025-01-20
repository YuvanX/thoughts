# Thoughts - Blogging Website

**Thoughts** is a blogging platform where users can read blogs, write their own, and become writers to publish blogs that others can read. It provides a simple, clean interface to express ideas and share thoughts with the world.

## Features

- **Read Blogs**: Users can browse and read blogs published by others.
- **Write and Publish Blogs**: Users can become writers and create their own blogs for others to read.
- **User Blogs Page**: A dedicated page displaying all the blogs related to the signed-in user.
- **Settings Page**: Basic settings for users to modify their profile or account preferences.

## Tech Stack

### Backend
- **Postgres**: For database management.
- **Prisma**: ORM for easy database interaction.
- **CloudFlare Serverless Backend**: Serverless architecture using CloudFlare workers.
- **Hono.js**: Lightweight and fast backend framework for writing serverless functions.

### Frontend
- **React.js**: JavaScript library for building the user interface.
- **Shadcn**: Component library used to design the interface.
- **Tailwind CSS**: Utility-first CSS framework for custom styling.
- **Aceternity UI**: Custom UI framework for additional components and styling.

## Setup & Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (v16 or higher)
- PostgreSQL database
- Prisma CLI

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/thoughts.git
   cd thoughts
   ```
2. Install the backend dependencies:
    ```bash
    npm install
    ```
3. Configure the environment variables in .env for the Postgres connection:
    ```bash
    DATABASE_URL=your_database_url
    ```
4. Run Prisma migrations:
    ```bash
    npx prisma migrate dev
    ```
5. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install the frontend dependencies:
    ```bash
    npm install
    ```
3.  Run the React app:
    ```bash
    npm run dev
    ```
The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
    ```bash
    git commit -m 'Add new feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.