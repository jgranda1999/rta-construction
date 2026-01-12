// WhatsApp configuration
export const PHONE_NUMBER = '34XXXXXXXXX'; // Replace with actual phone number

/**
 * Builds a WhatsApp URL with a pre-filled message
 * @param {string} phone - Phone number (without +, e.g., "34XXXXXXXXX")
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


