<template>
<div style="margin:100px 100px;">
    <div style="width:200px;">
        <v-slider
        v-model="light"
        :min="0" :max="100" :step="1"
        append-icon="mdi-lightbulb-on-10"
        hide-details thumb-label thumb-size="10"/>
    </div>
</div>
{{ light }}
</template>


<script setup>
import {computed, reactive, ref, watch, onMounted} from "vue";
const light = ref(0)
</script>


<style scoped>
</style>
