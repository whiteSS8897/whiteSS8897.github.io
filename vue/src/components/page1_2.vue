<template>
    <table style="display:contents;">
        <th><div class="header"><div>賽爾尼溫</div><img src="/src/assets/imgs/賽爾尼溫.png" class="symbol_img"></div></th>
        <th><div class="header"><div>阿爾克斯</div><img src="/src/assets/imgs/阿爾克斯.png" class="symbol_img"></div></th>
        <th><div class="header"><div>奧迪溫</div><img src="/src/assets/imgs/奧迪溫.png" class="symbol_img"></div></th>
        <th><div class="header"><div>桃園境</div><img src="/src/assets/imgs/桃園境.png" class="symbol_img"></div></th>
        <th><div class="header"><div>阿爾特利亞</div><img src="/src/assets/imgs/阿爾特利亞.png" class="symbol_img"></div></th>
        <th><div class="header"><div>卡爾西溫</div><img src="/src/assets/imgs/卡爾西溫.png" class="symbol_img"></div></th>
        <tr v-for="n in Object.values(aut_prices['Cernium']).length" v-bind:key="n">
            <td data-cell="消逝的旅途"> {{ formatNumber(aut_prices['Cernium'][n]) }} </td>
            <td data-cell="啾啾愛爾蘭"> {{ formatNumber(aut_prices['Arcus'][n]) }} </td>
            <td data-cell="拉契爾恩"> {{ formatNumber(aut_prices['Odium'][n]) }} </td>
            <td data-cell="阿爾卡娜"> {{ formatNumber(aut_prices['Shangri_La'][n]) }} </td>
            <td data-cell="魔菈斯"> {{ formatNumber(aut_prices['Arteria'][n]) }} </td>
            <td data-cell="艾斯佩拉"> {{ formatNumber(aut_prices['Carcion'][n]) }} </td>
        </tr>
    </table>
</template>


<script setup>
import {computed, reactive, ref, watch, onBeforeMount} from "vue";

import _aut_prices from "/src/assets/AUT_prices.json";
var aut_prices = reactive({});
onBeforeMount(()=>{
    aut_prices = _aut_prices;
})

const Sum_of_Nums = (arr)=>{return arr.reduce((a,b)=>a+b);}
const formatNumber = (num)=>{return num.toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}
</script>


<style scoped>
table{
    width:100%;
    border-collapse:collapse;
}
th{
    background-color:#888888;
    padding:10px 0;
    min-width:130px;
    max-width:130px;
}
th,td{
    border-right:#dddddd solid 1px;
}
td{
    padding:5px 20px;
    text-align:end;
}
tr:nth-child(2n){
    background-color:#c0c0c0;
}
tr:nth-child(2n+1){
    background-color:#cccccc;
}
.symbol_img{
    width:30px;
    margin:0 300px;
}
.header{
    display:flex;
    justify-content:center;
    height:100%;
    align-content:center;
    flex-wrap:wrap;
}
</style>
