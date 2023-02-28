import React from 'react'

export default function Footer() {
    const d = new Date();
    const yer = d.getFullYear();
  return (
    <div>
      <footer>
        <p>copyright @{yer}</p>
      </footer>
    </div>
  )
}
