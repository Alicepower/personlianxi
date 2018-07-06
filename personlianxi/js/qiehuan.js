
$(function () {
    /*单机切换*/
    $(".switch  li").click(
        function () {
            /*每个li下属的div*/
            var divShow = $(".content").children("div");
            /*利用selected进行判断*/
            if (!$(this).hasClass("selected")) {
                /*li标签的顺序和div的顺序是对应的，获取索引*/
                var index = $(this).index();
                /*当前对象设置class属性*/
                $(this).addClass("selected");
                /*移除其他同级元素属性*/
                $(this).siblings("li").removeClass("selected");
                /*展示当前li对应的div内容,利用方法显示和隐藏*/
                $(divShow[index]).show();
                /*隐藏同级元素*/
                $(divShow[index]).siblings("div").hide();
            }
        }
    )
})
