import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Calendar, Trash2, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface HistoryItem {
  id: string;
  title: string;
  date: string;
  preview: string;
  messageCount: number;
}

const mockHistory: HistoryItem[] = [
  {
    id: '1',
    title: 'Mengelola stres di tempat kerja',
    date: 'Hari ini, 2:30 PM',
    preview: "Akhir-akhir ini saya merasa sangat cemas tentang pekerjaan saya. Ada begitu banyak tekanan...",
    messageCount: 12
  },
  {
    id: '2',
    title: 'Merasa lebih baik hari ini',
    date: 'Kemarin, 4:15 PM',
    preview: "Saya ingin berbagi bahwa saya merasa lebih baik hari ini. Saya mencoba beberapa latihan pernapasan...",
    messageCount: 8
  },
  {
    id: '3',
    title: 'Kesulitan tidur',
    date: '1 Jan, 9:20 PM',
    preview: 'Tidur saya sangat terganggu akhir-akhir ini. Saya terus terbangun di tengah malam...',
    messageCount: 15
  },
  {
    id: '4',
    title: 'Kekhawatiran tentang hubungan',
    date: '30 Des, 3:45 PM',
    preview: "Saya mengalami beberapa kesulitan dengan pasangan saya dan saya tidak yakin bagaimana...",
    messageCount: 20
  },
  {
    id: '5',
    title: 'Menghadapi perubahan',
    date: '28 Des, 11:00 AM',
    preview: "Banyak perubahan dalam hidup saya baru-baru ini dan itu sangat membebani...",
    messageCount: 10
  },
  {
    id: '6',
    title: 'Merasa terisolasi',
    date: '25 Des, 7:30 PM',
    preview: "Akhir-akhir ini saya merasa sangat kesepian. Sulit untuk menghubungi orang...",
    messageCount: 18
  },
  {
    id: '7',
    title: 'Kesulitan mempertahankan motivasi',
    date: '22 Des, 2:15 PM',
    preview: "Saya merasa sulit untuk tetap termotivasi. Semuanya terasa terlalu berat...",
    messageCount: 14
  },
  {
    id: '8',
    title: 'Kemajuan positif',
    date: '20 Des, 5:00 PM',
    preview: "Saya ingin berbagi kabar baik - Saya telah mempraktikkan teknik-teknik...",
    messageCount: 9
  }
];

export function ChatHistory() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafbfc] via-[#f0fdfa] to-[#e6f9f7]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/chat')}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Button>
              <div>
                <h1 className="text-2xl text-[#0f766e]">Riwayat Percakapan</h1>
                <p className="text-sm text-gray-600">Tinjau percakapan masa lalu Anda</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0d9488] flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* History List */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {mockHistory.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ccfbf1] to-[#99f6e4] flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-[#0d9488]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg text-[#0f766e] truncate">{item.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <span>•</span>
                        <span>{item.messageCount} pesan</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3 line-clamp-2">{item.preview}</p>
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    variant="outline"
                    onClick={() => navigate('/chat')}
                    className="rounded-xl border-[#14b8a6] text-[#0d9488] hover:bg-[#f0fdfa]"
                  >
                    Lanjutkan
                  </Button>
                  <Button
                    variant="ghost"
                    className="rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if needed) */}
        {mockHistory.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ccfbf1] to-[#99f6e4] flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-[#0d9488]" />
            </div>
            <h3 className="text-xl text-[#0f766e] mb-2">Belum ada percakapan</h3>
            <p className="text-gray-600 mb-6">Mulai percakapan pertama Anda dengan Well U</p>
            <Button
              onClick={() => navigate('/chat')}
              className="bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0f766e] text-white rounded-full px-8"
            >
              Mulai Mengobrol
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}