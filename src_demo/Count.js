import React from 'react';
import PropTypes from 'prop-types';

 export default class Count extends React.Component {
    static propTypes={
        count:PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired,
        incrementAsync:PropTypes.func.isRequired
    }
    constructor() {
        super();

    }
    increment = () => {
        let num = this.select.value * 1;
        this.props.increment(num);
        //    let count=this.state.count;
        //    count=count+num;
        //     this.setState({
        //         count:count
        //     })
    }
    decrement = () => {
        let num = this.select.value * 1;
        let count=this.props.count;
        // count = count - num;
        if (count <= 0) {
            num = 0;
            // this.setState({
            //     count:count
            // })
            this.props.decrement(num);
        }
        this.props.decrement(num);
        //  this.setState({
        //      count:count
        //  });
    }
    incrementOdd = () => {
        let num = this.select.value * 1;
        //  let count=this.state.count;
        if (num % 2 == 1) {
            this.props.increment(num);
            // this.setState({
            //     count:count+num
            // });
        }

    }
    incrementAsync = () => {
        let num = this.select.value * 1;
        this.props.incrementAsync(num);
        // let count = this.state.count;
        // setTimeout(() => {
        //     this.props.increment(num);
        //     // this.setState({
        //     //     count: count + num
        //     // })
        // }, 1000)
    }
    render() {
        console.log(this.props.count)
        const {count} = this.props;
        
        return <div>
            <p>click {count} times</p>
            <div>
                {/* <input value='1'/>&nbsp;&nbsp; */}
                <select ref={select => this.select = select}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>&nbsp;+&nbsp;</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>&nbsp;-&nbsp;</button>&nbsp;&nbsp;
                <button onClick={this.incrementOdd}>increment if odd</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>async</button>
            </div>
        </div>
    }
}
