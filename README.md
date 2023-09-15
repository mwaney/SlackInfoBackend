# Person API

This is a simple RESTful API for managing persons. It allows you to perform CRUD operations on person resources.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB installed and running

## Getting Started

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/yourusername/person-api.git
```

2. Navigate to the project directory:

```bash
cd <directory>
```

3. Install dependencies:

```bash
npm install
```

### Configuration

Create a .env file in the project root directory and define the following environment variables:

```bash
PORT=3000              # Port on which the server will run
MONGODB_URI=your-uri   # MongoDB connection URI
```

## Running the API

To start the API server, run:

```bash
npm run dev
```

Your API will be available at **http://localhost:3000** by default (adjust the port if needed).

## API EndPoints

### Create a Person

- **EndPoint: /api**
- **Method**: POST
- **Request Body: **

  ```bash
  {
    "name": "John Doe"
  }
  ```

  - **Response:**

  ```bash
  {
    "_id": "1234567876",
    "name": [
      "John Doe"
    ]
  }
  ```

### Read a Person

- **EndPoint: /api/:user_id**
- **Method**: GET
- **Response:**

```bash
  {
    "_id": "1234567876",
    "name": [
      "John Doe"
    ],
  }
```

### Update a Person

- **EndPoint: /api/:user_id**
- **Method**: PUT
- **Request Body: **

  ```bash
  {
    "name": "Jane Doe"
  }
  ```

  - **Response:**

  ```bash
  {
    "_id": "1234567876",
    "name": [
      "Jane Doe"
    ]
  }
  ```

  ### Delete a Person

- **EndPoint: /api/:user_id**
- **Method**: DELETE
- **Response:**

  ```bash
  {
    "_id": "1234567876",
    "name": [
      "Jane Doe"
    ]"
  }
  ```
