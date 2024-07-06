<template>
    <div class="canvas">
        <canvas class="canvas__panel" ref="canvas"></canvas>
    </div>
</template>
<script setup lang="js">
    import { ref, onMounted } from 'vue';
    import * as THREE from 'three';

    const canvas = ref(null);
    const props = defineProps({
        iterations: Number,
        roughtness: Number
    });

    onMounted(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.value.offsetWidth / window.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(canvas.value.offsetWidth, window.offsetHeight);
        canvas.value.children.append(renderer.domElement);
        
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        function animate() {
            renderer.render( scene, camera );
        }
        renderer.setAnimationLoop( animate );
    });


    
</script>

<style scoped lang="scss">
    .canvas {
        width: 65%;
        height: 40rem;
        background-color: black;
        border-radius: 5px;

        .canvas__panel {
            width: 100%;
            height: 100%;
        }
    }
</style>
