import { Canvas, useFrame } from "@react-three/fiber"
import { MeshReflectorMaterial, BakeShadows } from "@react-three/drei"
import {
    EffectComposer,
    Bloom,
    DepthOfField,
} from "@react-three/postprocessing"
import { easing } from "maath"
import { Duck } from "./Duck"
import { Shiba } from "./Shiba"
import { Computers, Instances } from "./Computers"

export default function ThreeHero() {
    return (
        <Canvas
            className="min-h-screen"
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
            eventSource={document.getElementById("root")}
            eventPrefix="client"
        >
            {/* Lights */}
            <color attach="background" args={["#3051ff"]} />
            <hemisphereLight intensity={0.2} groundColor="black" />
            <spotLight
                decay={0}
                position={[10, 20, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            {/* Main scene */}
            <group position={[-0, -1, 0]}>
                {/* Plane reflections + distance blur */}
                <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[50, 50]} />
                    <MeshReflectorMaterial
                        blur={[30, 30]}
                        resolution={2048}
                        mixBlur={10}
                        mixStrength={180}
                        roughness={5}
                        depthScale={0.8}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#343434"
                    />
                </mesh>
                <Instances>
                    <Computers scale={0.5} />
                </Instances>
                <Duck
                    scale={0.4}
                    position={[0.2, 0.05, 2]}
                    rotation={[0.2, -Math.PI * -0.08, 0]}
                />
                <Shiba
                    scale={0.4}
                    position={[0.2, 0, 1]}
                    rotation={[0.1, -Math.PI * -0.08, 0]}
                />
                <pointLight
                    distance={1.5}
                    intensity={0.5}
                    position={[0, 0, 0]}
                    color="orange"
                />
            </group>
            {/* Postprocessing */}
            <EffectComposer disableNormalPass>
                <Bloom
                    luminanceThreshold={0}
                    mipmapBlur
                    luminanceSmoothing={0.0}
                    intensity={0}
                />
                <DepthOfField
                    target={[0, 0, 13]}
                    focalLength={0.4}
                    bokehScale={15}
                    height={700}
                />
            </EffectComposer>
            {/* Camera movements */}
            <CameraRig />
            {/* Small helper that freezes the shadows for better performance */}
            <BakeShadows />
        </Canvas>
    )
}

function CameraRig() {
    useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [
                -1 + (state.pointer.x * state.viewport.width) / 3,
                (5 + state.pointer.y) / 2,
                6.7,
            ],
            0.5,
            delta
        )
        state.camera.lookAt(0, 0, 0)
    })
}
