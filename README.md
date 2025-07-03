# APEX

A modern, scalable, and high-performance web application boilerplate built with the latest web technologies. This project serves as a starting point for building feature-rich applications with Next.js 15.

## Key Features

- **Next.js 15:** Leverages the latest features of Next.js, including the App Router for robust routing and server components.
- **React 19:** Built on the newest version of React for a declarative and efficient UI.
- **TypeScript:** Full TypeScript support for type safety and improved developer experience.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Radix UI:** Provides high-quality, accessible UI components.
- **Lucide React:** A beautiful and consistent icon set.
- **ESLint:** Integrated for code quality and consistency.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 15
- **UI Library:** [React](https://react.dev/) 19
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linting:** [ESLint](https://eslint.org/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DavidMANZI-093/apex.git
   ```

2. Navigate to the project directory:

   ```bash
   cd apex
   ```

3. Switch to the `main` or `agard` branch (`main` for APEX, `agard` for Echelon Landworks):

   ```bash
   git checkout agard
   ```

4. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode with Turbopack.
- `npm run build`: Builds the app for production to the `.next` folder.
- `npm run start`: Starts a Next.js production server.
- `npm run lint`: Lints the source code using ESLint.

## Project Structure

The project follows a standard Next.js App Router structure:

```text
apex/
├── .next/
├── node_modules/
├── public/
│   └── ... # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ... # Reusable components
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

- `src/app/`: Contains all the routes, pages, and layouts for the application.
- `src/components/`: Contains all the reusable UI components.
- `public/`: Contains static files like images and fonts.

## Author

- **MANZI David**
- **GitHub:** [@DavidMANZI-093](https://github.com/DavidMANZI-093)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
