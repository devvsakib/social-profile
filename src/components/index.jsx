import React from 'react'

const Layout = ({ children }) => {
    return (
        <main className='mx-auto w-full px-10 flex-1'>
            {children}
        </main>
    )
}

export default Layout