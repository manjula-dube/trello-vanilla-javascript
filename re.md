# Finn Itunes Albums Project Setup

This instruction file will help you set up and run the project in both development and production environments.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (version 12.x or later)  
- **npm** (Node Package Manager, comes with Node.js)
- **Git** (to clone the repository)

---

## Steps to Run the Project

### 1. Clone the Repository

```bash
git clone http://finn-gmbh-xpjbxg@git.codesubmit.io/finn-gmbh/frontend-engineering-standard-aiysdr
```

### 2. Navigate to the project folder 

```bash
cd frontend-engineering-standard-aiysdr
```

### 3. Install Dependencies

**Run the following command to install all the necessary dependencies:**

```bash
npm install
```

### 3.  Running in Development Environment

**To start the project in development mode, use the following command:**

```bash
npm run dev
```

This will start a development server at [http://localhost:3000/](http://localhost:3000/). You can view the app in the browser, and any changes you make to the code will automatically refresh the page.


### 4.  Running in Production Environment

### 1. Build the Project

To build the project for production, run:

```bash
npm run build
```

This will create an optimized build of the app in the .next directory.

### 2. Start the Project in Production Mode

After building the project, start the server in production mode with:

```bash
npm run start
```

The app will run in production mode at [http://localhost:3000/](http://localhost:3000/).

[See detailed instructions here](./INSTRUCTIONS.md)




