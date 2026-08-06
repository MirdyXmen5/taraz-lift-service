const WHATSAPP_URL = "https://wa.me/77015156701";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 scale-[1.05] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/35 md:bottom-7 md:right-7"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="h-7 w-7">
        <path d="M16.02 3.2A12.68 12.68 0 0 0 5.14 22.39L3.1 29.85l7.64-2A12.7 12.7 0 1 0 16.02 3.2Zm0 23.08a10.34 10.34 0 0 1-5.27-1.44l-.38-.23-4.53 1.19 1.21-4.42-.25-.4a10.35 10.35 0 1 1 9.22 5.3Zm5.68-7.75c-.31-.16-1.84-.91-2.12-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-1 1.22-.18.21-.37.24-.68.08a8.47 8.47 0 0 1-2.49-1.53 9.34 9.34 0 0 1-1.72-2.14c-.18-.31 0-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.06-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.38 4.76.75.32 1.34.52 1.8.66.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.07-.14-.28-.22-.6-.38Z" />
      </svg>
    </a>
  );
}
