import React from 'react'

function Footer() {
  return (
    <footer 
    className="
    p-6 bg-gray-800 text-gray-300 text-center py-4"
    >
      <p>&copy; {new Date().getFullYear()} Pustam Rai. All rights reserved.</p>
    </footer>
  )
}

export default Footer