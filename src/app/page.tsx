'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-teal-500 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-6 text-white">
          Bem vindo(a) ao <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Projeto Hopper App</span>
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          O futuro do sistema de entrega autônomo.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/login" className="bg-white text-blue-600 hover:text-yellow-500 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300">
            Login
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 text-gray-300 text-sm"
      >
        <p>
          Desenvolvido por{' '}
          <a 
            href="https://matheusabrahao.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 underline"
          >
            Matheus Abrahão
          </a>
          . Distribuído por Projeto Hopper GTP.
        </p>
      </motion.div>
    </div>
  )
}
