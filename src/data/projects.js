import obraImage from '../images/project-obra.jpg'
import excavatorDumpTruckImage from '../images/excavator-heavy-dump-truck-14328842.jpeg'
import transporteImage from '../images/project-transporte.jpg'
import desescombrosImage from '../images/project-desescombros.jpg'
import reformaImage from '../images/project-reforma.jpg'
import escavatorImage from '../images/trabajo.jpg'

// Projects data — easy to edit and extend with real job photos
export const projects = [
  {
    id: 1,
    title: 'Reforma integral de vivienda',
    category: 'Residencial',
    description: 'Reforma completa de vivienda en Madrid: demoliciones controladas, acabados y entrega limpia.',
    image: reformaImage,
  },
  {
    id: 2,
    title: 'Excavación para nave industrial',
    category: 'Industrial',
    description: 'Movimiento de tierras y preparación de terreno para nueva instalación industrial.',
    image: excavatorDumpTruckImage,
  },
  {
    id: 3,
    title: 'Transporte y suministro a obra',
    category: 'Transporte',
    description: 'Logística de materiales y áridos con entregas coordinadas según el ritmo de obra.',
    image: transporteImage,
  },
  {
    id: 4,
    title: 'Demolición y desescombro',
    category: 'Excavación',
    description: 'Demolición puntual y retirada de escombros para preparar la siguiente fase de obra.',
    image: desescombrosImage,
  },
  {
    id: 5,
    title: 'Obra y acondicionamiento',
    category: 'Industrial',
    description: 'Trabajos de construcción y acondicionamiento en entorno industrial y comercial.',
    image: obraImage,
  },
  {
    id: 6,
    title: 'Movimiento de tierras residencial',
    category: 'Residencial',
    description: 'Excavación y nivelación para reforma y ampliación de vivienda unifamiliar.',
    image: escavatorImage,
  },
]

export const categories = ['Todos', 'Residencial', 'Industrial', 'Excavación', 'Transporte']
