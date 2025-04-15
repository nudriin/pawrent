/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Duck(props: any) {
    const group = useRef({})
    const { nodes, materials, animations } = useGLTF("/toon_ducks.glb")
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group
                            name="GLTF_SceneRootNode"
                            rotation={[Math.PI / 2, 0, 0]}
                        >
                            <group
                                name="rig_duck_5"
                                position={[3, -0.3, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            >
                                <group name="GLTF_created_0">
                                    <primitive
                                        object={nodes.GLTF_created_0_rootJoint}
                                    />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials.m_duck}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <group name="mesh_duck_4" />
                                </group>
                            </group>
                            <group
                                name="rig_duck_white_11"
                                position={[-3, 0, 0]}
                                rotation={[Math.PI / 2, 0, 0]}
                            >
                                <group name="GLTF_created_1">
                                    <primitive
                                        object={nodes.GLTF_created_1_rootJoint}
                                    />
                                    <skinnedMesh
                                        name="Object_16"
                                        geometry={nodes.Object_16.geometry}
                                        material={materials.m_duck_white}
                                        skeleton={nodes.Object_16.skeleton}
                                    />
                                    <group name="mesh_duck_white_10" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload("/toon_ducks.glb")
