/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useCursor } from "@react-three/drei"

export function SpinningBox({ scale, ...props }: any) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef(null)
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useCursor(hovered)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame(
        (_state, delta) =>
            (ref.current.rotation.x = ref.current.rotation.y += delta)
    )
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? scale * 1.4 : scale * 1.2}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            <boxGeometry />
            <meshStandardMaterial color={hovered ? "hotpink" : "indianred"} />
        </mesh>
    )
}
