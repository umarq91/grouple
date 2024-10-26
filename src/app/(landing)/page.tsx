import React from 'react'
import CallToAction from './_components/call-to-action'
import DashboardSnippet from './_components/dashboard-snippet'
import dynamic from 'next/dynamic'

const PricingSection = dynamic(
  ()=> import('./_components/pricing')
  .then((component) =>component.PricingSection,)
  ,{ssr:true}
)


function HomePage() {
  return (
    <main className='md:px-10 py-20 flex flex-col gap-36'>
    <div>
      <CallToAction/>
      <DashboardSnippet />
      <PricingSection />
    </div>
    </main>
  )
}

export default HomePage
