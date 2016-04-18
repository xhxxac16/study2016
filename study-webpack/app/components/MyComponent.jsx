import './MyComponent.css';
import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="MyComponent-wrapper">
        <h1>Hello world</h1>
      </div>
    )
  }
});

// import React from 'react';
// var style= {
// 	backgroundColor: '#eee'
// };

// export default React.createClass({
//   render: function () {
//     return (
//       <div style={style}>
//         <h1>Hello world</h1>
//       </div>
//     )
//   }
// });