import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '@/lib/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { Trash2, Edit2, Plus, LogOut } from 'lucide-react';
import { adminLogout } from '@/lib/adminAuth';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  createdAt: any;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Sound Systems',
    price: '',
    description: '',
    image: null as File | null,
  });

  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ?? 'dzwav4jnk';
  const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET ?? 'patel-enterprise';
  const CLOUDINARY_FOLDER = import.meta.env.VITE_CLOUDINARY_FOLDER ?? 'patel-enterprise/products';

  const uploadToCloudinary = async (file: File) => {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    data.append('folder', CLOUDINARY_FOLDER);

    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Cloudinary upload failed: ${res.status} ${body}`);
    }

    return res.json();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/admin/login');
      }
    });
    return unsubscribe;
  }, [navigate]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const productList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.description) {
      alert('Please fill all required fields');
      return;
    }

    if (!editingId && !formData.image) {
      alert('Please upload an image for new products');
      return;
    }

    setIsUploading(true);

    try {
      let imageUrl = '';

      if (formData.image) {
        const uploadRes = await uploadToCloudinary(formData.image);
        imageUrl = uploadRes.secure_url || uploadRes.url || '';
      }

      if (editingId) {
        const productRef = doc(db, 'products', editingId);
        await updateDoc(productRef, {
          name: formData.name,
          category: formData.category,
          price: Number(formData.price),
          description: formData.description,
          ...(imageUrl && { imageUrl }),
          updatedAt: new Date(),
        });
        setProducts(
          products.map((p) =>
            p.id === editingId
              ? {
                  ...p,
                  name: formData.name,
                  category: formData.category,
                  price: Number(formData.price),
                  description: formData.description,
                  ...(imageUrl && { imageUrl }),
                }
              : p
          )
        );
      } else {
        const docRef = await addDoc(collection(db, 'products'), {
          name: formData.name,
          category: formData.category,
          price: Number(formData.price),
          description: formData.description,
          imageUrl,
          createdAt: new Date(),
        });
        setProducts([
          {
            id: docRef.id,
            name: formData.name,
            category: formData.category,
            price: Number(formData.price),
            description: formData.description,
            imageUrl,
            createdAt: new Date(),
          },
          ...products,
        ]);
      }

      alert(editingId ? 'Product updated!' : 'Product added!');
      setFormData({ name: '', category: 'Sound Systems', price: '', description: '', image: null });
      setEditingId(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Failed to save product');
    } finally {
      setIsUploading(false);
    }
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      description: product.description,
      image: null,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      await deleteDoc(doc(db, 'products', id));
      setProducts(products.filter((p) => p.id !== id));
      alert('Product deleted!');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const handleLogout = async () => {
    try {
      await adminLogout();
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-black font-heading text-white">
              PATEL<span className="text-brand-orange">.</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">Admin Dashboard - Manage Products</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>

        {showForm && (
          <div className="bg-dark-card border border-white/10 rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-bold font-heading mb-6">
              {editingId ? 'Edit Product' : 'Add New Product'}
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-sm text-white focus:outline-none focus:border-brand-orange/50"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-sm text-white focus:outline-none focus:border-brand-orange/50"
                >
                  <option>Sound Systems</option>
                  <option>Head & Tail Lights</option>
                  <option>DRL & Fog Lamps</option>
                  <option>Seat Covers & Interior</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-sm text-white focus:outline-none focus:border-brand-orange/50"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  Product Image {!editingId && '*'}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
                  className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-sm text-white focus:outline-none focus:border-brand-orange/50"
                  required={!editingId}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-sm text-white focus:outline-none focus:border-brand-orange/50"
                  required
                />
              </div>

              <div className="md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="flex-1 bg-brand-orange hover:bg-brand-orange-hover text-black font-heading font-extrabold text-xs tracking-widest py-3 uppercase rounded-sm transition-all disabled:opacity-50"
                >
                  {isUploading ? 'Saving...' : editingId ? 'Update Product' : 'Add Product'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                    setFormData({ name: '', category: 'Sound Systems', price: '', description: '', image: null });
                  }}
                  className="flex-1 bg-dark-bg border border-white/10 hover:border-white/20 text-gray-400 font-heading font-bold text-xs tracking-widest py-3 uppercase rounded-sm transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center space-x-2 bg-brand-orange hover:bg-brand-orange-hover text-black font-heading font-extrabold text-xs tracking-widest px-6 py-3 uppercase rounded-sm mb-8 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        )}

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="bg-dark-card border border-white/10 rounded-lg p-8 text-center">
            <p className="text-gray-400">No products yet. Create your first one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-dark-card border border-white/10 rounded-lg overflow-hidden hover:border-brand-orange/50 transition-all">
                {product.imageUrl && (
                  <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-bold font-heading text-white mb-1">{product.name}</h3>
                  <p className="text-xs font-mono text-gray-400 mb-3">{product.category}</p>
                  <p className="text-sm text-gray-300 mb-3 line-clamp-2">{product.description}</p>
                  <p className="text-lg font-bold text-brand-orange mb-4">₹{product.price.toLocaleString()}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 px-3 py-2 rounded-sm transition-colors text-sm font-semibold"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 px-3 py-2 rounded-sm transition-colors text-sm font-semibold"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
