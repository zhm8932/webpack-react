import React from 'react';
import ReactDOM from 'react-dom';
let data = ['Webpack','Gulp','Grunt']
// let Link = React.createClass({
//     render:function () {
//         return <ul>
//             {data.map(function (item,i) {
//                 return <p key={i}>{item}</p>
//             })}
//         </ul>
//     }
// });

export default React.createClass({
    render:function () {
        return <ul>
            {data.map(function (item,i) {
                return <p key={i}>{item}</p>
            })}
        </ul>
    }
});;
// module.exports=Link;