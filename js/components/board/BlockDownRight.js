import React from 'react';

var BlockDownLeft = React.createClass({
	render: function () {
		return (
			<div ref="container" className="down-right">
				<div className="block-title" style={{height:"0.5rem",lineHeight:"0.5rem"}}>
					<span className="blue-dot" style={{marginLeft:"0.3rem",marginTop:"0.2rem"}}></span>
					<span className="title-text" style={{marginLeft:"0.1rem"}}>title</span>
				</div>
				<div className="block-content" style={{height:"3.36rem",marginTop:"2px"}}>
				content
				</div>
			</div>
		);
	}
});

export default BlockDownLeft;