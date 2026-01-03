import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Lock, Mail, User, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle registration
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
          <p className="text-gray-600">Ciptakan ruang aman Anda</p>
        </div>

        {/* Sign Up Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
          <div className="mb-8">
            <h2 className="text-2xl text-[#0f766e] mb-2">Selamat Datang di Well U</h2>
            <p className="text-gray-600">
              Bergabunglah dengan komunitas yang mendukung di mana kesehatan mental Anda adalah prioritas utama.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">Nama Lengkap</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-11 bg-[#f3f3f5] border-0 rounded-xl h-12 focus:ring-2 focus:ring-[#14b8a6]"
                  required
                />
              </div>
            </div>

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
              <Label htmlFor="password" className="text-gray-700">Kata Sandi</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Buat kata sandi yang aman"
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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700">Konfirmasi Kata Sandi</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Konfirmasi kata sandi Anda"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-11 pr-11 bg-[#f3f3f5] border-0 rounded-xl h-12 focus:ring-2 focus:ring-[#14b8a6]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="bg-[#f0fdfa] border border-[#99f6e4] rounded-xl p-4 space-y-2">
              <p className="text-sm text-[#0f766e]">
                <strong>Privasi Anda penting bagi kami:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Percakapan Anda sepenuhnya rahasia</li>
                <li>• Kami menggunakan enkripsi standar industri</li>
                <li>• Data Anda tidak pernah dibagikan dengan pihak ketiga</li>
                <li>• Anda dapat menghapus akun kapan saja</li>
              </ul>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0f766e] text-white rounded-xl h-12 shadow-lg hover:shadow-xl transition-all"
            >
              Buat Akun Anda
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Sudah punya akun?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-[#14b8a6] hover:text-[#0d9488] hover:underline"
              >
                Masuk di sini
              </button>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Dengan mendaftar, Anda menyetujui Syarat Layanan dan Kebijakan Privasi kami.</p>
          <p className="mt-2">Well U bukan pengganti perawatan kesehatan mental profesional.</p>
        </div>
      </div>
    </div>
  );
}