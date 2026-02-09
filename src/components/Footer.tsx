

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] py-8 text-[12px] text-[#6e6e73] font-sans">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="border-b border-[#d2d2d7] pb-4 mb-4">
          More ways to: Visit an <a href="#" className="text-[#0070c9] hover:underline">Apple Store</a>,
          <span className="whitespace-nowrap"> call <span className="text-[#1d1d1f]">1-18888587485</span></span>, or <a href="#" className="text-[#0070c9] hover:underline">find a reseller</a>.
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 order-2 md:order-1 w-full md:w-auto">
            <div className="mb-2 md:mb-0">
              Copyright © 2025 Apple Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="#" className="hover:underline text-[#424245] hover:text-black border-r border-[#d2d2d7] pr-4 last:border-0 last:pr-0">Privacy Policy</a>
              <a href="#" className="hover:underline text-[#424245] hover:text-black border-r border-[#d2d2d7] pr-4 last:border-0 last:pr-0">Terms of Use</a>
              <a href="#" className="hover:underline text-[#424245] hover:text-black border-r border-[#d2d2d7] pr-4 last:border-0 last:pr-0">Sales and Refunds</a>
              <a href="#" className="hover:underline text-[#424245] hover:text-black border-r border-[#d2d2d7] pr-4 last:border-0 last:pr-0">Legal</a>
              <a href="#" className="hover:underline text-[#424245] hover:text-black">Site Map</a>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 md:mb-0 order-1 md:order-2">
            <a href="#" className="flex items-center gap-1 hover:underline hover:text-black">
              United States
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
