import { useNavigate } from 'react-router-dom';
import { Sparkles, Heart, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafbfc] via-[#f0fdfa] to-[#e6f9f7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0d9488] flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl text-[#0f766e] tracking-tight">Well U</span>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="hidden sm:inline-flex"
            >
              Masuk
            </Button>
            <Button 
              onClick={() => navigate('/signup')}
              className="bg-[#14b8a6] hover:bg-[#0d9488] text-white rounded-full px-6"
            >
              Mulai Sekarang
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ccfbf1] rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-[#0d9488]" />
                <span className="text-sm text-[#0f766e]">Teman kesehatan mental Anda</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#0f766e] tracking-tight">
                Well U
              </h1>
              
              <p className="text-xl sm:text-2xl text-[#115e59] max-w-2xl mx-auto lg:mx-0">
                Ruang aman untuk berbicara, merefleksikan diri, dan merasa lebih baik.
              </p>
              
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Terhubung dengan pendamping AI yang empatik dan mendengarkan tanpa menghakimi. 
                Bagikan pikiran Anda, jelajahi perasaan Anda, dan temukan kejelasan dalam lingkungan yang mendukung.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  onClick={() => navigate('/signup')}
                  className="bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0f766e] text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  Mulai Perjalanan Anda
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/login')}
                  className="border-2 border-[#14b8a6] text-[#0d9488] hover:bg-[#f0fdfa] rounded-full px-8 py-6"
                >
                  Masuk
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#14b8a6] rounded-full"></div>
                  <span>100% Privat</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#14b8a6] rounded-full"></div>
                  <span>Tersedia 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#14b8a6] rounded-full"></div>
                  <span>Tanpa Menghakimi</span>
                </div>
              </div>
            </div>

            {/* Right Content - Abstract Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1763806773992-a2aabd0ba3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNhbG0lMjBtaW5kZnVsbmVzc3xlbnwxfHx8fDE3Njc0MzE3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Calm abstract background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/20 to-[#0d9488]/30"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 -left-4 w-24 h-24 bg-gradient-to-br from-[#99f6e4] to-[#5eead4] rounded-full opacity-60 blur-2xl animate-gentle-float"></div>
              <div className="absolute bottom-20 -right-4 w-32 h-32 bg-gradient-to-br from-[#2dd4bf] to-[#14b8a6] rounded-full opacity-50 blur-2xl animate-gentle-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#0f766e] mb-4">Mengapa Memilih Well U?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan lingkungan yang aman dan mendukung, dirancang khusus untuk perjalanan kesehatan mental Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ccfbf1] to-[#99f6e4] rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-[#0d9488]" />
              </div>
              <h3 className="text-xl text-[#0f766e] mb-3">Selalu Tersedia</h3>
              <p className="text-gray-600">
                Dapatkan dukungan kapan pun Anda membutuhkannya. Pendamping AI kami siap untuk Anda 24/7, siap mendengarkan dan memberikan tanggapan yang bijaksana.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ccfbf1] to-[#99f6e4] rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-[#0d9488]" />
              </div>
              <h3 className="text-xl text-[#0f766e] mb-3">Sepenuhnya Privat</h3>
              <p className="text-gray-600">
                Percakapan Anda bersifat rahasia dan aman. Kami memprioritaskan privasi dan keamanan emosional Anda di atas segalanya.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ccfbf1] to-[#99f6e4] rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-[#0d9488]" />
              </div>
              <h3 className="text-xl text-[#0f766e] mb-3">Zona Tanpa Penghakiman</h3>
              <p className="text-gray-600">
                Ekspresikan diri Anda dengan bebas tanpa takut dihakimi. AI kami memberikan bimbingan yang empatik dan mendukung yang disesuaikan untuk Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Siap memulai perjalanan kesehatan mental Anda?
            </h2>
            <p className="text-lg text-[#ccfbf1] mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan orang yang telah menemukan kenyamanan, kejelasan, dan dukungan dengan Well U.
            </p>
            <Button 
              onClick={() => navigate('/signup')}
              className="bg-white text-[#0d9488] hover:bg-gray-100 rounded-full px-8 py-6 shadow-lg"
            >
              Mulai Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-white/50">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p className="mb-2">Well U dirancang untuk memberikan dukungan emosional dan tidak menggantikan perawatan kesehatan mental profesional.</p>
          <p>© 2026 Well U. Privasi dan kesejahteraan Anda sangat penting bagi kami.</p>
        </div>
      </footer>
    </div>
  );
}