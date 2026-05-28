# ADMIN USER SETUP GUIDE

## Quick Setup (5 minutes)

### 1. Create Firebase Admin User

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your **Patel** project
3. Click **Authentication** (left sidebar)
4. Go to the **Users** tab
5. Click **Create user** button
6. Enter:
   - **Email**: `owner@patel.com` (or your preferred email)
   - **Password**: Create a strong password (share securely with owner)
   - Click **Create user**

✅ Done! Admin user is ready.

---

## Test Locally

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/admin/login`

3. Login with credentials:
   - Email: `owner@patel.com`
   - Password: (what you set)

4. You should see the Admin Dashboard!

---

## Admin Dashboard Features

### Add Products
- Click **"+ Add Product"**
- Fill in:
  - **Product Name** (required)
  - **Category** (dropdown)
  - **Price in ₹** (required)
  - **Product Image** (required, auto-uploaded to Firebase Storage)
  - **Description** (required)
- Click **"Add Product"**
- Product appears instantly on website!

### Edit Products
- Click **"Edit"** button on any product card
- Modify details
- Optionally upload a new image
- Click **"Update Product"**

### Delete Products
- Click **"Delete"** on product card
- Confirm deletion
- Product removed instantly

---

## Security Best Practices

✅ **Admin URL is hidden** - No link in navbar
✅ **Login required** - Anyone without credentials cannot access
✅ **Password protected** - Only owner with password can login
✅ **Manual user creation** - No public signup page

### Share Credentials Securely

Send credentials to owner via:
- Secure email
- WhatsApp with encrypted message
- Password manager invitation
- NOT in plain text chat

---

## Troubleshooting

### "Login failed" - Check:
- Firebase credentials in `.env.local` are correct
- Firebase Auth is enabled
- Dev server is running: `npm run dev`
- Clear browser cache and try again

### "Images not uploading" - Check:
- Firebase Storage is enabled
- Image file size is < 5MB
- File format is .jpg, .png, .webp

### "Products not appearing" - Check:
- Firestore database has `products` collection
- Data appeared in admin dashboard
- Wait a few seconds for website to refresh
- Hard refresh browser (Ctrl+Shift+R)

---

## Next Steps

1. Create admin user (this document)
2. Test login locally
3. Add a few test products
4. Deploy to Vercel (see DEPLOYMENT_GUIDE.md)
5. Test live admin panel
6. Share with owner

**Questions?** Check DEPLOYMENT_GUIDE.md for complete deployment steps.
