# R.T.A Construcción - Website

Website for a Madrid-based construction company specializing in obra, excavación, transporte, and reformas.
    
## Features

- **WhatsApp-first conversion**: Sticky WhatsApp button and contact form that opens WhatsApp
- **Modern industrial design**: Clean layout with red accent color palette
- **Mobile-first**: Responsive design optimized for all devices
- **Spanish-only**: All content in Spanish
- **5 main pages**: Inicio, Servicios, Proyectos, Sobre Nosotros, Contacto

## Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Modern ES6+ JavaScript

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure WhatsApp phone number:
   - Edit `src/config/whatsapp.js`
   - Replace `PHONE_NUMBER` with the actual phone number (format: `34XXXXXXXXX` without the `+`)

3. Start development server:
```bash
npm run dev
```

4. Build for production:
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
│   ├── ContactWhatsAppForm.jsx
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
The red color palette is defined in `tailwind.config.js` under the `primary` color scale. Modify as needed.

### Address
The address is displayed in the Footer and Contact page. Update it in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## WhatsApp Integration

All WhatsApp buttons use the `openWhatsApp()` utility function from `src/config/whatsapp.js`. The contact form builds a formatted message and opens WhatsApp in a new tab.

## Notes

- Stock images are used as placeholders. Replace with real project photos in `src/data/projects.js`
- Map embed placeholder is in the Contact page - replace with actual Google Maps embed code
- Phone and email placeholders are in the Contact page - update with real contact information

