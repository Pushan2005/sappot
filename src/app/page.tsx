import Link from 'next/link'
import { ChevronRight, Shield, Users, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300">
              <Link href="#features" className="hover:text-blue-600 transition">Features</Link>
              <Link href="#how-it-works" className="hover:text-blue-600 transition">How It Works</Link> 
              <Link href="#pricing" className="hover:text-blue-600 transition">Pricing</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="px-4 py-2 text-white hover:bg-white rounded-lg transition"
            >
              Login
            </Link>
            <Link 
              href="/tickets/new" 
              className="px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
            >
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Streamline Your Support <br />with Intelligent Ticket Management
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Simplify customer support by providing a powerful, intuitive platform that helps teams resolve issues faster and more efficiently.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/tickets/new" 
              className="px-6 py-3 border border-gray-300 text-white rounded-lg dark:hover:text-gray-800 hover:bg-gray-50 transition flex items-center text-lg"
            >
              Create First Ticket <ChevronRight className="ml-2 bg-:white" />
            </Link>
            <Link 
              href="#features" 
              className="px-6 py-3 border border-gray-300 text-white rounded-lg dark:hover:text-gray-800 hover:bg-gray-50 transition flex items-center text-lg"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <Shield className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with top-tier security protocols to protect your sensitive support data.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <Zap className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Instant ticket routing and real-time updates for quick issue resolution.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <Users className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Collaborative</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Easy team communication and shared context for comprehensive support.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Tech Sappot Company © 2024 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}