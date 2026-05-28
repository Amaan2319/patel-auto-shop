// src/lib/adminAuth.ts
import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';

export const adminLogin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message || 'Login failed');
  }
};

export const adminLogout = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error: any) {
    throw new Error(error.message || 'Logout failed');
  }
};

export const isAdminAuthenticated = async (): Promise<string | null> => {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user?.uid || null);
    });
  });
};
