import React from 'react'

import "../style/style.css"

const Footer: React.FC = () => {
  return (
    <>

      <footer className="footer" style={{ position:"fixed",  bottom: 0, }} >
        <div className="text-center">
          <span className='text-white'>© 2024 Your Company Name. All rights reserved.</span>
        </div>
      </footer>


    </>
  )
}

export default Footer