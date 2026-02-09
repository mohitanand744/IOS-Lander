import { FaPhone } from "react-icons/fa";


const CallAlertBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] z-[100] animate-slideUp">
      <a
        href="tel:+118888587485"
        className="block w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden active:scale-95 transition-transform"
      >
        <div className="flex items-center justify-center gap-3 py-4">
          <FaPhone className="w-6 rotate-[100deg] h-6 text-[#007AFF]" />
          <span className="text-[#007AFF] text-lg font-semibold tracking-wide">
            Call +1-188-885-87485
          </span>
        </div>
      </a>
    </div>
  );
};

export default CallAlertBanner;
