import React from 'react';
import { Button } from '@/components/ui/button';
import { login, signup } from './actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <form className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="••••••••" required />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 pt-4">
            <Button className="flex-1" formAction={login}>
              Log in
            </Button>
            <Button className="flex-1" formAction={signup} variant="outline">
              Sign up
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
