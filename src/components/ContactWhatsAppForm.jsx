import { useState } from 'react'
import { openWhatsApp, buildQuoteMessage } from '../config/whatsapp'

const TIPOS_TRABAJO = [
  'Excavación',
  'Reforma',
  'Construcción',
  'Transporte',
  'Otro'
]

export default function ContactWhatsAppForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    tipoTrabajo: '',
    zona: '',
    fechaAproximada: '',
    detalles: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.nombre || !formData.tipoTrabajo || !formData.zona) {
      alert('Por favor, complete los campos obligatorios.')
      return
    }

    const message = buildQuoteMessage(formData)
    openWhatsApp(message)
    setSubmitted(true)
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        nombre: '',
        tipoTrabajo: '',
        zona: '',
        fechaAproximada: '',
        detalles: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-charcoal-700 mb-1 sm:mb-2">
          Nombre <span className="text-whatsapp-600">*</span>
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-whatsapp-500 focus:border-whatsapp-500"
          placeholder="Su nombre"
        />
      </div>

      <div>
        <label htmlFor="tipoTrabajo" className="block text-sm font-medium text-charcoal-700 mb-1 sm:mb-2">
          Tipo de trabajo <span className="text-whatsapp-600">*</span>
        </label>
        <select
          id="tipoTrabajo"
          name="tipoTrabajo"
          value={formData.tipoTrabajo}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-whatsapp-500 focus:border-whatsapp-500"
        >
          <option value="">Seleccione un tipo</option>
          {TIPOS_TRABAJO.map(tipo => (
            <option key={tipo} value={tipo}>{tipo}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="zona" className="block text-sm font-medium text-charcoal-700 mb-1 sm:mb-2">
          Zona <span className="text-whatsapp-600">*</span>
        </label>
        <input
          type="text"
          id="zona"
          name="zona"
          value={formData.zona}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-whatsapp-500 focus:border-whatsapp-500"
          placeholder="Ej: Centro, Chamberí, etc."
        />
      </div>

      <div>
        <label htmlFor="fechaAproximada" className="block text-sm font-medium text-charcoal-700 mb-1 sm:mb-2">
          Fecha aproximada
        </label>
        <input
          type="text"
          id="fechaAproximada"
          name="fechaAproximada"
          value={formData.fechaAproximada}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-whatsapp-500 focus:border-whatsapp-500"
          placeholder="Ej: Enero 2024"
        />
      </div>

      <div>
        <label htmlFor="detalles" className="block text-sm font-medium text-charcoal-700 mb-1 sm:mb-2">
          Detalles
        </label>
        <textarea
          id="detalles"
          name="detalles"
          value={formData.detalles}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-whatsapp-500 focus:border-whatsapp-500"
          placeholder="Cuéntenos más sobre su proyecto..."
        />
      </div>

      {submitted && (
        <div className="bg-primary-50 border border-primary-200 text-primary-800 px-4 py-3 rounded-lg">
          ¡Mensaje preparado! Se abrirá WhatsApp en una nueva ventana.
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-whatsapp-500 text-white py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base hover:bg-whatsapp-600 transition-colors focus:outline-none focus:ring-2 focus:ring-whatsapp-500 focus:ring-offset-2 min-h-[44px]"
      >
        Enviar por WhatsApp
      </button>
    </form>
  )
}


