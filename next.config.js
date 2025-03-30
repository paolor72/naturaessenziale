/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Altre configurazioni vanno qui
  // Rimuovi completamente la proprietà 'target'
  images: {
    domains: ['example.com'], // Esempio di configurazione per le immagini
  },
  // Configurazione per il deploy su Netlify (se necessario)
  // ...altre impostazioni
  output: 'export',
}

module.exports = nextConfig
