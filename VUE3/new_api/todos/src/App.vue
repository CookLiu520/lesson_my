<template>
  <div>
    <h1 @click="add" class="red">{{ count }}</h1>
  </div>
</template>
<script setup>
import { ref,reactive} from 'vue';
// ref响应式  简单值
let state = reactive({
  count: 1
})
let count = ref(1);
function add(){
  count++;
  state.count++;
}
</script>
<style>
.red{
color: red;
}
</style>