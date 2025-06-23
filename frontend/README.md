# QuickTopUp Frontend 🎨

React-based frontend application for the QuickTopUp VTU platform.

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/        # Reusable components
│   │   ├── common/       # Common UI components
│   │   ├── forms/        # Form components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # Basic UI elements
│   ├── pages/            # Page components
│   │   ├── auth/         # Authentication pages
│   │   ├── dashboard/    # Dashboard pages
│   │   ├── wallet/       # Wallet pages
│   │   └── services/     # VTU service pages
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API service functions
│   ├── store/            # State management
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript definitions
│   └── assets/           # Static assets
├── public/               # Public assets
├── .env.example         # Environment variables template
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Configure the following variables:
   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_APP_NAME=QuickTopUp
   VITE_APP_VERSION=1.0.0
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## 🎨 Styling Guidelines

### Tailwind CSS
We use Tailwind CSS for styling. Follow these conventions:

- Use utility classes for styling
- Create custom components for repeated patterns
- Follow mobile-first responsive design
- Use consistent spacing scale (4, 8, 12, 16, 24, 32, etc.)

### Color Palette
```css
Primary: #1D4ED8 (blue-700)
Secondary: #059669 (emerald-600)
Success: #10B981 (emerald-500)
Warning: #F59E0B (amber-500)
Error: #EF4444 (red-500)
```

### Component Structure
```typescript
// Example component structure
interface ComponentProps {
  title: string;
  isLoading?: boolean;
}

export const Component: React.FC<ComponentProps> = ({ 
  title, 
  isLoading = false 
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      {isLoading ? <Spinner /> : <h2>{title}</h2>}
    </div>
  );
};
```

## 🔗 API Integration

### Service Layer
All API calls are handled through service functions:

```typescript
// services/apiService.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
};
```

### Error Handling
Use consistent error handling across components:
- Display user-friendly error messages
- Log detailed errors for debugging
- Implement retry mechanisms for failed requests

## 🧪 Testing

### Running Tests
```bash
npm run test        # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

### Testing Guidelines
- Write unit tests for utility functions
- Write integration tests for components
- Mock API calls in tests
- Aim for 80%+ test coverage

## 📱 Responsive Design

### Breakpoints
- Mobile: 320px - 768px (primary focus)
- Tablet: 768px - 1024px
- Desktop: 1024px+

### Best Practices
- Design mobile-first
- Use Tailwind's responsive prefixes
- Test on various device sizes
- Ensure touch-friendly interface elements

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Implement proper error boundaries

### Component Guidelines
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop validation
- Follow consistent naming conventions

### State Management
- Use local state for component-specific data
- Use Context API for shared application state
- Implement proper data flow patterns

## 🚀 Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy to hosting service**
   The `dist` folder contains the production build ready for deployment.

## 🤝 Contributing

1. Create a feature branch for your changes
2. Follow the existing code style and conventions
3. Write tests for new functionality
4. Update documentation as needed
5. Create a pull request with clear description

### Pull Request Checklist
- [ ] Code follows project conventions
- [ ] Tests pass and coverage is maintained
- [ ] Documentation is updated
- [ ] No console errors or warnings
- [ ] Responsive design is maintained

## 📚 Resources

- [React Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide)

## 🐛 Common Issues

### Development Issues
- **Port already in use**: Change port in vite.config.ts
- **API connection errors**: Check backend server status
- **Hot reload not working**: Restart development server

### Build Issues
- **TypeScript errors**: Run `npm run type-check`
- **Missing dependencies**: Run `npm install`
- **Environment variables**: Check .env configuration

For more help, check the main project [README](../README.md) or create an issue.