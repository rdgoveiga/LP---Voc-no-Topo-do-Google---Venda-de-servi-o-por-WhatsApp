
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Define que a raiz do projeto também contém arquivos públicos/estáticos.
  // Isso permite que você coloque o header.jpg diretamente no seu repositório GitHub.
  publicDir: '.',
})
