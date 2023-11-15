import React, { Component } from 'react';

class ClickCounter extends Component {
    render() {
        const { count,incrimentCount } = this.props
        return (
            <div>
                <button onClick={incrimentCount}>counted{count}times</button>
                
            </div>
        );
    }
}

export default ClickCounter
