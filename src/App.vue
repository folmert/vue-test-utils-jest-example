<template>
  <div id="app">
    <message-toggle />
    <list :items="['list item 1', 'listen item 2']" />
    <radio-group />
  </div>
</template>

<script>
import MessageToggle from '@/components/MessageToggle.vue'
import List from '@/components/List.vue'
import RadioGroup from '@/components/RadioGroup.vue'

export default {
  components: {
    MessageToggle,
    List,
    RadioGroup
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
