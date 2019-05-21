/*
createElement:创建JSX对象
参数：至少要传两个参数：type props
*/
function createElement(type,props,...childrens){
   let ref,key;
    if('ref' in props){
        ref=props.ref;
    }
    if('key' in props){
        ref=props.ref;
    }

    // 'key' in obj.props?(obj.key=obj.props.key,obj.props.key=undefined):null;
    // 'ref' in obj.props?(obj.ref=obj.props.ref,obj.props.ref=undefined):null;
    return {
        type,
        props:{
            ...props,
            children:childrens.length<=1?(childrens[0]||''):childrens
        },
        ref,
        key
    };
}
// console.log(createElement('h1',{id:'titleBox',className:'title',style:{color:'red'},ref:'AA',key:'12'},'111'));

// {
// type:'h1',
// props:{
//     id:'titleBox',
//     className:'title',
//     style:{color:'red'},
//     ref:undefined,
//     key:undefined,
//     children:'22222'
// },
// ref:'AA',
// key:'12'

// }

// Render:把创建的对象生成对应的DOM元素，最后插入到页面中


function rendert(obj,container,callBack){
    let {type,props}=obj||{};
  let  newElement=document.createElement(type);
  for(let attr in props){
    if(!props.hasOwnProperty(attr))break;//不是私有的直接结束遍历
    if(!props[attr])continue; //如果当期那属性没有值，直接不处理即可
        let value=props[attr];
        switch (attr.toUpperCase()){
            case 'CLASSNAME': newElement.setAttribute('class',value);
            break;
            case 'STYLE':if(value==='')break;
            for(let sty in value){
                if(value.hasOwnProperty(sty)){
                    newElement['style'][sty]=value[sty]
                }
            }
            break;
            case 'CHILDREN':
            /* 可能是一个数组：数组中的每一项可能是字符串，也可能是JSX对象
            可能是一个值：可能是字符串也可能是一个JSX对象
            首先把一个值变为一个数组，这样后期统一操作数组即可
            */
            !(value instanceof Array)?value=[value]:null;
            console.log(value)
            for(let i=0;i<value.length;i++){
                var item=value[i];
                console.log(item)
                if(typeof item === 'string'){
                    let text=document.createTextNode(item);
                    newElement.appendChild(text);
                }else{
                    rendert(item,newElement);
                }
            }
            // value.foreach((item,index)=>{
            //     // 验证item类型，如果是字符串就是直接创建文本节点，如果是对象，我们需要再次执行render方法，把创建的元素房东啊最开始创建的大盒子中
            //     if(typeof item === 'string'){
            //         let text=document.createTextNode(value);
            //         newElement.appendChild(text);
            //     }else{
            //         rendert(item,newElement);
            //     }
                
            // })
            break;
            default:newElement.setAttribute(attr,value);
        }
    // className的处理
    // if(attr==='className'){
    //     newElement.setAttribute('class',value);
    //     continue;
    // }
    // if(attr==='style'){
    //     if(value==='')continue;
    //     for(let sty in value){
    //         if(value.hasOwnProperty(sty)){
    //             newElement['style'][sty]=value[sty]
    //         }
    //     }
    //     continue;
    // }
    // if(attr==='children'){
    //     if(typeof value ==='string'){
    //         let text=document.createTextNode(value);
    //         newElement.appendChild(text);
    //     }
    //     continue;
    // }
    //基于setAttribute可以让设置的属性表现在HTML结构上
    // newElement.setAttribute(attr,value);
  }
  container.appendChild(newElement);
  callBack && callBack();
}
// let objJSX={
//     type:'h1',
//     props:{
//         id:'titleBox',
//         className:'title',
//         style:{color:'red'},
//         ref:undefined,
//         key:undefined,
//         children:'22222'
//     },
//     ref:'AA',
//     key:'12'}

let objJSX=createElement(
    'div',
    { id: 'box', clssName: 'box', style: { color: 'red' } },
   createElement(
      'h2',
      { className: 'title' },
      '\u7CFB\u7EDF\u63D0\u793A'
    ),
    createElement(
      'div',
      { className: 'content' },
      '\u6E29\u99A8\u63D0\u793A'
    ),
    '\u6D4B\u8BD5\u670D\u52A1'
  );
  rendert(objJSX,root,()=>{console.log('ok')})