<template>
    <div id="showModal">
        <div class="show-modal-content">
            <div class="show-modal-content-title">
                <i v-if="src" class="show-modal-content-title-icon" :style="style"></i>
                <span>{{title}}</span>
            </div>
            <div class="show-modal-content-content">
                <p>{{txt}}</p>
            </div>
            <div class="show-modal-content-button">
                <button v-if="type=='confirm'" @click="handleClick" style="background-color: #2d8cf0;">确认</button>
                <button @click="close">关闭</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    #showModal{
        position: fixed;
        text-align: center;
        top: 0;
        bottom: 0;
        left: 0;
        right:0;
        background-color: rgba(0,0,0,0.6);
        margin: auto;
        z-index: 10;
    }
    .show-modal-content{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right:0;
        width:400px;
        height:300px;
        background: rgba(255,255,255,0.9);
        margin: auto;
        z-index: 20;
        border-radius: 10px;
        opacity: 1;
    }
    .show-modal-content-title{
        color:#666;
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        border-bottom: 1px solid #ccc;
        height:50px;
        line-height: 50px;
        box-sizing: border-box;
    }
    .show-modal-content-title span{
        display: inline-block;
        vertical-align: middle;
    }
    .show-modal-content-title-icon{
        display: inline-block;
        width:30px;
        height:30px;
        background: #ddd no-repeat center center;
        background-size: 100% 100%;
        vertical-align: middle;
        border-radius: 50%;
    }
    .show-modal-content-content{
        height:180px;
        padding:40px;
        box-sizing: border-box;
        font-size: 24px;
        color:#333;
    }
    .show-modal-content-button{
        height:70px;
        text-align: center;
        border-top: 1px solid #ccc;
        box-sizing: border-box;
        line-height: 70px;
    }
    .show-modal-content-button button{
        padding:8px 32px;
        margin:0 32px;
        font-size: 16px;
        border-radius: 5px;
        background-color: #ff5500;
        border: none;
        outline: none;
        color: white;
        position: relative;
        vertical-align: middle;
    }
    .show-modal-content-button button:active{
        top:1px;
        left:1px;
    }
</style>
<script>
    export default {
        props:{
            fun:{
                type:Function,
                default:function(){
                    console.log('no fun');
                }
            },
            txt:{
                type:String,
                default:'请输入内容'
            },
            title:{
                type:String,
                default:'请输入标题'
            },
            src:{
                type:String,
                default:null
            },
            type:{
                type:String,
                default:'alert'
            }
        },
        computed:{
            style(){
                return {
                    'background-image':'url('+this.src+')'
                }
            }
        },
        methods:{
            handleClick(){
                this.fun();
            },
            close(){
                const node=document.getElementById('showModal');
                document.getElementsByClassName('router-view')[0].removeChild(node);
            }
        }
    }
</script>