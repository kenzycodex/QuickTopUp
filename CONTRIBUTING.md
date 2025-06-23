# Contributing to QuickTopUp VTU Platform 🤝

Thank you for your interest in contributing to QuickTopUp! This guide will help you get started with contributing to our VTU platform project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Testing Guidelines](#testing-guidelines)

## 🤝 Code of Conduct

### Our Standards
- **Be respectful**: Treat everyone with respect and kindness
- **Be collaborative**: Work together towards common goals
- **Be inclusive**: Welcome contributors from all backgrounds
- **Be constructive**: Provide helpful feedback and suggestions
- **Be professional**: Maintain a professional tone in all interactions

### Unacceptable Behavior
- Harassment, discrimination, or offensive language
- Personal attacks or trolling
- Publishing private information without consent
- Any behavior that creates an unwelcome environment

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL (v14+)
- Git knowledge
- Basic understanding of React and Express.js

### First Time Setup

1. **Fork and Clone**
   ```bash
   # Fork the repository on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/Quicktop-vtu.git
   cd Quicktop-vtu
   ```

2. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/Glor12-web/Quicktop-vtu.git
   ```

3. **Install Dependencies**
   ```bash
   # Backend setup
   cd backend
   npm install
   cp .env.example .env
   # Configure your .env file
   
   # Frontend setup
   cd ../frontend
   npm install
   cp .env.example .env
   # Configure your .env file
   ```

4. **Database Setup**
   ```bash
   cd backend
   npm run migrate
   npm run seed
   ```

5. **Verify Setup**
   ```bash
   # Start backend
   cd backend && npm run dev
   
   # Start frontend (in new terminal)
   cd frontend && npm run dev
   ```

## 🔄 Development Workflow

### Branch Strategy
We use a simple branching strategy:
- `main` - Production-ready code
- `develop` - Integration branch for features
- Feature branches - Individual development work

### Branch Naming
- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Documentation changes
- `refactor/code-improvement` - Code refactoring

### Step-by-Step Workflow

1. **Stay Updated**
   ```bash
   git checkout develop
   git pull upstream develop
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Follow existing patterns
   - Add comments where necessary

4. **Test Your Changes**
   ```bash
   # Frontend
   cd frontend
   npm run lint
   npm run test
   npm run build
   
   # Backend
   cd backend
   npm run lint
   npm run test
   ```

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   # Then create PR on GitHub
   ```

## 📝 Coding Standards

### General Guidelines
- Write self-documenting code with meaningful names
- Keep functions small and focused
- Use TypeScript for type safety
- Follow existing code patterns
- Add comments for complex logic

### Frontend Standards (React + TypeScript)
```typescript
// Component naming: PascalCase
export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  // Hooks at the top
  const [loading, setLoading] = useState(false);
  
  // Event handlers: handleEventName
  const handleSubmit = async (data: FormData) => {
    // Implementation
  };
  
  // Early returns for loading/error states
  if (loading) return <Spinner />;
  
  return (
    <div className="p-4">
      {/* JSX content */}
    </div>
  );
};
```

### Backend Standards (Node.js + Express)
```javascript
// Controller naming: verbNoun
exports.createUser = async (req, res) => {
  try {
    // Validate input
    const { error, value } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ 
        error: error.details[0].message 
      });
    }
    
    // Business logic
    const user = await userService.createUser(value);
    
    // Success response
    res.status(201).json({ 
      success: true, 
      data: { user } 
    });
  } catch (error) {
    logger.error('Create user error:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
};
```

### File and Folder Naming
- **Files**: camelCase for JavaScript/TypeScript files
- **Components**: PascalCase for React components
- **Folders**: lowercase with hyphens for multi-word folders
- **Constants**: UPPER_SNAKE_CASE

## 📋 Commit Guidelines

### Commit Message Format
```
type(scope): description

[optional body]
```

### Commit Types
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code formatting (no logic changes)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

### Examples
```bash
feat(auth): add password reset functionality
fix(wallet): resolve balance calculation error
docs(api): update authentication endpoints
test(vtu): add unit tests for airtime purchase
refactor(components): simplify user profile component
chore(deps): update package dependencies
```

### Commit Best Practices
- Keep commits small and focused
- Write clear, descriptive commit messages
- Commit related changes together
- Don't commit commented-out code
- Test before committing

## 🔍 Pull Request Process

### Before Creating a PR
- [ ] Code follows project standards
- [ ] All tests pass
- [ ] No linting errors
- [ ] Documentation updated (if needed)
- [ ] Self-review completed

### PR Title Format
Use the same format as commit messages:
```
feat(auth): add two-factor authentication
```

### PR Description Template
```markdown
## What Changed
Brief description of what you changed and why.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## How to Test
1. Step one
2. Step two
3. Expected result

## Screenshots (if applicable)
Add screenshots for UI changes.

## Additional Notes
Any additional information or context.
```

### Review Process
1. **Automated Checks**: CI pipeline runs tests and linting
2. **Code Review**: Team members review for quality and standards
3. **Testing**: Manual testing of new features
4. **Approval**: At least 1 approval required for merge
5. **Merge**: Use "Squash and merge" to keep history clean

## 🐛 Issue Reporting

### Bug Reports
When reporting bugs, include:
- **Clear title**: Brief description of the issue
- **Environment**: OS, browser, Node.js version
- **Steps to reproduce**: Numbered list of steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If helpful
- **Additional context**: Error messages, logs, etc.

### Feature Requests
When requesting features, include:
- **Problem**: What problem does this solve?
- **Solution**: Describe your proposed solution
- **Alternatives**: Other approaches you considered
- **Context**: Use cases, examples, or mockups

### Issue Labels
- `bug` - Something isn't working
- `enhancement` - New feature request
- `documentation` - Documentation needs
- `good first issue` - Good for new contributors
- `help wanted` - Extra attention needed

## 🧪 Testing Guidelines

### Frontend Testing
- **Unit Tests**: Test utility functions and hooks
- **Component Tests**: Test component behavior and rendering
- **Integration Tests**: Test user interactions and flows

### Backend Testing
- **Unit Tests**: Test individual functions and services
- **Integration Tests**: Test API endpoints
- **Database Tests**: Test database operations

### Testing Requirements
- New features must include tests
- Bug fixes should include regression tests
- Maintain or improve test coverage
- All tests must pass before merging

### Running Tests
```bash
# Frontend
cd frontend
npm run test              # Run tests
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report

# Backend
cd backend
npm run test              # Run tests
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report
```

## 🎯 What Can You Contribute?

### For Beginners
- Fix typos in documentation
- Add missing error messages
- Improve form validation
- Add unit tests
- Update README files

### For Experienced Developers
- Implement new VTU features
- Optimize database queries
- Add new payment integrations
- Improve security measures
- Build admin dashboard features

### For Designers
- Improve UI components
- Create better user flows
- Design mobile-responsive layouts
- Improve accessibility

## 📞 Getting Help

### Questions or Issues?
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussions
- **Team Contact**: Reach out to project maintainers

### Useful Resources
- [React Documentation](https://reactjs.org/docs)
- [Express.js Guide](https://expressjs.com/guide)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🙏 Recognition

We appreciate all contributions! Contributors will be:
- Listed in our contributors section
- Mentioned in release notes for significant contributions
- Invited to join our team for outstanding contributions

Thank you for helping make QuickTopUp better! 🚀