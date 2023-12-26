<template>
    <div v-if="flag === true"></div>
    <!-- {{ arc_prices_path }}<br> -->
    {{ arc_prices }}
</template>


<script setup>
import {computed, reactive, ref, watch, onBeforeMount} from "vue";

// import arc_prices_path from "/ARC_prices.json?url";
var arc_prices = reactive({});
const flag = ref(false)
onBeforeMount(()=>{
    // arc_prices = arc_prices_path;
    // console.log(arc_prices)
    fetch("./ARC_prices.json?url")
    .then(res=>{return res.json()})
    .then(res=>{
        arc_prices = res;
        console.log(arc_prices);
        flag.value = true;
    })
})
</script>


<style scoped>
</style>
