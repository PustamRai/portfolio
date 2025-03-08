import React from 'react'

function Footer() {
  return (
    <footer 
    className="
    p-6 bg-gray-800 text-gray-300 text-center py-4 font-bold"
    >
      <p>&copy; {new Date().getFullYear()}, Pustam Rai</p>
    </footer>
  )
}

export default Footer