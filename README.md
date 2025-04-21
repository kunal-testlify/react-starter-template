# React Starter Template

A modern, feature-rich starter template for React applications built with Vite. This template provides a solid foundation for building scalable React applications with best practices in mind.

## Features

- **Vite** - Lightning fast development server and build tool
- **React 19** - The latest version of React with improved performance
- **Component Structure** - Organized component architecture
- **Testing Setup** - Ready-to-use testing configuration with Vitest and React Testing Library
- **ESLint** - Code quality tools already configured
- **Prettier** - Code formatting for consistent style
- **Responsive Design** - Mobile-first CSS with modern best practices
- **React Router** - For handling navigation in your application
- **Axios** - For making API requests
- **CSS Variables** - For consistent theming and dark/light mode support

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-starter-template.git my-project
   cd my-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit: `http://localhost:12000`

## Project Structure

```
react-starter-template/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   ├── contexts/        # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global CSS
│   ├── main.jsx         # Application entry point
│   └── setupTests.js    # Test configuration
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── vitest.config.js     # Vitest configuration
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## Adding New Features

### Components

Create new components in the `src/components` directory. Each component should have its own directory with the following structure:

```
ComponentName/
├── ComponentName.jsx    # Component code
├── ComponentName.css    # Component styles
├── ComponentName.test.jsx # Component tests
└── index.js             # Export file for cleaner imports
```

### Pages

Pages are top-level components that represent routes in your application. Create new pages in the `src/pages` directory with a similar structure to components.

### Hooks

Custom hooks should be placed in the `src/hooks` directory. Each hook should be in its own file and follow the naming convention `useHookName.js`.

### Utilities

Helper functions and utilities should be organized in the `src/utils` directory, grouped by functionality.

## Best Practices

- Keep components small and focused on a single responsibility
- Use CSS variables for theming and consistent styling
- Write tests for all components and utilities
- Use prop-types for component props validation
- Follow the ESLint and Prettier configurations for consistent code style

## Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)

## License

MIT