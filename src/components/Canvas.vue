<template>
    <canvas class="canvas" ref="canvas"></canvas>
</template>
<script setup lang="ts">
    import { ref, onMounted, render, computed, watch, onBeforeMount } from 'vue';
    import * as THREE from 'three';
    import ConcreteMeshFactories from '../threejs/factories/MeshFactories';
    import { EnumMaterials } from '../threejs/enums/EnumMaterials';

    const props = defineProps({
        iterations: {
            type: Number,
            default: 1
        },
        roughtness: {
            type: Number,
            default: 1
        }
    });

    let renderer: THREE.WebGLRenderer;
    let camera: THREE.PerspectiveCamera;
    const canvas = ref<HTMLCanvasElement | null>(null);
    const scene = new THREE.Scene();
    const width = remToPixels(50);
    const height = remToPixels(50);
    const aspectRatio = computed(() => 1);
    const boxFactory = ConcreteMeshFactories.createBoxFactory();
    const shape = new THREE.Mesh(
        boxFactory.createMesh(1,1,1,1,1,1),
        new THREE.MeshBasicMaterial({ color: EnumMaterials.SEAFOAM })
    );
    camera = new THREE.PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
    camera.position.z = 5;
    scene.add(camera);
    scene.add(shape);
    
    onMounted(() => {
        renderer = new THREE.WebGLRenderer({
            canvas: canvas.value as unknown as HTMLCanvasElement,
            antialias: true
        });
        updateRenderer();
        updateCamera();

        renderer.render(scene, camera);
    })

    watch(aspectRatio, updateRenderer)
    watch(camera, updateCamera)
    watch(() => props.iterations, updateSphere)
    watch(() => props.roughtness, updateSphere)


    function updateRenderer() {
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
    }

    function updateCamera(){
        camera.aspect = aspectRatio.value;
        camera.updateProjectionMatrix();
    }

    function updateSphere(){
        shape.geometry.dispose();
        shape.geometry = boxFactory.createMesh(1,1,1,1,1,1);
        renderer.render(scene, camera);
    }

    function remToPixels(rem: number) {
        return rem * 16;
    }
</script>

<style scoped lang="scss">
</style>
