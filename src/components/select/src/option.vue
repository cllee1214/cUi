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
    setup(props) {
        const selectModel = inject('selectModel')
        if(props.value === selectModel.value) {
            selectModel.label = props.label
        }
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