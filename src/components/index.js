
import Button from './button'
import Radio from './radio'
import Input from './input'
import {Select, Option} from './select'

const components = {
    Button,
    Radio,
    Input,
    Select,
    Option
}

const install = function(app, options) {
    for(let key in components) {
        app.component(components[key].name, components[key])
    }
}

const cUi = {
    install 
}

export default cUi
