import { Plus, Settings, HelpCircle, History, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface Chat {
  id: string;
  title: string;
  date: string;
  preview: string;
}

interface ChatSidebarProps {
  chats: Chat[];
  currentChatId: string;
  onSelectChat: (chatId: string) => void;
  onNewChat: () => void;
  onNavigateHistory: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export function ChatSidebar({ 
  chats, 
  currentChatId, 
  onSelectChat, 
  onNewChat,
  onNavigateHistory,
  isMobileOpen,
  onMobileClose 
}: ChatSidebarProps) {
  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100">
        <span className="text-lg text-[#0f766e]">Percakapan</span>
        <button onClick={onMobileClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <Button
          onClick={() => {
            onNewChat();
            onMobileClose();
          }}
          className="w-full bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#0f766e] text-white rounded-xl h-11 shadow-sm"
        >
          <Plus className="w-5 h-5 mr-2" />
          Percakapan Baru
        </Button>
      </div>

      {/* Recent Chats */}
      <div className="flex-1 overflow-y-auto px-2">
        <div className="px-3 py-2 text-xs text-gray-500 uppercase tracking-wide">
          Percakapan Terbaru
        </div>
        <div className="space-y-1">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => {
                onSelectChat(chat.id);
                onMobileClose();
              }}
              className={`w-full text-left px-3 py-3 rounded-xl transition-colors ${
                currentChatId === chat.id
                  ? 'bg-[#f0fdfa] text-[#0f766e]'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate mb-1">{chat.title}</p>
                  <p className="text-xs text-gray-500 truncate">{chat.preview}</p>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{chat.date}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-100 space-y-2">
        <Button
          variant="ghost"
          onClick={() => {
            onNavigateHistory();
            onMobileClose();
          }}
          className="w-full justify-start text-gray-700 hover:bg-gray-50 rounded-xl h-11"
        >
          <History className="w-5 h-5 mr-3" />
          Riwayat Percakapan
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-50 rounded-xl h-11"
        >
          <Settings className="w-5 h-5 mr-3" />
          Pengaturan
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-50 rounded-xl h-11"
        >
          <HelpCircle className="w-5 h-5 mr-3" />
          Bantuan & Dukungan
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 h-screen sticky top-0">
        {sidebarContent}
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onMobileClose}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 bottom-0 w-80 bg-white z-50 transform transition-transform duration-300 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </div>
    </>
  );
}