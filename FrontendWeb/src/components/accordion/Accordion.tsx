// import { useEffect, useState } from "react"

// type AccordionProps = {
//     title?: string
//     img?: string
//     name?: string
//     subtitle?: string
//     firstClass?: string
//     secondClass?: string
//     children?: React.ReactNode
// }

// function Accordion({ img, name, subtitle, children, /* className */ firstClass, secondClass, title }: AccordionProps) {
//     const arrowUp = <span className="material-symbols-outlined">keyboard_arrow_up</span>
//     const arrowDown = <span className="material-symbols-outlined">keyboard_arrow_down</span>
//     const [isOpen, setIsOpen] = useState(false)

//     const show = () => {
//         if (window.innerWidth < 992) setIsOpen(!isOpen)
//     }

//     const handleResize = () => {
//         if (window.innerWidth >= 992) setIsOpen(true)
//         setIsOpen(false)
//     }

//     useEffect(() => {
//         handleResize()
//         window.addEventListener('resize', handleResize)
//         return () => window.removeEventListener('resize', handleResize)
//     }, [])

//     return (
//         <div className={firstClass}>
//             {title && <h3>{title}</h3>}
//             <div className={secondClass}>
//                 {img && <img src={img} />}
//                 <div>
//                     {name && <h4>{name}</h4>}
//                     {subtitle && <p>{subtitle}</p>}
//                 </div>
//                 <button
//                     onClick={show}
//                 >
//                     {isOpen ? arrowUp : arrowDown}
//                 </button>
//             </div>
//             {isOpen && <p>{children}</p>}
//         </div>
//     )
// }

// export default Accordion



import { useState, useEffect } from "react"

type AccordionProps = {
    title?: string
    img?: string
    name?: string
    subtitle?: string
    firstClass?: string
    secondClass?: string
    children?: React.ReactNode
}

function Accordion({ img, name, subtitle, children, firstClass, secondClass, title, }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false)

    const show = () => {
        if (window.innerWidth < 992) setIsOpen(!isOpen)
    }

    const handleResize = () => {
        if (window.innerWidth >= 992) setIsOpen(true)
        else setIsOpen(false)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const arrowUp = <span className="material-symbols-outlined">keyboard_arrow_up</span>
    const arrowDown = <span className="material-symbols-outlined">keyboard_arrow_down</span>

    return (
        <div className={firstClass}>
            {title && <h3>{title}</h3>}
            <div className={secondClass}>
                {img && <img src={img} />}
                <div>
                    {name && <h4>{name}</h4>}
                    {subtitle && <p>{subtitle}</p>}
                </div>
                <button onClick={show}>
                    {isOpen ? arrowUp : arrowDown}
                </button>
            </div>
            {isOpen && <p>{children}</p>}
        </div>
    )
}

export default Accordion
