<template>
    <div class="raid_power_area">
        <div style="background-color:#ffff88; display:flex; justify-content:center; padding:8px;">戰地硬幣小算盤</div>
        <div style="background-color:#ffffbb66; padding:5px; text-align:center;">
            戰鬥力：<input type=text class="raid_power_input" v-model="raid_power_display">
            <br>
        </div>
    </div>
    <div>每 {{ Round_to(100000000000/raid_power,2).toLocaleString('en-US',{maximumFractionDigits:20}) }} 秒獲得一個硬幣</div>
    <div>每天獲得 {{ Round_to(86400/100000000000*raid_power,2).toLocaleString('en-US',{maximumFractionDigits:20}) }} 個硬幣</div>
    <div>每周獲得 {{ Round_to(86400/100000000000*raid_power*7,2).toLocaleString('en-US',{maximumFractionDigits:20}) }} 個硬幣</div>
    
</template>


<script setup>
import {computed, reactive, ref, watch, onBeforeMount} from "vue";

const Sum_of_Nums = (arr)=>{
    if(arr.length === 0){return 0;}
    return arr.reduce((a,b)=>a+b);
}

const raid_power = ref(0);
const raid_power_display = ref(0);
watch(raid_power_display,(new_num)=>{
    let arr = new_num.split("");
    let temp = new Array();
    let temp_flag = (arr.indexOf(".") === arr.length-1 && arr.length !== 0);
    for(let c of arr){if(!isNaN(c) || c==="."){temp.push(c);}}
    if(isNaN(Number(temp.join("")))){temp.pop();}
    temp = Number(temp.join(""));
    raid_power.value = temp;
    temp = temp.toLocaleString('en-US',{maximumFractionDigits:20});
    temp = temp.toString();
    if(temp_flag){temp += ".";}
    raid_power_display.value = temp;
})
const Round_to = (num,f)=>{return Math.round(num*10**f)/10**f;}
</script>


<style scoped>
input{
    background-color:#ffffff;
    border:#888888 solid 1px;
    border-radius:6px;
    text-align:center;
}
.raid_power_input{
    width:200px;
    font-size:18px;
}
.raid_power_area{
    width:300px;
}
</style>
