import { CONTACT } from '@/lib/contact'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'

/** Fixed round WhatsApp chat button — uses `CONTACT.whatsappUrl` (+91 8639137356). */
export default function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:bottom-8 md:right-8 md:h-16 md:w-16"
      aria-label={`Chat on WhatsApp at ${CONTACT.phoneDisplay}`}
      title="WhatsApp"
    >
      <WhatsAppIcon className="h-[1.65rem] w-[1.65rem] md:h-[1.85rem] md:w-[1.85rem]" />
    </a>
  )
}
