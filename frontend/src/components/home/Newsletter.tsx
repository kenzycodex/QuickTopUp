
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Subscribed!",
        description: "You'll receive updates about new features and promotions.",
      });
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Get the latest updates on new features, promotions, and industry insights delivered to your inbox.
          </p>
        </div>

        <Card className="max-w-md mx-auto border-0 shadow-large">
          <CardContent className="p-6">
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-center"
                  required
                />
                <Button type="submit" className="w-full bg-primary-500 hover:bg-primary-600">
                  Subscribe to Newsletter
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-green-600">
                <Check className="h-6 w-6" />
                <span className="font-medium">Successfully subscribed!</span>
              </div>
            )}
          </CardContent>
        </Card>

        <p className="text-sm text-secondary-500 mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
