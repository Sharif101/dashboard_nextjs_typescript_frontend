export function Navbar() {
  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-6 shadow-sm">
      <div className="text-lg font-medium">Welcome, Admin</div>
      <div>
        {/* Future: profile dropdown, logout, notifications */}
        <button className="text-sm text-gray-600 hover:underline">
          Logout
        </button>
      </div>
    </div>
  );
}
