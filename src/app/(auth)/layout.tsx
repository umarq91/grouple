import { onAuthenticatedUser } from '@/actions/auth'
import React from 'react'

type Props = {
    children:React.ReactNode
}

async function AuthLayout({children}: Props) {
    const user = await onAuthenticatedUser();
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthLayout