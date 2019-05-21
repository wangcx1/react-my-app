import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Transition from './Transition';
import TodoItem from './TodoItem';
import qs from 'qs';
import './static/less/index.less'
import Dialog from './Dialog';
import Banner from './Banner'
import Count from './container/Count'
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import a1 from './static/images/1.png';
import a2 from './static/images/2.png';
import a3 from './static/images/3.png';
import store from './redux/store';
import { Provider } from 'react-redux';
// import {connect} from 'react-redux';
// import {createStore} from 'redux';
// import {counter} from './redux/reducers';
let data = [{ src: a1 }, { src: a2 }, { src: a3 }];

// const store =createStore(counter);//内部会第一次调用reducer函数得到初始state
class App extends Component {
  constructor() {
    super();
    this.sendDataFromChild = this.sendDataFromChild.bind(this);
    this.addComment = this.addComment.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      message: 'hello world',
      comments: [
        { author: 'wwww', time: new Date().getTime(), comment: '西河是一个' }
      ],
      flag: false,
      tel: ['10010', '10086', '10000']
    }
  }
  componentWillMount() {
    console.log('componentWillMount');
    console.log(qs.parse('name=zafgg&age=9&ls=teacher'))
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  // react生命周期分为三个部分：
  // 1、实例化：componentWillMount：即将进入dom  ,Render:组件渲染，componentDidMouth：已经进入dom
  // 2、存在期:数据更新过程：触发时期：this.setState更新状态
  // 1、componentWillReceiveProps 父组件发生render的时候子组件就会调用
  // 2、shouldComponentUpdate：判断是否需要重新渲染组件
  // 3、componentWillUpdate：组件即将重新渲染
  // 4、Render：组件渲染
  // 5、componentDidUpdate：组件重新渲染完成
  //3、 销毁时：componentWillUnmount
  addComment() {
    let commentObj = {
      author: this.refs.author.value,
      time: new Date().getTime(),
      comment: this.refs.comment.value
    }
    console.log(commentObj)
    this.state.comments.push(commentObj);
    this.setState({
      comments: this.state.comments
    })
  }
  sendDataFromChild(val) {
    console.log(val);
    this.setState({
      message: val
    })
  }
  formateTime(timestamp) {
    let minutes = (new Date() - timestamp) / 1000 / 60;
    minutes = Math.floor(minutes);
    if (minutes < 1) {
      return '刚刚'
    } else {
      return minutes + '分钟前'
    }
  }
  toggle() {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {

    return (
      <div className="App">
        <Banner items={data}
          speed={1.2}
          delay={2.1}
          autoplay={true}
          dots={true}
          arrow={true}
        />
        <Provider store={store}>
          <Count />
        </Provider>

        {/* <Dialog/> */}
        {/* <Dialog title='世界杯小组赛韩国国VS秘鲁，秘鲁队必胜！' /> */}
        <Dialog type="我有子元素" content={<div>
          <input type="text" className="form-control" placeholder='username'/>
          <input type="text" className="form-control" placeholder='password'/>
          </div>}>
            <button className='btn-success btn'>提交</button>
        </Dialog>
        {/* <Router>
        <div>
          <div className='navbar'>
            <NavLink exact activeClassName="active" to='/'>主页</NavLink>
            <NavLink activeClassName="active" to='/news'>新闻</NavLink>
          </div>
          <hr/>
          <Switch>
            <Route exact path='/' component={TodoList}/>
            <Route exact path='/news' component={Transition}/>
            <Route path="/detail/:tel" component={TodoItem}/>
            <Redirect from='/*' to='/'/>
          </Switch>
        </div>
      </Router> */}
        {/* <button onClick={this.toggle}>切换</button>
       {this.state.flag?'':<TodoList sendDataFromChild={this.sendDataFromChild}/>}
        <h2>留言板</h2>
        <div className="comments">
          {this.state.comments.map((item,index)=>{
            return <div key={index}>
              <span>{item.author}</span> 
              <span>{this.formateTime(item.time)}</span>
              <p>{item.comment}</p>
            </div>
          })}
        </div>
        <input type="text" ref="author"/><br/>
        <textarea ref="comment"></textarea><br/>
        <button onClick={this.addComment}>发表留言</button> */}
        {/* <h1>{this.state.message}</h1>

        <TodoList sendDataFromChild={this.sendDataFromChild}/> */}
        {/* <Transition/> */}
      </div>
    );
  }
}
export default App;
