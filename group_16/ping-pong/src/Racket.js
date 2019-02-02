import React, { Component } from 'react';

class Racket extends Component {


  
    render() {
        const { position } = this.props;
    
        console.log('RACKET PROPS', this.props);

        const racketStyle = {
            left: position.left,
            top: position.top,
        } 

        return (
            <div className="caret" style={racketStyle} />
        );
    }
}

export default Racket;
