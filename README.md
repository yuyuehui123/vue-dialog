# vue-dialog    
vue对话框组件    

//main.js  
1.导入vue-dialog  
import VueDialog from './vue-dialog'  

//app.vue
1.给router-view或者外层div添加class  router-view     
  <router-view class="router-view"></router-view>    
  
//***.vue  
1.组件中使用方法this.$show.show  
  methods:{                 
    ...//     
    test(){      
                this.suc='back';  
                console.log(this.suc);  
    },   
    showModal(){   
                this.$show.show({   
                    fun:this.test,         //confirm时，点确认所触发的函数  
                    title:'俞樾珲',         //dialog标题  
                    txt:'你是猪吗',         //dialog内容  
                    type:'confirm',       //类型，不选默认为alert，只有关闭按钮，confirm有确认和关闭2个按钮   
                    src:'../img/icon.png' //标题旁的图片，相对于 dialog.vue的路径，不填只显示标题的字   
                });     
    }   
  }  
//example  
 ![image]( https://github.com/yuyuehui123/vue-dialog/1.jpg)  
 ![image]( https://github.com/yuyuehui123/vue-dialog/2.jpg)  
