/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Abilita la modalità rigorosa di React
  images: {
    domains: ['example.com'], // Aggiungi qui i domini da cui puoi caricare immagini
  },
  output: 'export', // Assicurati che questa riga sia presente
  // Rimuovi completamente la proprietà 'output' se non stai esportando staticamente
  // output: 'export', // Questa riga è commentata per evitare conflitti
}

module.exports = nextConfig;
