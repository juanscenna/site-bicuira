import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import ApresentacaoPage from './pages/ApresentacaoPage'
import { apresentacao } from './content/apresentacao'
import ProjectPage from './pages/ProjectPage'
import NotFound from './pages/NotFound'
import { services } from './content/services'

// Rotas do site
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* uma página para cada serviço: /sites, /automacao, /fideliza */}
        {services.map((s) => (
          <Route key={s.id} path={s.path} element={<ServicePage key={s.id} service={s} />} />
        ))}
        {/* aba "Apresentação comercial" do Fideliza */}
        <Route path={apresentacao.page.path} element={<ApresentacaoPage />} />
        <Route path="/projetos/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
