import {
  BookOpen,
  ScrollText,
  RotateCcw,
  User,
  LogOut,
  Settings,
} from "lucide-react";
import Image from "next/image";


export default function Sidebar() {
  return (
    <aside className="flex min-h-screen flex-col border-r border-gray-500 px-6 py-8">
      <div className="pb-8">
        <Image
          src="/images/Duolingo_logo.png"
          alt="Math Learning ロゴ"
          width={150}
          height={150}
        />
      </div>

      <nav aria-label="メインナビゲーション" className="flex-1">
        <ul className="space-y-2">
          <li>
            <a href="/" className="flex min-h-11 items-center gap-3 rounded-xl px-4">
              <BookOpen size={18} />
              <span>レッスン</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex min-h-11 items-center gap-3 rounded-xl px-4">
              <ScrollText size={18} />
              <span>クエスト</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex min-h-11 items-center gap-3 rounded-xl px-4">
              <RotateCcw size={18} />
              <span>復習</span>
            </a>
          </li>
          <li className="pt-4">
            <a href="/" className="flex min-h-11 items-center gap-3 rounded-xl px-4">
              <User size={18} />
              <span>プロフィール</span>
            </a>
          </li>
          <li className="pt-2">
            <a
              href="/settings"
              className="flex min-h-11 items-center gap-3 rounded-xl px-4"
            >
              <Settings size={18} />
              <span>設定</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="pt-6">
        <a href="/" className="flex min-h-11 items-center gap-3 rounded-xl px-4">
          <LogOut size={18} />
          <span>ログアウト</span>
        </a>
      </div>
    </aside>
  );
}
