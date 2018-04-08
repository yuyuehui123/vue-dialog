# vue-dialog   ＜/br＞
vue对话框组件  ＜/br＞ 

//main.js  ＜/br＞
1.导入vue-dialog  ＜/br＞
import VueDialog from './vue-dialog'  ＜/br＞

//app.vue
1.给router-view或者外层div添加class  router-view  ＜/br＞
  <router-view class="router-view"></router-view>   ＜/br＞
  
//***.vue  ＜/br＞
1.组件中使用方法this.$show.show  ＜/br＞
  methods:{             ＜/br＞
    ...//   ＜/br＞
    test(){    ＜/br＞
                this.suc='back';＜/br＞
                console.log(this.suc);＜/br＞
    },＜/br＞
    showModal(){＜/br＞
                this.$show.show({＜/br＞
                    fun:this.test,         //confirm时，点确认所触发的函数＜/br＞
                    title:'俞樾珲',         //dialog标题＜/br＞
                    txt:'你是猪吗',         //dialog内容＜/br＞
                    type:'confirm',       //类型，不选默认为alert，只有关闭按钮，confirm有确认和关闭2个按钮＜/br＞
                    src:'../img/icon.png' //标题旁的图片，相对于 dialog.vue的路径，不填只显示标题的字＜/br＞
                });＜/br＞
    }＜/br＞
  }＜/br＞
//example＜/br＞
 ![image]( https://github.com/yuyuehui123/vue-dialog/1.jpg)＜/br＞
 ![image]( https://github.com/yuyuehui123/vue-dialog/2.jpg)＜/br＞
