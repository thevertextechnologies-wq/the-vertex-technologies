const whatsappNumber = "+923211456419";
const callNumber = "+923211456419";

const fabClass =
  "flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white transition-transform hover:-translate-y-0.5";

export default function FloatingContactButtons() {
  return (
    <>
      <div className="fixed z-[60] bottom-24 left-4 flex flex-col gap-3 md:bottom-6 md:left-6">
        <a
          href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className={fabClass}
          style={{ background: "#25D366", boxShadow: "0 4px 16px 0 rgba(37,211,102,0.28)" }}
          aria-label="Chat on WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C9.372 3 4 8.372 4 15c0 2.646.86 5.1 2.33 7.09L4 29l7.18-2.29A12.93 12.93 0 0 0 16 27c6.628 0 12-5.372 12-12S22.628 3 16 3Zm0 22c-1.98 0-3.83-.57-5.38-1.56l-.38-.24-4.28 1.36 1.4-4.16-.25-.39A9.97 9.97 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10Zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.85.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.65.21 1.24.18 1.7.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32Z" fill="currentColor" />
          </svg>
        </a>
      </div>

      <div className="fixed z-[60] bottom-24 right-4 flex flex-col gap-3 md:bottom-6 md:right-6">
        <a
          href={`tel:${callNumber}`}
          className={fabClass}
          style={{ background: "#da4838", boxShadow: "0 4px 16px 0 rgba(218,72,56,0.28)" }}
          aria-label="Call"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </>
  );
}
