"use client" 

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Home, Folder, Star, Briefcase, Moon } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "About", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: Folder },
  { name: "Hacks", path: "/hackathons", icon: Star },
  { name: "Experience", path: "/experience", icon: Briefcase }
]

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="flex justify-center w-full py-6 px-4 pointer-events-none">
      <div className="flex items-center justify-center px-4 py-3 bg-[#111111]/80 backdrop-blur-md rounded-full shadow-lg border border-white/10 w-auto relative z-50 pointer-events-auto">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => {
            const isActive = item.name === "About"; // Hardcoded for preview, ideally usePathname
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link 
                  href={item.path} 
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${isActive ? 'bg-[#222222] text-white border border-white/10' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </motion.div>
            )
          })}
          <div className="w-[1px] h-6 bg-white/10 mx-2" />
          <button className="p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
            <Moon className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden flex items-center px-2 text-zinc-300 hover:text-white transition-colors" onClick={toggleMenu} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
          <Menu className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0d0d0d] z-40 pt-24 px-6 md:hidden pointer-events-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Link 
                    href={item.path} 
                    className="flex items-center gap-4 text-xl text-zinc-300 hover:text-white p-4 rounded-xl hover:bg-white/5" 
                    onClick={toggleMenu}
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar1 }
