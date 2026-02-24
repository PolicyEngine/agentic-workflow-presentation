import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PluginBlog } from './pages/PluginBlog'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PluginBlog />
  </StrictMode>,
)
