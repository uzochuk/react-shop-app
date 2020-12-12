import React from 'react'

export default function App() {
    return (
        <div className='grid-container'>
            <header>
                <a href='/'>React Shopping Cart</a>
            </header>
            <main>
                product list
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}
