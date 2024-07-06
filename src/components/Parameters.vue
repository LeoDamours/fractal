<template>
    <div class="parameters">
        <h2>Parameters</h2>
        <div class="parameters__content">
            <form>
                <div>
                    <label for="iterations">Iterations :</label>
                    <span class="parameters__content__iteration">
                        <input type="range" id="iterations" name="iterations" max="10" min="1" :value="iterations_value" @change="changeIterationValue">
                        <p>{{ iterations_value }}</p>
                    </span>
                </div>
                <div>
                    <label for="roughtness">Roughtness :</label>
                    <span class="parameters__content__roughtness">
                        <input type="range" id="roughtness" name="roughtness" max="10" min="1" :value="roughtness_value" @change="changeRoughtnessValue">
                        <p>{{ roughtness_value }}</p>
                    </span>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, defineEmits } from 'vue';

    const iterations_value = ref(1);
    const roughtness_value = ref(1);

    const emit = defineEmits(['changeIterations', 'changeRoughtness']);

    function changeRoughtnessValue(event: Event): void {
        if (event.target instanceof HTMLInputElement) {
            roughtness_value.value = validateValue(event.target.value);
            emit('changeRoughtness', roughtness_value.value);
        }
    }

    function changeIterationValue(event: Event): void {
        if (event.target instanceof HTMLInputElement) {
            iterations_value.value = validateValue(event.target.value);
            emit('changeIterations', iterations_value.value);
        }
    }

    function validateValue(value: string | number): number {
        if (typeof value !== 'number') {
            try {
                value = parseInt(value);
            } catch (e) {
                return 1;
            }
        }
        return value;
    }
</script>

<style scoped lang="scss">
    .parameters {
        width: 30%;
        height: 20rem;
        background-color: #f0f0f0;
        border: #f0f0f0 solid 4px;
        border-radius: 5px;
        padding: 10px;

        h2 {
            text-align: center;
        }

        .parameters__content {
            margin-top: 20px;

            form {
                display: flex;
                flex-direction: column;
                align-items: center;

                div {
                    margin-bottom: 10px;

                    label {
                        font-weight: bold;
                    }

                    .parameters__content__iteration, .parameters__content__roughtness {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;

                        input {
                            width: 80%;
                        }

                        p {
                            margin-top: 1rem;
                        }
                    }
                }
            }
        }
    }
</style>
