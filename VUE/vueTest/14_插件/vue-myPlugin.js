(
    function () {
        // 需要向外暴露的插件对象
        const MyPlugin = {}
        // 插件对象必须要有一个install方法
        MyPlugin.install = function (Vue, options) {
            // 1. 添加全局方法或 property
            Vue.myGlobalMethod = function () {
                console.log('vue函数对象的方法');
            }

            // 2. 添加全局资源--自定义指令
            Vue.directive('my-directive', function (el,binding) {
                el.textContent = binding.value.toUpperCase()
            })

            // // 3. 注入组件选项
            // Vue.mixin({
            //     created: function () {
            //         // 逻辑...
            //     },
            // })

            // 4. 添加实例方法--放到原型上,实例的方法统一以$开头
            Vue.prototype.$myMethod = function (methodOptions) {
                console.log('vue实例对象的方法');
            }
        }
        window.MyPlugin = MyPlugin// 向外暴露对象
    }
)()