export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-container flex flex-col gap-3 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-slate-800">UrbanStay</div>
          <p>Your Urban Home, Just a Click Away.</p>
        </div>
        <div className="flex gap-6">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>
      </div>
    </footer>
  );
}

