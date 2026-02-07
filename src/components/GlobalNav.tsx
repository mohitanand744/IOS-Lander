import { useState } from 'react';

const GlobalNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support'];

  return (
    <nav className="bg-[#333] h-[48px] sm:h-[44px] w-full z-50 relative text-[12px] font-sans">
      <div className="max-w-[1024px] mx-auto px-4 h-full flex justify-between items-center sm:justify-between grid-cols-3">

        {/* Mobile Menu Button - Left */}
        <div className="sm:hidden flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#d6d6d6] hover:text-white focus:outline-none"
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <div className={`w-4 h-4 relative flex flex-col justify-center gap-1.5 transition-all ${isOpen ? 'rotate-90' : ''}`}>
              <span className={`block w-full h-px bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block w-full h-px bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Logo - Center on Mobile, Left on Desktop */}
        <div className="flex-1 text-center sm:text-left sm:flex-initial flex items-center justify-center sm:justify-start">
          <a href="#" className="text-[#e8e8ed] hover:text-white inline-block transition-opacity opacity-80 hover:opacity-100">
            {/* Uses a standard path for Apple Logo */}
            <svg className="h-[44px] w-[14px] fill-current" viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0729 17.6825a3.61 3.61 0 0 0-1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1-1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1-1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 3.6537 3.6537 0 0 0-2.2619 1.1362 3.2276 3.2276 0 0 0-.8262 2.158 3.015 3.015 0 0 0 2.2412-1.0742z"></path>
            </svg>
          </a>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden sm:flex flex-1 justify-center space-x-9 items-center h-full">
          {navItems.map(item => (
            <a key={item} href="#" className="text-[#e8e8ed] hover:text-white transition-opacity opacity-80 hover:opacity-100 text-[12px] font-normal tracking-[-.01em]">
              {item}
            </a>
          ))}
          <a href="#" className="text-[#e8e8ed] hover:text-white transition-opacity opacity-80 hover:opacity-100 opacity-80 hover:opacity-100">
            <svg className="w-[15px] h-[44px] fill-current" viewBox="0 0 15 44" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M6.001,23.999c-2.205,0-4-1.795-4-4s1.795-4,4-4s4,1.795,4,4 S8.206,23.999,6.001,23.999z" />
            </svg>
          </a>
        </div>

        {/* Bag - Right */}
        <div className="flex-1 text-right sm:flex-initial flex justify-end">
          <a href="#" className="text-[#e8e8ed] hover:text-white inline-block align-middle transition-opacity opacity-80 hover:opacity-100">
            <svg className="w-[14px] h-[44px] fill-current" viewBox="0 0 15 44" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.923,28h-11.41l-0.75-9.337c-0.04-0.48,0.315-0.908,0.793-0.956c0.024-0.002,0.048-0.004,0.072-0.004h2.527 c0.038-2.316,1.907-4.2,4.248-4.2c2.341,0,4.21,1.884,4.248,4.2h2.527c0.481,0,0.871,0.39,0.871,0.871 c0,0.024-0.002,0.049-0.004,0.073L12.923,28z M7.203,15.118c-1.391,0-2.527,1.109-2.571,2.485h5.143 C9.731,16.227,8.595,15.118,7.203,15.118z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`sm:hidden bg-[#333] absolute top-[48px] left-0 right-0 h-screen transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col px-10 pt-4 space-y-4">
          {navItems.map(item => (
            <a key={item} href="#" className="text-[#e8e8ed] border-b border-[#444] pb-2 hover:text-white text-[17px] transition-colors">
              {item}
            </a>
          ))}
          <a href="#" className="text-[#e8e8ed] border-b border-[#444] pb-2 hover:text-white text-[17px] transition-colors">Search</a>

        </div>
      </div>
    </nav>
  );
};

export default GlobalNav;
