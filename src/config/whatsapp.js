// WhatsApp / phone configuration (Spain +34)
export const PHONE_NUMBER = '34615406976'

export const EMAIL = 'richeacaro28@hotmail.com'

export const isPhonePlaceholder = /X/i.test(PHONE_NUMBER)

/**
 * Human-readable phone for UI. Keeps placeholder style until a real number is set.
 */
export const getPhoneDisplay = () => {
  if (isPhonePlaceholder) return '+34 XXX XXX XXX'
  const digits = PHONE_NUMBER.replace(/\D/g, '')
  if (digits.startsWith('34') && digits.length === 11) {
    return `+34 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`
  }
  return `+${digits}`
}

export const getTelHref = () => `tel:+${PHONE_NUMBER.replace(/\D/g, '')}`

export const getMailtoHref = () => `mailto:${EMAIL}`

/**
 * Builds a WhatsApp URL with a pre-filled message
 * @param {string} phone - Phone number (without +, e.g., "34615406976")
 * @param {string} message - Message to pre-fill
 * @returns {string} WhatsApp URL
 */
export const buildWhatsAppUrl = (phone, message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

/**
 * Opens WhatsApp with a pre-filled message
 * @param {string} message - Message to send
 * @param {string} phone - Optional phone number (defaults to config)
 */
export const openWhatsApp = (message, phone = PHONE_NUMBER) => {
  const url = buildWhatsAppUrl(phone, message);
  window.open(url, '_blank');
};

/**
 * Builds a quote request message from form data
 * @param {Object} formData - Form data object
 * @returns {string} Formatted message
 */
export const buildQuoteMessage = (formData) => {
  const { nombre, tipoTrabajo, zona, fechaAproximada, detalles } = formData;
  
  let message = `Hola, me gustaría solicitar un presupuesto.\n\n`;
  message += `*Nombre:* ${nombre}\n`;
  message += `*Tipo de trabajo:* ${tipoTrabajo}\n`;
  message += `*Zona:* ${zona}\n`;
  message += `*Fecha aproximada:* ${fechaAproximada || 'Por determinar'}\n`;
  
  if (detalles) {
    message += `\n*Detalles:*\n${detalles}`;
  }
  
  return message;
};
