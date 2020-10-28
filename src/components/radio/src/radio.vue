<template>
    <div class="c-radio-item">
        <input type="radio" :value="label" v-model="model" :name='name' @change='handelChange'>
        <label for="">
            <slot></slot>
        </label>
    </div>
</template>

<script>
import {ref, computed} from 'vue'
export default {
    name: 'c-radio',
    props: {
        modelValue: String,
        label: String,
        name: String
    },
    setup(props) {
        const model = computed(() => {
            return props.modelValue
        })
        return {
            model
        }
    },
    methods: {
        handelChange(e) {
            console.log(e.target.value)
            console.log(this.modelValue)
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>