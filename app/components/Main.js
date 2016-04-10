var React = require('react');

var Main = React.createClass( {
    render: function () {
        return (
           <div>
               <h3>Main</h3>
               { this.props.children}
           </div>
        )
    }
})


module.exports = Main;