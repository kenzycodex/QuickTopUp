# QuickTopUp VTU Platform 🚀

A simple, secure, and fast Virtual Top-Up (VTU) application for Nigerian users to recharge airtime, buy data bundles, and manage their mobile services efficiently.

## 📱 Features

- **Airtime Top-Up**: Instant recharge for all Nigerian networks (MTN, Glo, Airtel, 9mobile)
- **Data Bundles**: Purchase cheap SME or direct VTU data plans
- **Wallet System**: Secure wallet with virtual account funding via Paystack
- **Transaction History**: Complete record of all transactions
- **Admin Panel**: Comprehensive management system for users and transactions
- **Reseller Support**: Commission-based system for agents and small businesses

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API / Redux Toolkit
- **Routing**: React Router DOM
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT
- **ORM**: Prisma / Sequelize
- **Payment**: Paystack Integration
- **VTU Provider**: VTPass / Clubkonnect

## 📂 Project Structure

```
QuickTopUp/
├── frontend/              # React frontend application
├── backend/               # Node.js backend application
├── docs/                  # Project documentation
├── .env.example          # Environment variables template
├── docker-compose.yml    # Docker setup (optional)
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Glor12-web/QuickTopUp.git
   cd QuickTopUp
   ```

2. **Set up Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Configure your environment variables
   npm run migrate
   npm run seed
   npm run dev
   ```

3. **Set up Frontend**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Configure your environment variables
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📖 Documentation

- [Frontend Setup Guide](./frontend/README.md)
- [Backend Setup Guide](./backend/README.md)
- [API Documentation](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Write tests** for your changes
5. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Commit Convention
We use [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding or modifying tests
- `chore:` for maintenance tasks

## 👥 Team

- **Project Lead**: [Your Name](https://github.com/your-username)
- **Frontend Team**: [Add team members]
- **Backend Team**: [Add team members]

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues & Support

Found a bug or have a feature request? Please check our [Issues](https://github.com/Glor12-web/QuickTopUp/issues) page.

For support, email us at support@quicktopup.com or join our [Discord](https://discord.gg/your-invite).

## 🔗 Links

- [Live Demo](https://quicktopup-demo.com) (Coming Soon)
- [API Documentation](https://api.quicktopup.com/docs) (Coming Soon)
- [User Guide](./docs/user-guide.md)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

Made with ❤️ for the Nigerian tech community