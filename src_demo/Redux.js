import React from 'react';
import {createStore} from 'redux'
import {counter} from './redux/reducers'
const store =createStore(counter);//内部会第一次调用reducer函数得到初始state
class Redux extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            
        </div>
    }
}