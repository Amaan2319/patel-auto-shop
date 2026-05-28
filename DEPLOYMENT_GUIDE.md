# DEPLOYMENT GUIDE - FREE HOSTING

This guide explains how to deploy your Patel auto shop website completely free using Firebase and Vercel.

## Free Services Used
- **Database**: Firebase Firestore (1GB free)
- **Storage**: Firebase Storage (5GB free)
- **Authentication**: Firebase Auth (free)
- **Hosting**: Vercel (free tier)
- **Total Cost**: $0/month

---

## STEP 1: Firebase Setup (Already Done ✅)

Your Firebase is already configured. You just need to:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Create an admin user manually:
   - Go to **Authentication** → **Users** tab
   - Click **Create user**
   - Enter owner email and password
   - This is the login for `/admin`

> **Security Note**: Never expose Firebase credentials in public code. Your `.env.local` is already in `.gitignore`.

---

## STEP 2: Deploy to Vercel (Recommended - 1 Click)

### Option A: Deploy via GitHub (Easiest)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/patel-auto.git
   git branch -M main
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "Import Project"
5. Select your repository
6. Add environment variables:
   - Copy all variables from your `.env.local`
   - Paste them in Vercel settings
7. Click Deploy

**Done!** Your site is live at `https://your-project.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --env NEXT_PUBLIC_FIREBASE_API_KEY=your_key ...
```

---

## STEP 3: Setup Custom Domain (Optional)

In Vercel dashboard:
1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records (instructions provided by Vercel)

---

## STEP 4: Admin Access

1. Visit `https://your-domain.com/admin/login` (or `/admin`)
2. Login with credentials you created in Firebase
3. Manage products from dashboard

---

## SECURITY CHECKLIST

✅ Admin page hidden from navbar (only accessible via direct URL)
✅ Login required to access `/admin/dashboard`
✅ Environment variables secured in `.env.local`
✅ Firebase rules protect database (configure in Firebase Console)

### Configure Firebase Security Rules

Go to **Firebase Console** → **Firestore Database** → **Rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write products
    match /products/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

---

## ENVIRONMENT VARIABLES NEEDED

Make sure these are in your `.env.local` and Vercel:

```
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx
```

---

## MANAGING PRODUCTS

Once deployed:

1. **Add Product**: `/admin/dashboard` → Click "Add Product"
   - Upload image (auto-uploaded to Firebase Storage)
   - Enter name, price, category, description
   - Click "Add Product"

2. **Edit Product**: Click "Edit" on any product card
   - Modify details
   - Optionally upload new image
   - Click "Update Product"

3. **Delete Product**: Click "Delete" → Confirm

Products automatically appear on your website!

---

## TROUBLESHOOTING

### "Firebase not initialized"
- Check `.env.local` has all Firebase variables
- Restart dev server: `npm run dev`

### "Login not working"
- Make sure Firebase Auth is enabled in Firebase Console
- User must be created via Firebase Console

### "Images not uploading"
- Check Firebase Storage rules allow uploads
- Image file size should be < 5MB

### "Vercel build fails"
- Check TypeScript errors: `npm run lint`
- Verify all env variables are set in Vercel
- Check Build Logs in Vercel Dashboard

---

## FREE TIER LIMITS (Should be plenty)

| Service | Free Limit |
|---------|-----------|
| Firestore Storage | 1 GB |
| Storage (Images) | 5 GB |
| Monthly Reads | 50,000 |
| Monthly Writes | 20,000 |
| Vercel Deployments | Unlimited |
| Vercel Bandwidth | 100 GB/month |

For a small shop, these limits are more than enough!

---

## NEXT STEPS

1. ✅ Create Firebase admin user
2. ✅ Test admin login locally: `npm run dev` → Visit `/admin`
3. ✅ Add a few test products
4. ✅ Push to GitHub
5. ✅ Deploy to Vercel
6. ✅ Test live at your domain

You now have a fully functional e-commerce admin panel for FREE! 🚀
