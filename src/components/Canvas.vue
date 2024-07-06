<template>
    <canvas class="canvas" ref="canvas"></canvas>
</template>
<script setup lang="ts">
    import { ref, onMounted, render, computed, watch, onBeforeMount } from 'vue';
    import * as THREE from 'three';
    import { useWindowSize } from '@vueuse/core';

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
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(1, props.roughtness, props.iterations),
        new THREE.MeshBasicMaterial({ color: 0x008080 })
    );

    onBeforeMount(() => {
        camera = new THREE.PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
        camera.position.z = 5;
        scene.add(camera);

        scene.add(sphere);
    })
    
    
    

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
        sphere.geometry.dispose();
        sphere.geometry = new THREE.SphereGeometry(1, props.iterations, props.roughtness);
        renderer.render(scene, camera);
    }

    function remToPixels(rem: number) {
        return rem * 16;
    }
</script>

<style scoped lang="scss">
</style>
