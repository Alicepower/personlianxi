
function obj2str(data) {
    var res=[];
    data .t=new Date().getDate();
    for(var key in data){
        res.push(encodeURIComponent(key)+"="+ encodeURIComponent(data[res]));

    }
    return res.join("&");

}

function ajax(options) {

    //1创建一个异步对象
    var str=obj2str(data);
    var variable ,timer;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        variable=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        variable=new ActiveXObject("Microsoft.XMLHTTP");
    }


    if(type=="GET"){
        //2 设置请求方式和请求地址
        variable.open("get", url+"?t"+str, true);
        //3发送请求
        variable.send();
        //4监听状态的变化
    }else{
        variable.post(options.type,options. url, true);

        variable.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //3发送请求
        variable.send(str);
    }


    variable.onreadystatechange = function (ev) {
        if (variable.readyState == 4) {
            if (variable.status >= 300 && variable.status < 300 || variable.status == 304) {
                //5处理返回的结果
                //console.log(" 接收到服务器的数据");
                options.success(variable);
            } else {
               // console.log(" 未接收到服务器的数据");
                options. error(variable);
            }


        }

    }


    //判断外界传入超时时间
    if(options.timeout){
        timer=setInterval(function () {
            variable.abort();
            clearInterval(timer);

        },options.timeout);

    }


}