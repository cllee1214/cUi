<template>
    <button @click="handleClick" :disabled='isDisabled' :class="classes" class="c-button">
        <i :class="iconClass" v-if="iconClass"></i>
        <slot></slot>
    </button>
</template>

<script>
import { computed } from 'vue'
import {buttonTypes} from '../../../const/index.js'
export default {
    name: 'c-button',
    props: {
        disabled: Boolean,
        type: {
            validator:(value) => {
                return buttonTypes.includes(value)
            },
            default: 'default'
        },
        icon: String
    },
    emits: ['click'],
    setup(props) {
        console.log(props)
        const isDisabled = computed(() => {
            return props.disabled
        })
        const classes = computed(() => {
            return [
                `c-button-${props.type}`,
                 props.disabled ? 'disabled': ''
            ]
        })
        const iconClass = props.icon ? props.icon : ''
        return {
            isDisabled,
            classes,
            iconClass
        }
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>


<style lang="scss">
  .c-button{
      height: 36px;
      padding: 0 20px;
      cursor: pointer;
      font-weight: 500;
      i{
          font-size: 14px;
          margin-right: 5px;
      }
      &.disabled{
        cursor:not-allowed
      }
      &.c-button-default{
          background: #fff;
          outline: none;
          border: 1px solid #DCDCDC;
          border-radius: 4px;
          color: rgba(0, 0, 0, 0.75);
          &:hover{
               border: 1px solid #C0C0C0;
               color: #000;
          }
          &.disabled{
              opacity: 0.45;
              background: #fff;
               color: rgba(0, 0, 0, 0.75);
                border: 1px solid #DCDCDC;
          }
      }
      &.c-button-success{
          background: #fff;
          outline: none;
          border: 1px solid #16ab39;
          border-radius: 4px;
          color: #16ab39;
          &:hover{
               border: 1px solid #16ab39;
               background: #16ab39;
               color: #fff;
          }
          &.disabled{
            border: 1px solid #21ba45;
            background: #fff;
            color:#21ba45 ;
            opacity: 0.45;
          }
      }
    &.c-button-warning{
          background: #fff;
          outline: none;
          border: 1px solid #f26202;
          border-radius: 4px;
          color: #f26202;
          &:hover{
               border: 1px solid #f26202;
               background: #f26202;
               color: #fff;
          }
          &.disabled{
            border: 1px solid #f2711c;
            background: #fff;
            color:#f2711c ;
            opacity: 0.45;
          }
      }
     &.c-button-danger{
          background: #fff;
          outline: none;
          border: 1px solid #d01919;
          border-radius: 4px;
          color: #d01919;
          &:hover{
               border: 1px solid #d01919;
               background: #d01919;
               color: #fff;
          }
          &.disabled{
            border: 1px solid #db2828;
            background: #fff;
            color:#db2828 ;
            opacity: 0.45;
          }
      }
       &.c-button-primary{
          background: #fff;
          outline: none;
          border: 1px solid #1678c2;
          border-radius: 4px;
          color: #1678c2;
          &:hover{
            border: 1px solid #1678c2;
            background: #1678c2;
            color: #fff;
          }
         &.disabled{
            border: 1px solid #2185d0;
            background: #fff;
            color:#2185d0 ;
            opacity: 0.45;
         }
          
      }
  }
</style>
