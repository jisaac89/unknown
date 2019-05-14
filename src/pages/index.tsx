import React from 'react'
import { Layer } from '../recoil2/components/Layer/Layer'
import { Swiper } from '../components/swiper'
import { GlobalStyle } from '../styles/globalStyle'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'

function Thing({ vertices, color }) {
  return (
    <group>
      <line>
        <geometry
          attach="geometry"
          vertices={vertices.map(v => new THREE.Vector3(...v))}
          onUpdate={self => (self.verticesNeedUpdate = true)}
        />
        <lineBasicMaterial attach="material" color="black" />
      </line>
      <mesh
        onClick={e => console.log('click')}
        onPointerOver={e => console.log('hover')}
        onPointerOut={e => console.log('unhover')}>
        <octahedronGeometry attach="geometry" />
        <meshBasicMaterial attach="material" color="peachpuff" opacity={0.5} transparent />
      </mesh>
    </group>
  )
}

export default () => {
  return (
    <>
      <Layer id="main-wrapper" fill={1} flex={'row'}>
        <Swiper>
          <Layer flexCenter fill={1}>
            <Canvas>
              <Thing color="#333" vertices={[[21, 1, 1], [12, 1, 0], [1, 12, 0], [1, 21, 0], [1, 1, 0]]} />
            </Canvas>
          </Layer>
          <Layer flexCenter fill={1}>
            B
          </Layer>
          <Layer flexCenter fill={1}>
            C
          </Layer>
        </Swiper>
      </Layer>
      <GlobalStyle />
    </>
  )
}
