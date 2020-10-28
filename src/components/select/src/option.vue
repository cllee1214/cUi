<template>
    <div class="c-option-item" @click="handleClick">
        {{label}}
    </div>
</template>
<script>
import {computed, ref, inject} from 'vue'

export default {
    name: 'c-option',
    props: {
        label: String,
        value: String
    },
    setup() {
        const selectModel = inject('selectModel')
        return {
            selectModel
        }
    },
    methods: {
        handleClick() {
            this.selectModel.value = this.value
            this.selectModel.label = this.label
        }
    }

}
</script>