// File for flying rocket model that the user

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Matrix4, Quaternion, Vector3 } from 'three'
import { updatePlaneAxis } from '../utils/controls'

const x = new Vector3(1, 0, 0)
const y = new Vector3(0, 1, 0)
const z = new Vector3(0, 0, 1)
export const rocketPosition = new Vector3(0, 4, 20)

const delayedRotMatrix = new Matrix4()
const delayedQuaternion = new Quaternion()

export function Rocket(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/rocket_rider.glb')
  const { actions } = useAnimations(animations, group)

  // Play default animation
  useEffect(() => {
    actions['Take 001'].play();
  }, [actions]);

  useFrame(({ camera }) => {
    updatePlaneAxis(x, y, z, rocketPosition, camera)

    const rotMatrix = new Matrix4().makeBasis(x, y, z)

    const matrix = new Matrix4()
      .multiply(new Matrix4().makeTranslation(rocketPosition.x, rocketPosition.y, rocketPosition.z))
      .multiply(rotMatrix)

    group.current.matrixAutoUpdate = false
    group.current.matrix.copy(matrix)
    group.current.matrixWorldNeedsUpdate = true

    const quaternionA = new Quaternion().copy(delayedQuaternion)
    const quaternionB = new Quaternion().setFromRotationMatrix(rotMatrix)

    const interpolationFactor = 0.175
    const interpolatedQuaternion = new Quaternion().copy(quaternionA)
    interpolatedQuaternion.slerp(quaternionB, interpolationFactor)
    delayedQuaternion.copy(interpolatedQuaternion)

    delayedRotMatrix.identity().makeRotationFromQuaternion(delayedQuaternion)

    const cameraMatrix = new Matrix4()
      .multiply(new Matrix4().makeTranslation(rocketPosition.x, rocketPosition.y, rocketPosition.z))
      .multiply(delayedRotMatrix)
      .multiply(new Matrix4().makeRotationX(-0.2))
      .multiply(new Matrix4().makeTranslation(0, 0.015, 0.3))

    camera.matrixAutoUpdate = false
    camera.matrix.copy(cameraMatrix)
    camera.matrixWorldNeedsUpdate = true
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, Math.PI / 3]} scale={0.0003}>
          <group name="648d44d75b514670a133ce6e37da93c6fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.rocket_mtl} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.character_mtl} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.fire_mtl} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.fire_mtl} skeleton={nodes.Object_13.skeleton} />
                  <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.fire_mtl} skeleton={nodes.Object_15.skeleton} />
                  <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.fire_mtl} skeleton={nodes.Object_17.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/rocket_rider.glb')