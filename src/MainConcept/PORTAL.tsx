import React from 'react'
import { createPortal } from 'react-dom'

type PROPS = {
    visible: boolean
}

export default function PORTAL({ visible }: PROPS) {
    return createPortal(
        <div className='modal'>
            <h3>Title Modal</h3>
        </div>,
        document.body
    )
}
