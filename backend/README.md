# QuickTopUp Backend ⚡

Node.js backend API for the QuickTopUp VTU platform.

## 🛠 Tech Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Validation**: Joi
- **Password Hashing**: bcrypt
- **Logging**: Winston
- **Rate Limiting**: express-rate-limit
- **Email**: Nodemailer
- **SMS**: Termii API
- **Payment**: Paystack
- **VTU Provider**: VTPass API

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/      # Route handlers
│   │   ├── auth.js      # Authentication
│   │   ├── user.js      # User management
│   │   ├── wallet.js    # Wallet operations
│   │   ├── vtu.js       # VTU services
│   │   └── admin.js     # Admin operations
│   ├── middleware/       # Custom middleware
│   │   ├── auth.js      # Authentication middleware
│   │   ├── validation.js # Request validation
│   │   └── rateLimiter.js # Rate limiting
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   │   ├── authService.js
│   │   ├── walletService.js
│   │   ├── vtuService.js
│   │   └── paymentService.js
│   ├── utils/           # Utility functions
│   └── config/          # Configuration files
├── prisma/              # Database schema and migrations
├── tests/               # Test files
├── .env.example        # Environment variables template
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to backend directory**
   ```bash
   cd backend
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
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/quicktopup_dev"
   
   # JWT
   JWT_SECRET="your-super-secret-jwt-key"
   JWT_EXPIRES_IN="7d"
   
   # App
   PORT=3000
   NODE_ENV="development"
   
   # External APIs
   PAYSTACK_SECRET_KEY="sk_test_your_paystack_secret"
   VTPASS_API_KEY="your_vtpass_api_key"
   VTPASS_SECRET_KEY="your_vtpass_secret"
   TERMII_API_KEY="your_termii_api_key"
   
   # Email
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT=587
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   ```

4. **Set up database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run migrations
   npx prisma migrate dev
   
   # Seed database (optional)
   npm run seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Server will be running at**
   `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm run start` - Start production server
- `npm run build` - Build for production (if using TypeScript)
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run migrate` - Run database migrations
- `npm run seed` - Seed database with sample data
- `npm run db:reset` - Reset database and reseed

## 🗄️ Database Schema

### Core Tables

**Users**
- id, phone, email, password_hash
- first_name, last_name, is_verified
- created_at, updated_at

**Wallets**
- id, user_id, balance, virtual_account_number
- virtual_account_bank, status
- created_at, updated_at

**Transactions**
- id, user_id, type, amount, status
- reference, external_reference, description
- created_at, updated_at

**Services**
- id, name, type, network, code
- price, commission, status
- created_at, updated_at

### Database Commands
```bash
# View database
npx prisma studio

# Reset database
npx prisma migrate reset

# Deploy migrations to production
npx prisma migrate deploy
```

## 🔗 API Endpoints

### Authentication
```
POST   /api/auth/register     # User registration
POST   /api/auth/login        # User login
POST   /api/auth/verify-otp   # Phone verification
POST   /api/auth/forgot-password # Password reset
POST   /api/auth/reset-password   # Confirm password reset
```

### User Management
```
GET    /api/user/profile      # Get user profile
PUT    /api/user/profile      # Update profile
POST   /api/user/change-password # Change password
```

### Wallet Operations
```
GET    /api/wallet/balance    # Get wallet balance
POST   /api/wallet/fund       # Fund wallet
GET    /api/wallet/transactions # Transaction history
```

### VTU Services
```
GET    /api/vtu/networks      # Get available networks
GET    /api/vtu/data-plans    # Get data plans
POST   /api/vtu/buy-airtime   # Purchase airtime
POST   /api/vtu/buy-data      # Purchase data
GET    /api/vtu/transaction/:id # Get transaction status
```

### Admin Operations
```
GET    /api/admin/users       # List all users
GET    /api/admin/transactions # List all transactions
PUT    /api/admin/user/:id    # Update user
POST   /api/admin/manual-fund # Manual wallet funding
```

## 🔐 Authentication & Security

### JWT Implementation
- Tokens expire in 7 days (configurable)
- Refresh token mechanism for seamless experience
- Token blacklisting for logout security

### Security Features
- Password hashing with bcrypt (10 rounds)
- Rate limiting on sensitive endpoints
- Input validation and sanitization
- CORS configuration
- SQL injection protection
- XSS protection headers

### Middleware Chain
```javascript
// Example protected route
router.get('/profile', 
  rateLimiter,           // Rate limiting
  authenticateToken,     // JWT verification
  validateInput,         // Input validation
  getUserProfile         // Controller
);
```

## 🔌 External Integrations

### Paystack Integration
- Virtual account creation for wallet funding
- Webhook handling for payment confirmations
- Transaction verification and reconciliation

### VTU Provider (VTPass)
- Airtime purchase for all Nigerian networks
- Data bundle purchases
- Transaction status monitoring
- Webhook handling for status updates

### SMS Service (Termii)
- OTP sending for phone verification
- Transaction notifications
- Marketing communications

### Email Service
- Welcome emails for new users
- Transaction confirmations
- Password reset emails
- Admin notifications

## 🧪 Testing

### Running Tests
```bash
npm run test              # Run all tests
npm run test:watch        # Watch mode
npm run test:coverage     # With coverage report
npm run test:integration  # Integration tests only
```

### Test Structure
```
tests/
├── unit/           # Unit tests
├── integration/    # Integration tests
├── fixtures/       # Test data
└── helpers/        # Test utilities
```

### Testing Guidelines
- Test all controller functions
- Mock external API calls
- Test middleware functionality
- Test database operations
- Aim for 80%+ test coverage

## 📊 Logging & Monitoring

### Winston Logging
- Different log levels (error, warn, info, debug)
- File-based logging for production
- Console logging for development
- Request/response logging

### Log Levels
```javascript
logger.error('Error message');   // Critical errors
logger.warn('Warning message');  // Warnings
logger.info('Info message');     // General info
logger.debug('Debug message');   // Debug info
```

## 🚀 Deployment

### Environment Setup
```bash
# Production environment variables
NODE_ENV=production
DATABASE_URL="postgresql://prod_user:password@prod_host:5432/quicktopup_prod"
```

### Database Migration
```bash
# Deploy migrations to production
npx prisma migrate deploy

# Generate Prisma client
npx prisma generate
```

### PM2 Process Management
```bash
# Install PM2 globally
npm install -g pm2

# Start application
pm2 start ecosystem.config.js

# Monitor processes
pm2 monit

# View logs
pm2 logs
```

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `develop`
2. Make your changes following code conventions
3. Write tests for new functionality
4. Run tests and ensure they pass
5. Create pull request with clear description

### Code Style Guidelines
- Use consistent indentation (2 spaces)
- Follow camelCase naming convention
- Add JSDoc comments for functions
- Use async/await instead of promises
- Handle errors properly with try-catch

### Pull Request Checklist
- [ ] Tests pass and coverage is maintained
- [ ] Code follows project conventions
- [ ] API documentation is updated
- [ ] Environment variables are documented
- [ ] Database migrations are included (if applicable)

## 🐛 Common Issues

### Database Issues
- **Connection refused**: Check PostgreSQL service status
- **Migration errors**: Ensure database exists and user has permissions
- **Seed data errors**: Check if tables exist before seeding

### API Issues
- **Port already in use**: Change PORT in .env or kill existing process
- **External API errors**: Check API keys and network connectivity
- **CORS errors**: Verify frontend URL in CORS configuration

### Authentication Issues
- **JWT errors**: Check JWT_SECRET configuration
- **Token expiration**: Implement refresh token mechanism
- **Rate limiting**: Adjust rate limits for development

## 📚 Resources

- [Node.js Documentation](https://nodejs.org/docs)
- [Express.js Guide](https://expressjs.com/guide)
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)

For more help, check the main project [README](../README.md) or create an issue.