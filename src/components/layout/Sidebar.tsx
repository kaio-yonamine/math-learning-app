export default function Sidebar() {
  return (
    <aside>
      <div>
        <h2>Math Learning</h2>
      </div>

      <nav aria-label="メインナビゲーション">
        <ul>
          <li>
            <a href="/">レッスン</a>
          </li>
          <li>
            <a href="/">クエスト</a>
          </li>
          <li>
            <a href="/">復習</a>
          </li>
          <li>
            <a href="/">プロフィール</a>
          </li>
          <li>
            <a href="/">ログアウト</a>
          </li>
        </ul>
      </nav>

      <div>
        <p>ゲストユーザー</p>
        <a href="/settings">設定</a>
      </div>
    </aside>
  );
}
