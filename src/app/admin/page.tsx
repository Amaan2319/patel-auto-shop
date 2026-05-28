// src/app/admin/page.tsx
'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to login when visiting /admin
    window.location.href = '/admin/login';
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <p className="text-gray-400">Redirecting to login...</p>
    </div>
  );
}