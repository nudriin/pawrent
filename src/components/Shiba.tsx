/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGLTF } from "@react-three/drei"

export function Shiba(props: any) {
    const { nodes, materials } = useGLTF("/chubby_shiba_baby.glb")
    return (
        <group {...props} dispose={null}>
            <group position={[0, 1.978, 0]} scale={[2.363, 1.998, 1.998]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials["default.001"]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials["default.001"]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials["default.001"]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
            </group>
        </group>
    )
}

useGLTF.preload("/chubby_shiba_baby.glb")
