import React from 'react';
import './Banner.css';

class Banner extends React.Component {

    msgRef = React.createRef();

    componentWillUpdate() {
        this.msgRef.current.classList.remove("invisible"); 
    }

    componentDidUpdate() {
        setTimeout(() => {
            document.querySelector(".banner-msg").classList.add("invisible");
        }, 3000);
    }

    render() {
        return (
            <div className="banner-msg invisible" ref={this.msgRef}>{this.props.msg}</div>
        );
    }
}

export default Banner;