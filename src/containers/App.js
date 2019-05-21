import React, { Component } from 'react';
import Comments from '../components/Comments'
import {Provider} from 'react-redux'
import store from '../redux/store'
// const store =createStore(counter);//内部会第一次调用reducer函数得到初始state
class App extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    console.log('componentWillMount');
    // console.log(qs.parse('name=zafgg&age=9&ls=teacher'))
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
 
  render() {

    return (
      <div className="App">
          <Provider store={store}>
          <Comments></Comments>
          </Provider>
      </div>
    );
  }
}
export default App;
