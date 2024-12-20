import React from 'react'

export default function Button({ text, width, height, backgroundColor, textColor }) {
    return (
        <div className={`w-[${width}] h-[${height}] ${backgroundColor} p-4 rounded-lg text-${textColor} text-center flex items-center justify-center font-medium cursor-pointer shadow-lg`}>
            {text}
        </div>
    )
}
