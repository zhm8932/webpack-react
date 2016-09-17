import React from 'react';
import ReactDOM from 'react-dom';
let data = ['Webpack','React','ES6!','localStorage'];

export default React.createClass({
    render:function () {
        return <ul>
            {data.map(function (item,i) {
                return <li key={i}>{item}</li>
            })}
        </ul>
    }
});
