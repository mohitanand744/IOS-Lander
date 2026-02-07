

const LocalNav = () => {
  return (
    <div className="bg-[#f5f5f7] border-b border-gray-200 sticky top-0 z-40 h-[52px] transition-all">
      <div className="max-w-[1024px] mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex-1 flex items-center justify-between sm:justify-start">
          <span className="text-[21px] font-semibold text-gray-900">
            Apple Support
          </span>
          {/* Mobile Arrow Icon */}
          <div className="sm:hidden text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden sm:flex text-[12px] space-x-6">
          <a href="#" className="text-[#333] hover:text-[#0070c9] hover:underline">Communities</a>
        </div>
      </div>
    </div>
  )
}
export default LocalNav;
