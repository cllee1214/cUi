<template>
    <div class="c-select">
        <c-input v-model="inputModel" readonly placeholder='请选择' :suffix-icon='arrowClass' @click="dropSelect"></c-input>
        <div class="c-options">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import {computed, ref, provide, watchEffect, reactive} from 'vue'
export default {
    name: 'c-select',
    props: {
        modelValue: String
    },
    setup(props) {
     
        const selectModel = reactive({
            value: props.modelValue,
            label: ''
        })
        const inputModel = computed(() => {
            return selectModel.label
        })
        const arrowDir = ref('down')
        const arrowClass = computed(() => {
            return 'c-icon-arrow-' + arrowDir.value
        })

        provide('selectModel', selectModel)

        return {
            inputModel,
            arrowDir,
            arrowClass,
            selectModel
        }
    },
    methods: {
        dropSelect() {
            this.arrowDir = this.arrowDir === 'down' ? 'up' : 'down'
        }
    },
    watch: {
        selectModel: {
            handler: function(newValue, oldValue) {
                this.$emit('update:modelValue', this.selectModel.value)
            },
            deep: true
        }
    }
}
</script>