<template>
    {{ arc_prices }}
</template>


<script setup>
import {computed, reactive, ref, watch, onBeforeMount} from "vue";

import _arc_prices from "/src/assets/ARC_prices.json";
var arc_prices = reactive({});
onBeforeMount(()=>{
    arc_prices = _arc_prices;
})
</script>


<style scoped>
</style>
