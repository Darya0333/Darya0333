import React, { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Canvas, useThree } from 'react-three-fiber';
import { Vector3 } from 'three';

const Laptop = () => {
    const gltf = useRef();

    const [laptop, setLaptop] = useState(null);
    const { camera } = useThree();
    camera.position.set(15, 5, 5); // Set the camera position
    camera.lookAt(new Vector3(0, 0, 0));

    useEffect(() => {
        // Load the glTF file
        const loader = new GLTFLoader();
        loader.load('/3d/laptop/scene.gltf', (gltf) => {
            // Add the loaded glTF scene to your Three.js scene
            gltf.scene.position.set(0, 0, 0);
            setLaptop(gltf);
        });
    }, [])

    return <>
        <ambientLight />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <mesh ref={gltf} >
            {
                laptop ?
                    <primitive
                        object={laptop?.scene}
                        scale={20}
                    /> : <></>
            }
        </mesh>
    </>
}

const ThreeScene = () => {
    return (
        <Canvas className="w-full h-full">
            <Laptop />
        </Canvas>
    );
};

export default ThreeScene;