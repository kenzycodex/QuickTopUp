
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="bg-primary-500 text-white px-4 py-2 rounded-lg font-bold text-2xl mx-auto inline-block mb-8">
            QuickTopUp
          </div>
          
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-16 w-16 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Page Not Found</h1>
          <p className="text-gray-600 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/" className="flex-1">
              <Button className="w-full bg-primary-500 hover:bg-primary-600">
                <Home className="h-4 w-4 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="flex-1"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500 mb-3">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-primary-500 hover:text-primary-600">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="ghost" size="sm" className="text-primary-500 hover:text-primary-600">
                  Register
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" size="sm" className="text-primary-500 hover:text-primary-600">
                  About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" size="sm" className="text-primary-500 hover:text-primary-600">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? <Link to="/contact" className="text-primary-500 hover:text-primary-600">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
