import { useEffect, useState } from "react"

export const useMouseCoordinates = () => {
    const [coordinates, setCoordinates] = useState<number[]>([0, 0])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCoordinates([e.clientX, e.clientY])
        }

        document.addEventListener('mousemove', handleMouseMove)

        return () => document.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return coordinates
}