'use client';

import React from 'react';

import { Button } from './ui/button';
import { logout } from '@/app/login/actions';

export default function Logout() {
  return (
    <div className="absolute top-4 right-4 z-10">
      <Button variant="outline" size="sm" onClick={logout} className="flex items-center gap-2">
        <span>Logout</span>
      </Button>
    </div>
  );
}
