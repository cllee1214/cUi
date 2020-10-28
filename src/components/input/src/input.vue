<template>
    <div class="c-input">
        <input :disabled='isDisabled'  :class="classes" v-model="value" :type="currentType" :placeholder="placeholder">
        
        <!-- 显示密码 -->
        <span class="c-input-password-view" v-if="isShowPwdBtn" @click="viewPassword">
             <i class="c-icon-view"></i>
        </span>

        <!-- 清空 -->
        <span class="c-input-clear" v-if="modelValue.length && clearable" @click="clearContent">
             <i class="c-icon-circle-close"></i>
        </span>

        <!-- 前后缀icon -->
        <span class="c-fix-icon prefix" v-if="prefixIcon">
            <i :class="prefixIcon"></i>
        </span>
        <span class="c-fix-icon suffix" v-if="suffixIcon">
             <i :class="suffixIcon"></i>
        </span>
    </div>
</template>

<script>
import {computed, ref} from 'vue'
export default {
    name: 'c-input',
    props: {
        modelValue: String,
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        disabled: Boolean,
        clearable: Boolean,
        'show-password': Boolean,
        'prefix-icon': String,
        'suffix-icon': String
    },
    methods: {
        viewPassword() {
            this.isShowPwd = !this.isShowPwd
        },
        clearContent() {
            this.value = ''
        }
    },
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    },
    setup(props) {
        console.log(props)
        const isDisabled = !!props.disabled
        const isShowPwdBtn = props.type == 'password' && props.showPassword
        const isShowPwd = ref(false)
        const currentType = computed(() => {
            if(props.type === 'password' && isShowPwd.value) {
                return 'text'
            }
            return props.type
        })
        const classes = [
            props.disabled ? 'disabled' : '',
            props.prefixIcon ? 'has-prefix': '',
            props.suffixIcon ? 'has-suffix' : ''
        ]
        return {
            isDisabled,
            classes,
            isShowPwdBtn,
            isShowPwd,
            currentType
        }
    }
}
</script>
<style lang="scss">
    .c-input{
        position: relative;
        input{
            height: 40px;
            padding: 10px;
            width: 100%;
            box-sizing: border-box;
            outline: none;
            border-radius: 4px;
            border: 1px solid rgba(34,36,38,.15);
            &:focus{
                border: 1px solid #1678c2;
            }
            &.disabled{
                border: 1px solid rgba(34,36,38,.15);
                background: #fff;
                color: rgba(0,0,0,.5);
                cursor: not-allowed;
            }
        }
        .has-prefix{
            padding-left: 30px;
        }
        .has-suffix{
            padding-right: 30px;
        }
        .c-input-password-view{
            position: absolute;
            height: 100%;
            right: 0;
            width: 30px;
            line-height: 40px;
            cursor: pointer;
        }
        .c-input-clear{
            position: absolute;
            height: 100%;
            width: 30px;
            right: 0;
            line-height: 40px;
            cursor: pointer;
        }
        .c-fix-icon {
            width: 30px;
            line-height: 40px;
            position: absolute;
            &.prefix{
                left: 0;
            }
            &.suffix{
                right: 0;
            }
        }
    }
</style>