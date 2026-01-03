import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Menu, Search, Bell, User, Heart } from 'lucide-react';
import { ChatSidebar } from './ChatSidebar';
import { ChatMessage } from './ChatMessage';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface Chat {
  id: string;
  title: string;
  date: string;
  preview: string;
  messages: Message[];
}

const mockChats: Chat[] = [
  {
    id: '1',
    title: 'Mengelola stres di tempat kerja',
    date: 'Hari ini',
    preview: 'Saya merasa cemas tentang...',
    messages: [
      {
        id: '1-1',
        text: "Hai, akhir-akhir ini saya merasa sangat cemas tentang pekerjaan saya. Ada begitu banyak tekanan dan saya tidak yakin bagaimana cara mengatasinya.",
        sender: 'user',
        timestamp: '2:30 PM'
      },
      {
        id: '1-2',
        text: "Saya mendengar Anda, dan sangat wajar untuk merasakan hal itu. Stres yang berhubungan dengan pekerjaan bisa sangat membebani. Mari kita luangkan waktu sejenak bersama - apa yang paling membebani pikiran Anda?",
        sender: 'bot',
        timestamp: '2:30 PM'
      },
      {
        id: '1-3',
        text: "Saya pikir itu terutama tentang tenggat waktu. Saya merasa seperti selalu berlomba dengan waktu dan itu sangat melelahkan.",
        sender: 'user',
        timestamp: '2:32 PM'
      },
      {
        id: '1-4',
        text: "Itu terdengar sangat menguras energi. Tekanan tenggat waktu yang konstan bisa sangat berdampak pada kesejahteraan Anda. Apakah Anda sempat mengambil istirahat atau waktu untuk diri sendiri selama hari ini?",
        sender: 'bot',
        timestamp: '2:32 PM'
      }
    ]
  },
  {
    id: '2',
    title: 'Merasa lebih baik hari ini',
    date: 'Kemarin',
    preview: "Saya ingin berbagi bahwa...",
    messages: [
      {
        id: '2-1',
        text: "Saya ingin berbagi bahwa saya merasa lebih baik hari ini. Saya mencoba beberapa latihan pernapasan yang kita bicarakan.",
        sender: 'user',
        timestamp: 'Kemarin 4:15 PM'
      },
      {
        id: '2-2',
        text: "Itu sangat menyenangkan untuk didengar! Saya sangat senang latihan pernapasan membantu Anda. Dibutuhkan keberanian untuk mencoba strategi coping yang baru. Bagaimana perasaan Anda setelahnya?",
        sender: 'bot',
        timestamp: 'Kemarin 4:15 PM'
      }
    ]
  },
  {
    id: '3',
    title: 'Kesulitan tidur',
    date: '1 Jan',
    preview: 'Tidur saya sangat terganggu...',
    messages: [
      {
        id: '3-1',
        text: "Tidur saya sangat terganggu akhir-akhir ini. Saya terus terbangun di tengah malam karena khawatir tentang berbagai hal.",
        sender: 'user',
        timestamp: '1 Jan, 9:20 PM'
      },
      {
        id: '3-2',
        text: "Gangguan tidur bisa sangat sulit untuk ditangani, terutama ketika pikiran Anda dipenuhi kekhawatiran. Anda tidak sendirian dalam hal ini. Mari kita eksplorasi apa yang mungkin berkontribusi pada kekhawatiran malam hari ini. Apa yang biasanya ada di pikiran Anda ketika terbangun?",
        sender: 'bot',
        timestamp: '1 Jan, 9:21 PM'
      }
    ]
  }
];

const suggestionChips = [
  "Saya merasa cemas",
  "Saya merasa kewalahan",
  "Saya butuh dukungan",
  "Saya merasa stres"
];

export function ChatDashboard() {
  const navigate = useNavigate();
  const [chats, setChats] = useState<Chat[]>(mockChats);
  const [currentChatId, setCurrentChatId] = useState<string>(mockChats[0].id);
  const [inputMessage, setInputMessage] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentChat = chats.find(chat => chat.id === currentChatId) || chats[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChat.messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: Message = {
      id: `${currentChatId}-${Date.now()}`,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Simulate bot response
    const botResponses = [
      "Terima kasih telah berbagi perasaan Anda dengan saya. Membutuhkan keberanian untuk mengekspresikan perasaan Anda. Bisa tolong ceritakan lebih lanjut tentang apa yang ada di pikiran Anda?",
      "Saya mendengar Anda, dan perasaan Anda sangat valid. Ini baik-baik saja untuk merasakan hal itu. Apa yang menurut Anda akan membantu Anda merasa lebih didukung saat ini?",
      "Itu terdengar sangat menantang. Ingatlah bahwa tidak baik-baik saja untuk tidak baik-baik saja terkadang. Apakah Anda ingin mengeksplorasi beberapa strategi coping bersama?",
      "Saya di sini untuk Anda. Ambillah semua waktu yang Anda butuhkan. Aspek mana dari ini yang ingin Anda bicarakan terlebih dahulu?"
    ];

    const newBotMessage: Message = {
      id: `${currentChatId}-${Date.now() + 1}`,
      text: botResponses[Math.floor(Math.random() * botResponses.length)],
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChats(prevChats =>
      prevChats.map(chat =>
        chat.id === currentChatId
          ? {
              ...chat,
              messages: [...chat.messages, newUserMessage, newBotMessage],
              preview: inputMessage.substring(0, 30) + '...'
            }
          : chat
      )
    );

    setInputMessage('');
  };

  const handleNewChat = () => {
    const newChat: Chat = {
      id: `chat-${Date.now()}`,
      title: 'Konversasi Baru',
      date: 'Sekarang',
      preview: 'Mulai konversasi baru...',
      messages: [
        {
          id: `new-${Date.now()}`,
          text: "Halo! Saya di sini untuk mendengar dan mendukung Anda. Bagaimana perasaan Anda hari ini? Jangan ragu untuk berbagi apa pun yang ada di pikiran Anda.",
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]
    };

    setChats(prevChats => [newChat, ...prevChats]);
    setCurrentChatId(newChat.id);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  return (
    <div className="flex h-screen bg-[#fafbfc]">
      {/* Sidebar */}
      <ChatSidebar
        chats={chats}
        currentChatId={currentChatId}
        onSelectChat={setCurrentChatId}
        onNewChat={handleNewChat}
        onNavigateHistory={() => navigate('/history')}
        isMobileOpen={isMobileSidebarOpen}
        onMobileClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h2 className="text-lg text-[#0f766e]">{currentChat.title}</h2>
                <p className="text-sm text-gray-500">{currentChat.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg hidden sm:block">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg hidden sm:block">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={() => navigate('/')}
                className="p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0d9488] flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
          <div className="max-w-4xl mx-auto">
            {currentChat.messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-100 px-4 sm:px-6 py-4">
          <div className="max-w-4xl mx-auto">
            {/* Suggestion Chips */}
            {currentChat.messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {suggestionChips.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleSuggestionClick(chip)}
                    className="px-4 py-2 bg-[#f0fdfa] text-[#0d9488] rounded-full text-sm hover:bg-[#ccfbf1] transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* Input Box */}
            <div className="flex gap-2 items-end">
              <div className="flex-1 relative">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Tulis apa yang Anda rasakan..."
                  className="w-full bg-[#f3f3f5] border-0 rounded-2xl pl-4 pr-4 py-3 min-h-[52px] resize-none focus:ring-2 focus:ring-[#14b8a6]"
                />
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0f766e] text-white rounded-2xl h-[52px] w-[52px] p-0 flex items-center justify-center shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-3">
              Well U di sini untuk mendukung Anda, tetapi bukan pengganti perawatan kesehatan mental profesional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}