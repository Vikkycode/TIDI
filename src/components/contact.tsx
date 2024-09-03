'use client';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast} from '@/hooks/use-toast';

import { useState } from 'react';

const metadata: Metadata = {
  title: 'Contact Us - Tech Inclusion Deaf Initiative',
  description: 'Get in touch with us.',
};

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { toast } = useToast(); // Get the toast function
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
  
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });
  
        if (response.ok) {
          // Success toast
          toast({
            title: 'Message Sent!',
            description: 'Thank you for your message. We will be in touch soon.',
          });
  
          setName('');
          setEmail('');
          setMessage('');
        } else {
          // Error toast
          toast({
            variant: 'destructive',
            title: 'Error Sending Message',
            description: 'There was a problem sending your message. Please try again later.',
          });
        }
      } catch (error) {
        // Error toast
        toast({
          variant: 'destructive',
          title: 'Error Sending Message',
          description: 'There was a problem sending your message. Please try again later.',
        });
        console.error('Error submitting form:', error);
      }
    };

;
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main className="container mx-auto px-4 md:px-0 py-16">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-center">
              Contact Us
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              We&lsquo;d love to hear from you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block mb-2">
                  Your Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block mb-2">
                  Your Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="block mb-2">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full"
                  rows={5}
                  required
                />
              </div>
              <CardFooter className="text-center">
                <Button type="submit">Send Message</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
