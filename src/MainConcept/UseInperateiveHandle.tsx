import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react'
// Đưa function từ component con ra component cha thông qua ref
export default function UseInperateiveHandle() {
    return (
        <div>
            <h1>UseImperative Concept</h1>
            <AutoInput />
        </div>
    )
}

type InputForwardRef = {
    type: () => void
}

type PropsInputForwardRef = {}

export const Input = forwardRef((props: PropsInputForwardRef, ref) => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => {
        const type = () => {
            let numberIndex = 0
            let initialString = 'Hello Cyber Dog'
            inputRef.current?.focus()
            let interval = setInterval(() => {
                setValue(initialString.slice(0, numberIndex))
                if (initialString.length === numberIndex) {
                    clearInterval(interval)
                }
                numberIndex++
            }, 500)
        }
        return { type }
    })

    return <input type='text' value={value} ref={inputRef} />
})

const AutoInput = () => {
    let ref = useRef<InputForwardRef>({ type: () => {} })

    const onClick = () => {
        ref.current.type()
    }

    return (
        <>
            <button onClick={onClick}>click</button>
            <Input ref={ref} />
        </>
    )
}
