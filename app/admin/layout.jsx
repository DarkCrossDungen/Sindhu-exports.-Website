export default function AdminLayout({ children }) {
  // We don't render Navbar or Footer here because it's a separate admin experience
  return (
    <div className="min-h-screen bg-background text-on-surface flex">
      {/* Sidebar from specs block 4 */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-surface-container-lowest border-r border-outline/30 z-40 hidden md:flex flex-col">
        <div className="p-6 border-b border-outline/20">
          <div className="flex items-center gap-2 text-primary font-headline font-black uppercase text-xl uppercase tracking-tighter">
            <span className="material-symbols-outlined">factory</span>
            <span>Sindhu Exports</span>
          </div>
          <div className="text-[10px] text-on-surface-variant tracking-widest uppercase mt-1 px-1">Management</div>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          {["Dashboard", "Inventory", "Orders", "Analytics", "Settings"].map((item, idx) => (
            <a key={item} href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${idx === 0 ? "bg-primary/10 text-primary border border-primary/20" : "text-on-surface-variant hover:text-primary hover:bg-surface-container"}`}>
              <span className="material-symbols-outlined">
                {item === 'Dashboard' ? 'dashboard' : item === 'Inventory' ? 'inventory_2' : item === 'Orders' ? 'local_shipping' : item === 'Analytics' ? 'bar_chart' : 'settings'}
              </span>
              {item}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-outline/20">
          <div className="bg-surface-container rounded-lg p-4 px-4 flex flex-col gap-1 border border-outline/10">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Owner Access</div>
            <div className="text-[10px] font-mono text-primary">Admin ID: #001</div>
          </div>
        </div>
      </aside>

      {/* Main Admin Content Area */}
      <main className="flex-1 md:ml-64 relative min-h-screen">
        {children}
      </main>
    </div>
  );
}
