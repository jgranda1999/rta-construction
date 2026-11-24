import { useState } from 'react'
import emailjs from '@emailjs/browser'

const TIPOS_TRABAJO = [
  'Excavación',
  'Reforma',
  'Construcción',
  'Transporte',
  'Otro',
]

const DEFAULT_BUTTON_CLASS =
  'w-full bg-primary-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70'

const CONFIG_ERROR =
  'El formulario de contacto no está configurado. Por favor, configura EmailJS (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID y VITE_EMAILJS_PUBLIC_KEY) o escríbenos directamente por email o teléfono.'

const SEND_ERROR =
  'No se pudo enviar el mensaje. Inténtalo de nuevo en unos minutos o contacta con nosotros por email o teléfono.'

function getEmailJsConfig() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim()
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim()
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim()

  const configured = Boolean(serviceId && templateId && publicKey)
  return { serviceId, templateId, publicKey, configured }
}

const emptyForm = (defaultTipoTrabajo = '') => ({
  nombre: '',
  email: '',
  telefono: '',
  tipoTrabajo: defaultTipoTrabajo,
  zona: '',
  fechaAproximada: '',
  detalles: '',
})

export default function ContactForm({
  submitLabel = 'Enviar',
  defaultTipoTrabajo = '',
  buttonClassName = DEFAULT_BUTTON_CLASS,
}) {
  const [formData, setFormData] = useState(() => emptyForm(defaultTipoTrabajo))
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (status === 'error' || status === 'success') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.nombre || !formData.email || !formData.tipoTrabajo || !formData.zona) {
      setStatus('error')
      setErrorMessage('Por favor, complete los campos obligatorios.')
      return
    }

    const { serviceId, templateId, publicKey, configured } = getEmailJsConfig()
    if (!configured) {
      setStatus('error')
      setErrorMessage(CONFIG_ERROR)
      return
    }

    setStatus('loading')
    setErrorMessage('')

    const templateParams = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono || 'No indicado',
      tipo_trabajo: formData.tipoTrabajo,
      zona: formData.zona,
      fecha_aproximada: formData.fechaAproximada || 'Por determinar',
      mensaje: formData.detalles || 'Sin detalles adicionales',
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setStatus('success')
      setFormData(emptyForm(defaultTipoTrabajo))
    } catch {
      setStatus('error')
      setErrorMessage(SEND_ERROR)
    }
  }

  const fieldClass =
    'w-full border border-charcoal-300 bg-white px-4 py-3 text-base text-charcoal-900 outline-none transition focus:border-primary-600 focus:ring-1 focus:ring-primary-600'

  const isLoading = status === 'loading'

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold text-charcoal-800">
          Nombre <span className="text-primary-600">*</span>
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          disabled={isLoading}
          className={fieldClass}
          placeholder="Su nombre"
          autoComplete="name"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-charcoal-800">
            Email <span className="text-primary-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
            className={fieldClass}
            placeholder="su@email.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold text-charcoal-800">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            disabled={isLoading}
            className={fieldClass}
            placeholder="+34 600 000 000"
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="tipoTrabajo" className="mb-1.5 block text-sm font-semibold text-charcoal-800">
          Tipo de trabajo <span className="text-primary-600">*</span>
        </label>
        <select
          id="tipoTrabajo"
          name="tipoTrabajo"
          value={formData.tipoTrabajo}
          onChange={handleChange}
          required
          disabled={isLoading}
          className={fieldClass}
        >
          <option value="">Seleccione un tipo</option>
          {TIPOS_TRABAJO.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="zona" className="mb-1.5 block text-sm font-semibold text-charcoal-800">
          Zona <span className="text-primary-600">*</span>
        </label>
        <input
          type="text"
          id="zona"
          name="zona"
          value={formData.zona}
          onChange={handleChange}
          required
          disabled={isLoading}
          className={fieldClass}
          placeholder="Ej: Centro, Alcorcón, Getafe…"
        />
      </div>

      <div>
        <label htmlFor="fechaAproximada" className="mb-1.5 block text-sm font-semibold text-charcoal-800">
          Fecha aproximada
        </label>
        <input
          type="text"
          id="fechaAproximada"
          name="fechaAproximada"
          value={formData.fechaAproximada}
          onChange={handleChange}
          disabled={isLoading}
          className={fieldClass}
          placeholder="Ej: Marzo 2026"
        />
      </div>

      <div>
        <label htmlFor="detalles" className="mb-1.5 block text-sm font-semibold text-charcoal-800">
          Detalles
        </label>
        <textarea
          id="detalles"
          name="detalles"
          value={formData.detalles}
          onChange={handleChange}
          rows={4}
          disabled={isLoading}
          className={fieldClass}
          placeholder="Cuéntenos más sobre su proyecto…"
        />
      </div>

      {status === 'success' && (
        <div className="border border-primary-200 bg-primary-50 px-4 py-3 text-primary-800" role="status">
          Mensaje enviado correctamente. Te responderemos lo antes posible.
        </div>
      )}

      {status === 'error' && errorMessage && (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-red-800" role="alert">
          {errorMessage}
        </div>
      )}

      <button type="submit" className={buttonClassName} disabled={isLoading}>
        {isLoading ? 'Enviando…' : submitLabel}
      </button>
    </form>
  )
}
