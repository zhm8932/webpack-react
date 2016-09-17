// var $ = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import Link from './page.jsx';
import com from './component';


var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generateMixed(n) {
    var res = "";
    for(var i = 0; i < n ; i ++) {
        var id = Math.ceil(Math.random()*35);
        res += chars[id];
    }
    return res;
}

generateMixed(6);

// console.log(name,age);
console.log("com:",com);
console.log("com:",com.jop);
console.log("generateMixed:",generateMixed(6));
// console.log(component.jop);
require('./base.less');
$('#app').html('你好!');

let time = moment().locale('zh-cn').format('LLLL');

console.log('引入jquery:',time)

ReactDOM.render(<Link />,document.querySelector("#content"));


//这个变量是defineplugin挂载到全局对象下面的
// console.log("___DEV___:",___DEV___)
//
// if(___DEV___){
//     console.log('这是开发环境333');
//     console.log('这是开发环境的日志，只有开发环境才能输出');
// }else{
//     console.log('这是生产环境');
// }

