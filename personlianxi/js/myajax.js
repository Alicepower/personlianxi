
function obj2str(obj) {
    var res=[];
    obj.t=new Date.getTime();
    for(var key in obj){
        res.push(encodeURIComponent(key)+"="+ encodeURIComponent(obj[key]));

    }
    return res.join("&");

}

function ajax(url,timeout,obj,success,error) {

    //1创建一个异步对象
    var str=obj2str(obj);
    var variable ,timer;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        variable=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        variable=new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2 设置请求方式和请求地址
    variable.open("get", url+"?t"+str, true);
    //3发送请求
    variable.send();
    //4监听状态的变化

    variable.onreadystatechange = function (ev) {
        if (variable.readyState == 4) {
            if (variable.status >= 200 && variable.status < 300 || variable.status ===304) {
                //5处理返回的结果
          success(variable);
            } else {
                // console.log(" 未接收到服务器的数据");
                 error(variable);
            }


        }
    }




    //判断外界传入超时时间
    if(timeout){
        timer=setInterval(function () {
            variable.abort();
            clearInterval(timer);

        },timeout);


}
}