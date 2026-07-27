export const FITBASE_WHATSAPP_NUMBER = '905054513823';

export const openWhatsAppMessage = (message: string) => {
  const url = `https://wa.me/${FITBASE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};
