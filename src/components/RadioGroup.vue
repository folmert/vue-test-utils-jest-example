<template>
    <div>
        <label><input v-model="folder" type="radio" name="folder" value="new"> New</label>
        <label><input v-model="folder" type="radio" name="folder" value="existing"> Existing</label>

        <div class="selected">Selected: {{folder}}</div>
    </div>
</template>

<script>
export default {
    name: 'RadioGroup',
    data () {
        return {
            folder: ''
        }
    }
}
</script>
