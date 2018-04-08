import Dialog from './components/dialog.vue';
const install = function(Vue){
    Vue.test=function(){
        console.log('suc');
    };
    const newModal=new Vue({
        methods:{
            build(options){
                const modal=Vue.extend({
                    components:{
                        Dialog
                    },
                    render:h=>
                        h(
                            'Dialog',{
                                props:{
                                    txt:options.txt,
                                    fun:options.fun,
                                    title:options.title,
                                    type:options.type,
                                    src:options.src
                                }
                            }
                        )
                });
                return modal;
            },
            show(options){
                const modal=this.build(options);
                var show=new modal().$mount();
                document.getElementsByClassName('router-view')[0].appendChild(show.$el);
            }
        }
    });
    Vue.prototype.$show=newModal;
};
export default install;