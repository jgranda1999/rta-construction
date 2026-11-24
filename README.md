# R.T.A Construcción - Website

Website for a Madrid-based construction company specializing in obra, excavación, transporte, and reformas.
    
## Features

- **Contact form via EmailJS**: Contacto and Servicios presupuesto form send email
- **WhatsApp CTAs**: Sticky floating button and Home/WhatsApp CTAs remain available
- **Modern industrial design**: Clean layout with amber accent color palette
- **Mobile-first**: Responsive design optimized for all devices
- **Spanish-only**: All content in Spanish
- **5 main pages**: Inicio, Servicios, Proyectos, Sobre Nosotros, Contacto

## Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- EmailJS (`@emailjs/browser`)
- Modern ES6+ JavaScript

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure EmailJS (required for the contact form):
   - Copy `.env.example` to `.env`
   - Create a service/template at [emailjs.com](https://www.emailjs.com/)
   - Set template **To Email** to `richeacaro28@hotmail.com` in the EmailJS dashboard
   - Fill `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`

3. Configure WhatsApp phone number (floating button / CTAs):
   - Edit `src/config/whatsapp.js`
   - Replace `PHONE_NUMBER` with the actual phone number (format: `34XXXXXXXXX` without the `+`)

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── WhatsAppButton.jsx
│   ├── ContactForm.jsx   # EmailJS contact / presupuesto form
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── config/             # Configuration files
│   └── whatsapp.js     # WhatsApp utilities
├── data/               # Data files
│   └── projects.js     # Projects data (easy to edit)
├── App.jsx             # Main app component with routing
└── main.jsx            # Entry point
```

## Customization

### Phone Number
Edit `src/config/whatsapp.js` and update the `PHONE_NUMBER` constant.

### Projects
Edit `src/data/projects.js` to add, remove, or modify projects. Each project should have:
- `id`: Unique identifier
- `title`: Project title
- `category`: One of: 'Residencial', 'Industrial', 'Excavación', 'Transporte'
- `description`: Short description
- `image`: Image URL (replace placeholder URLs with real project photos)

### Colors
The amber color palette is defined in `tailwind.config.js` under the `primary` color scale. Modify as needed.

### Address
The address is displayed in the Footer and Contact page. Update it in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## Contact form (EmailJS)

`ContactForm` sends submissions with `@emailjs/browser`. See `.env.example` for env vars and suggested template fields (`nombre`, `email`, `telefono`, `tipo_trabajo`, `zona`, `fecha_aproximada`, `mensaje`). Destination email is configured in the EmailJS dashboard (recommended: `richeacaro28@hotmail.com`).

## WhatsApp Integration

Home CTAs and the floating FAB use `openWhatsApp()` from `src/config/whatsapp.js`. The Contact page form itself uses EmailJS, not WhatsApp.

## Notes

- Stock images are used as placeholders. Replace with real project photos in `src/data/projects.js`
- Map embed placeholder is in the Contact page - replace with actual Google Maps embed code
- Phone and email placeholders are in the Contact page - update with real contact information

