// var $ = require('jquery');
// import React from 'react';
// import ReactDOM from 'react-dom';
import Link from './page.jsx';
import com from './component';


// console.log(name,age);
console.log("com:",com);
console.log("com:",com.jop);

// console.log(component.jop);
require('../less/base.less');
require('../sass/main.scss');



$('#app').html('你好！！!');


require('./components/App');

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

