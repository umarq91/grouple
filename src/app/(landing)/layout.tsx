import React from 'react'
import LandingPageNavbar from './_components/navbar';

function LandingPageLayout({children}:{children:React.ReactNode}){ 
  return (
    <div className='flex relative container flex-col'>
        <LandingPageNavbar/>
      {children}
    </div>
  )
}

export default LandingPageLayout;
