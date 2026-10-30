import React, { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  category: 'Mains' | 'Sides' | 'Drinks' | 'Desserts';
  price: number;
  description: string;
  badge?: string;
}

const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: 'Truffle Margherita Pizza', category: 'Mains', price: 14.50, description: 'Hand-stretched dough, San Marzano tomato, buffalo mozzarella, black truffle oil.', badge: 'Chef Special' },
  { id: 2, name: 'Fettuccine Alfredo', category: 'Mains', price: 12.00, description: 'Rich parmesan cream emulsion with roasted garlic and fresh parsley.' },
  { id: 3, name: 'Crispy Halloumi & Caesar Salad', category: 'Sides', price: 8.50, description: 'Romaine hearts, shaved pecorino, toasted sourdough croutons, lemon anchovy dressing.' },
  { id: 4, name: 'Gourmet Wagyu Burger', category: 'Mains', price: 16.00, description: 'Brioche bun, aged cheddar, caramelised onion relish, hand-cut herb fries.', badge: 'Popular' },
  { id: 5, name: 'Sparkling Citrus Spritz', category: 'Drinks', price: 4.50, description: 'Cold-pressed blood orange, sparkling spring water, mint and lime twist.' },
  { id: 6, name: 'Dark Chocolate Lava Cake', category: 'Desserts', price: 7.00, description: 'Warm molten Valrhona chocolate centre, Madagascar vanilla bean gelato.' },
];

interface CartItem {
  item: MenuItem;
  qty: number;
}

interface RestaurantDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RestaurantDemoModal: React.FC<RestaurantDemoModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState<CartItem[]>([
    { item: MENU_ITEMS[0], qty: 2 },
    { item: MENU_ITEMS[4], qty: 2 }
  ]);
  const [tableNumber, setTableNumber] = useState('Table 04');
  const [orderPlacedMessage, setOrderPlacedMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredItems = selectedCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((i) => i.category === selectedCategory);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) => (c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c));
      }
      return [...prev, { item, qty: 1 }];
    });
  };

  const updateQty = (itemId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.qty + delta;
            return newQty > 0 ? { ...c, qty: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const subtotal = cart.reduce((acc, curr) => acc + curr.item.price * curr.qty, 0);
  const tax = subtotal * 0.05; // 5% GST
  const serviceCharge = subtotal > 0 ? 2.50 : 0;
  const grandTotal = subtotal + tax + serviceCharge;

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    const ticketId = `KOT-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderPlacedMessage(`Success! Ticket #${ticketId} dispatched to Kitchen Display System for ${tableNumber}.`);
    setTimeout(() => {
      setCart([]);
      setOrderPlacedMessage(null);
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080b14]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-2xl bg-[#0D1322] border border-[#7bd0ff]/30 shadow-2xl flex flex-col text-[#e0e2ef]">
        {/* Top Header */}
        <div className="px-5 py-4 bg-[#101827] border-b border-[#494454]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7bd0ff] to-[#d0bcff] flex items-center justify-center text-[#080b14] font-bold">
              <span className="material-symbols-outlined text-xl">restaurant</span>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                  DineFlow POS &amp; Ledger
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold font-['Space_Grotesk'] uppercase bg-[#272a34] text-[#7bd0ff] border border-[#7bd0ff]/20">
                  Interactive Demo
                </span>
              </div>
              <p className="font-['Inter'] text-xs text-[#cbc3d7]">
                Project 02 Simulation: Dynamic DOM Calculations, Live Order Routing &amp; Tables
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="bg-[#1c1f29] border border-white/10 rounded-lg px-3 py-1.5 font-['Space_Grotesk'] text-xs text-[#7bd0ff] focus:outline-none focus:border-[#7bd0ff]"
            >
              <option value="Table 01">Table 01 (Indoor)</option>
              <option value="Table 02">Table 02 (Patio)</option>
              <option value="Table 04">Table 04 (Window)</option>
              <option value="Table 08">Table 08 (VIP Booth)</option>
              <option value="Takeaway">Takeaway #Counter</option>
            </select>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#cbc3d7] hover:text-white hover:bg-[#1c1f29] transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* Content Area: Dual pane Menu Catalog vs Order Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
          {/* Left Column: Menu Items */}
          <div className="lg:col-span-7 p-4 sm:p-6 overflow-y-auto custom-scrollbar flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-[#494454]/30 text-left">
            {/* Category filter */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Mains', 'Sides', 'Drinks', 'Desserts'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-['Space_Grotesk'] transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#7bd0ff] text-[#00354a] font-bold shadow-md'
                      : 'bg-[#181b25] text-[#cbc3d7] hover:text-white hover:bg-[#272a34]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-[#181b25] border border-white/5 hover:border-[#7bd0ff]/30 transition-all flex flex-col justify-between gap-3 group"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-['Space_Grotesk'] text-sm font-semibold text-[#e0e2ef] group-hover:text-[#7bd0ff] transition-colors">
                        {item.name}
                      </h4>
                      {item.badge && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-[#d0bcff]/20 text-[#d0bcff] border border-[#d0bcff]/30 shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-['Inter'] text-xs text-[#cbc3d7] line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="font-['Space_Grotesk'] text-sm font-bold text-white">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-2.5 py-1 rounded-lg bg-[#272a34] hover:bg-[#7bd0ff] text-[#7bd0ff] hover:text-[#00354a] font-['Space_Grotesk'] text-xs font-semibold flex items-center gap-1 transition-all"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic POS Ledger & Cart */}
          <div className="lg:col-span-5 p-4 sm:p-6 bg-[#0B0E17]/90 flex flex-col justify-between text-left">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#7bd0ff] text-lg">receipt_long</span>
                  <span className="font-['Space_Grotesk'] text-sm font-bold text-white">
                    Order Ledger ({tableNumber})
                  </span>
                </div>
                {cart.length > 0 && (
                  <button
                    onClick={() => setCart([])}
                    className="text-xs text-[#cbc3d7] hover:text-[#ffb4ab] transition-colors"
                  >
                    Clear Cart
                  </button>
                )}
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-2 max-h-56 overflow-y-auto custom-scrollbar pr-1">
                {cart.length === 0 ? (
                  <div className="py-8 text-center text-[#cbc3d7] text-xs flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-3xl text-[#494454]">shopping_bag</span>
                    <span>No dishes currently selected. Click Add on the menu items.</span>
                  </div>
                ) : (
                  cart.map(({ item, qty }) => (
                    <div
                      key={item.id}
                      className="p-2.5 rounded-lg bg-[#181b25] border border-white/5 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex flex-col">
                        <span className="font-['Space_Grotesk'] font-semibold text-[#e0e2ef]">
                          {item.name}
                        </span>
                        <span className="text-[#958ea0]">
                          ${item.price.toFixed(2)} ea
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 bg-[#0b0e17] rounded border border-white/10 px-1">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="w-5 h-5 flex items-center justify-center text-[#cbc3d7] hover:text-white"
                          >
                            -
                          </button>
                          <span className="font-mono text-xs w-4 text-center font-bold text-[#7bd0ff]">
                            {qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="w-5 h-5 flex items-center justify-center text-[#cbc3d7] hover:text-white"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-mono font-bold text-white min-w-12 text-right">
                          ${(item.price * qty).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2 mt-4">
              <div className="flex justify-between text-xs text-[#cbc3d7]">
                <span>Food &amp; Beverage Subtotal</span>
                <span className="font-mono">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-[#cbc3d7]">
                <span>State GST &amp; Dining Tax (5%)</span>
                <span className="font-mono">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-[#cbc3d7]">
                <span>Kitchen Table Cover &amp; Service</span>
                <span className="font-mono">${serviceCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/5">
                <span className="font-['Space_Grotesk'] text-[#7bd0ff]">Net Grand Total</span>
                <span className="font-mono text-base text-[#2fd9f4]">${grandTotal.toFixed(2)}</span>
              </div>

              {orderPlacedMessage && (
                <div className="p-3 rounded-lg bg-[#00a6e0]/20 border border-[#2fd9f4]/40 text-[#2fd9f4] text-xs font-['Space_Grotesk'] flex items-center gap-2 animate-in fade-in">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>{orderPlacedMessage}</span>
                </div>
              )}

              <button
                disabled={cart.length === 0}
                onClick={handlePlaceOrder}
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-['Space_Grotesk'] text-sm font-bold shadow-lg hover:scale-[1.01] transition-transform disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span>Dispatch KOT &amp; Print Bill</span>
                <span className="material-symbols-outlined text-base">print</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
