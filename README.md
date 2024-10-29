## Test task


### Deploy

Project has been deployed on the service [render.com](https://render.com/?_gl=1*1t82lce*_gcl_au*MTA3ODMwNzcyMi4xNzMwMTg3Mjc5*_ga*ODQzNDE1MTEyLjE3MzAxODY2MzA.*_ga_QK9L9QJC5N*MTczMDE5Mjc4My4xMS4wLjE3MzAxOTI3ODMuNjAuMC4w)

[Link](https://luna-edge-testtask-static.onrender.com/#/sign-up) to deployed test task

### How to run

To run this project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   $ git clone <repository-url>
   ```

2. **Install dependencies:**
   ```bash
   $ npm install
   ```

  **After this you need to create** `.env` **file with environment variables**

  When you create a file you need to add `VITE_PORT` variable which specifies which port will be used to run development server

  Example:
  ```
  VITE_PORT=3000
  ```

3. **Run the project:**
   ```bash
   $ npm run dev
   ```

### Technologies Stack
This project is built using the following technologies:
- TypeScript
- React
- Reac Router Dom
- Vite
- Rsuite (used for creating timeline component)
- react-alice-carousel (used for creating carousel in left side of window)

### Project structure

Here’s an overview of the project structure and the purpose of each folder:
- `assets` - assets: images and css.
- `libs` - Includes utility functions, helpers, enums, and other shared logic or constants.
  - `components` - reusable UI components.
  - `constants`
  - `helpers`
- `pages` - each subfolder represents a specific page of the application.
