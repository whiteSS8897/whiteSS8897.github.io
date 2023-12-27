<template>
    <table style="display:contents;">
        <th style="width:auto; min-width:80px;"></th>
        <th><div class="header"><div>消逝的旅途</div><img src="/src/assets/imgs/消逝的旅途.png" class="symbol_img"></div></th>
        <th><div class="header"><div>啾啾愛爾蘭</div><img src="/src/assets/imgs/啾啾愛爾蘭.png" class="symbol_img"></div></th>
        <th><div class="header"><div>拉契爾恩</div><img src="/src/assets/imgs/拉契爾恩.png" class="symbol_img"></div></th>
        <th><div class="header"><div>阿爾卡娜</div><img src="/src/assets/imgs/阿爾卡娜.png" class="symbol_img"></div></th>
        <th><div class="header"><div>魔菈斯</div><img src="/src/assets/imgs/魔菈斯.png" class="symbol_img"></div></th>
        <th><div class="header"><div>艾斯佩拉</div><img src="/src/assets/imgs/艾斯佩拉.png" class="symbol_img"></div></th>
        <tr v-for="n in Object.values(arc_prices['Vanishing_Journey']).length" v-bind:key="n">
            <td class="r_head">{{ n }}</td>
            <td data-cell="消逝的旅途"> {{ formatNumber(arc_prices['Vanishing_Journey'][n]) }} </td>
            <td data-cell="啾啾愛爾蘭"> {{ formatNumber(arc_prices['Chu_Chu_Island'][n]) }} </td>
            <td data-cell="拉契爾恩"> {{ formatNumber(arc_prices['Lachelein'][n]) }} </td>
            <td data-cell="阿爾卡娜"> {{ formatNumber(arc_prices['Arcana'][n]) }} </td>
            <td data-cell="魔菈斯"> {{ formatNumber(arc_prices['Morass'][n]) }} </td>
            <td data-cell="艾斯佩拉"> {{ formatNumber(arc_prices['Esfera'][n]) }} </td>
        </tr>
    </table>
</template>


<script setup>
import {computed, reactive, ref, watch, onBeforeMount} from "vue";

import _arc_prices from "/src/assets/ARC_prices.json";
var arc_prices = reactive({});
onBeforeMount(()=>{
    arc_prices = _arc_prices;
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
.r_head{
    background-color:#999999;
    border-top:#dddddd solid 1px;
    text-align: center;
    font-weight:900;
}
</style>
