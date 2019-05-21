/**
 * 函数式声明组件
 *  1、函数返回结果是一个新的JSX（也就是当前组件的JSX结构）
 * 2、props变量存储的值是一个对象，包含了调取组件时候传递的属性值（不传递是一个空对象）
 */
import React from 'react';
import PropTypes from 'prop-types'
class Head extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className='panel-heading'>
            <h3 className='panel-title'>点击次数：{this.props.n}</h3>
        </div>
    }
}
class Body extends React.Component{
    constructor(props){
        super(props);
        // this.setParent=this.setParent.bind(this);
    }
    // setParent(){
    //     this.props.setNumber();
    // }
    render(){
        return <div className='panel-body'>
            <button className='btn btn-success' onClick={this.props.setNumber}>点我啊！</button>
        </div>
    }
}
class Dialog extends React.Component{
    constructor(){
        super();
        this.state={
            n:0
        }
        this.setNumber=this.setNumber.bind(this);
    }
    setNumber(){
        console.log(111)
        let n=this.state.n;
        this.setState({
            n:n+1
        })
    }
    render(){
        return <div className='panel panel-default' style={{width:'50%',margin:'20px auto'}}>
            <Head n={this.state.n} />
            <Body setNumber={this.setNumber}/>
        </div>
    }
}
export default Dialog;
// class Dialog extends React.Component{
//     // 组件传递的属性是只读的，我们为其设置默认值和相关规则
//     static defaultProps={};
//     static propTypes={
//         title:PropTypes.string.isRequired
//     }
//     constructor(props){
//         super(props);
//         this.state={
//             // date:new Date().toLocaleString()
//             s:0,
//             o:0,
//             text:'请输入....'
//         }
//         this.support=this.support.bind(this);
//         this.oppose=this.oppose.bind(this);
//         this.inputValue=this.inputValue.bind(this);
//     }
//     componentDidMount(){
//         // setInterval(()=>{
//         //    this.setState({
//         //        date:new Date().toLocaleString()
//         //    })
//         // },1000);
        
//     }
//     support(){

//         let s=this.state.s;
//         this.setState({
//             s:s+1
//         })
//     }
//     oppose(){
//         let o=this.state.o;
//         this.setState({
//             o:o+1
//         })
//     }
//     inputValue(ev){
//         this.setState({
//             text:ev.target.value
//         })
//         // console.log(ev.target.value)
//     }
//     render(){
//         let {s,o,text}=this.state;
//         let rate=(s+o===0?'0%':((s/(s+o))*100).toFixed(2)+'%');
//         return <div className='panel panel-default' style={{width:'60%',margin:'20px auto'}}>
//             <div className='panel-heading'>
//                 <h3 className='panel-title'>{this.props.title}</h3>
//             </div>
//             <div className='panel-body'>
//                 支持人数：<span>{s}</span>
//                 <br/>
//                 反对人数：<span>{o}</span>
//                 <br/>
//                 支持率：<span>{rate}</span>
//             </div>
//             <div className='panel-footer'>
//                 <button className='btn btn-success' style={{margin:'0 10px'}} onClick={this.support}>支持</button>

//                 <button className='btn btn-danger' onClick={this.oppose}>反对</button>
//             </div>
//             <div className='panel panel-default'> 
//                 <h2 className='panel-heading'>数据绑定</h2>
//                 <div className='panel-body'>
//                     <input type='text' className='form-control' value={text} onChange={this.inputValue}/>
//                 </div>
//                 <div className='panel-footer'>
//                     {text}
//                 </div>
//             </div>
//             {/* <h3>当前北京时间</h3>
//             <div>{this.state.date}</div> */}
//         </div>
//     }
// }
// export default Dialog;
// export default function Dialog(props){
//     // let objStyle={'width':'50%','margin':'0 auto','text-align':'center'}
//     // let {type,content,children}=props;
//     // // 类型的处理：type
//     // let typeValue=type||'系统提示';
//     // if(typeof type==='number'){
//     //     switch (type){
//     //         case 0: typeValue='系统提示';
//     //         break;
//     //         case 1:typeValue='系统警告';
//     //         break;
//     //         case 2:typeValue='系统错误';
//     //         break;
//     //         default :typeValue="系统正常"
//     //     }
//     // }
//     // return <div>
//     //     <section className="panel panel-default" style={objStyle}>
//     //         <div className='panel-heading'>
//     //             <h3 className='panel-title'>{typeValue}</h3>
//     //         </div>
//     //         <div className='panel-body'>
//     //             {content}
//     //         </div>
//     //         {children? <div className='panel-footer'>
//     //         {React.Children.map(children,item=>item)} 
//     //         </div>:null}
           
//     //     </section>
//     // </div>
//     return <div>
//         <h3>当前北京时间</h3>
//         <div>{new Date().toLocaleString()}</div>
//     </div>
// }