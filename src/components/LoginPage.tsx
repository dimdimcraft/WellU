import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    navigate('/chat');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafbfc] via-[#f0fdfa] to-[#e6f9f7] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0d9488] flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl text-[#0f766e] tracking-tight">Well U</span>
          </button>
          <p className="text-gray-600">Selamat kembali ke ruang aman Anda</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
          <div className="mb-8">
            <h2 className="text-2xl text-[#0f766e] mb-2">Masuk</h2>
            <p className="text-gray-600">
              Lanjutkan perjalanan Anda menuju kesehatan mental yang lebih baik.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Alamat Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="anda@contoh.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-11 bg-[#f3f3f5] border-0 rounded-xl h-12 focus:ring-2 focus:ring-[#14b8a6]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-700">Kata Sandi</Label>
                <button
                  type="button"
                  className="text-sm text-[#14b8a6] hover:text-[#0d9488] hover:underline"
                >
                  Lupa kata sandi?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Masukkan kata sandi Anda"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-11 pr-11 bg-[#f3f3f5] border-0 rounded-xl h-12 focus:ring-2 focus:ring-[#14b8a6]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="bg-[#f0fdfa] border border-[#99f6e4] rounded-xl p-4">
              <p className="text-sm text-gray-600">
                <strong className="text-[#0f766e]">Anda berada di ruang yang aman.</strong> Percakapan Anda tetap pribadi dan rahasia. Kami di sini untuk mendukung Anda tanpa penghakiman.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0f766e] text-white rounded-xl h-12 shadow-lg hover:shadow-xl transition-all"
            >
              Masuk
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Belum punya akun?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-[#14b8a6] hover:text-[#0d9488] hover:underline"
              >
                Daftar gratis
              </button>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Well U dirancang untuk memberikan dukungan emosional dan tidak boleh</p>
          <p>menggantikan perawatan kesehatan mental profesional atau intervensi krisis.</p>
        </div>
      </div>
    </div>
  );
}