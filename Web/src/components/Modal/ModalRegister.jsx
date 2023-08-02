import React from 'react'

export default function ModalRegister({handleClose}) {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white w-[60vh] h-[70vh] rounded-md'>
                <header>header</header>
                <main>meio</main>
                <footer><button onClick={handleClose}>fechar modal</button></footer>
            </div>
        </div>
    )
}
