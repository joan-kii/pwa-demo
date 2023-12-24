import { Layout } from '../utils/types'

function MainLayout({ layout }: { layout: Layout }) {
  return (
    <div className="container pl-64">
      {layout === 'recent' && <div>Recientes</div>}
      {layout === 'pending' && <div>Pendientes</div>}
      {layout === 'new' && <div>Nueva Intervención</div>}
      {layout === 'team' && <div>Equipo</div>}
    </div>
  )
}

export default MainLayout
