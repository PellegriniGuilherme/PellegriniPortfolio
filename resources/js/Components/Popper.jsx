import React, { useState } from 'react'
import { Transition } from '@headlessui/react';

function Popper({ children, text }) {

    const [ open, setOpen ] = useState(false);

    const over = () => {
        setOpen(true);
    }

    const exit = () => {
        setOpen(false);
    }

    return (
        <div className="relative" onMouseEnter={over} onMouseLeave={exit}>
            {children}
            <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div className="absolute z-50 text-cinza-100 origin-center left-0">
                    {text}
                </div>
            </Transition>
        </div>
    )
}

export default Popper;
