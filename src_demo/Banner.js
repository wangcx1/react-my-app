import React from 'react';
import PorpTypes from 'prop-types';
class SliderItem extends React.Component{
    constructor(props){
        super(props);
        // 通过修改index的值就可以改变left的值
        // this.state={
        //     index:0
        // }
    }
    
    render(){
        let style={
            width:(this.props.items.length+1)*300,
            left:this.props.index*-300,
            transitionDuration:this.props.speed+'s' //作用？
        }
        return <section>
            <div>
                <ul className='sliders' style={style}>
                    {
                        this.props.items.map((item,index)=>{
                              return  <li key={index} className='slider'><img src={item.src}/></li>
                        })
                    }
                    <li key={this.props.items.length} className='slider'><img src={this.props.items[0].src}/></li>
                        })
                </ul>
            </div>
        </section>
    }
}
class SliderArrows extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return  <div className="slider-arrows">
        <span className='arrow arrow-left' onClick={()=>{this.props.turn(-1)}}> &lt;</span>
        <span className='arrow arrow-right' onClick={()=>{this.props.turn(1)}}>&gt;</span>
    </div>
    }
}
class SilderDots extends React.Component{
    render(){
        return <div className='slider-dots'> 
                {
                    this.props.items.map((item,index)=>{
                        return <span key={index} className={index==this.props.index||(this.props.index===this.props.items.length&&index===0)?'active dots':'dots'} onClick={()=>{this.props.turn(index-this.props.index)}}></span>
                    })
                }
        </div>
    }
}
class Banner extends React.Component{
    constructor(props){
        super(props);
        // 通过修改index的值就可以改变left的值
        this.state={
            index:0
        }
        this.turn=this.turn.bind(this)
    }
    componentDidMount(){
        this.$slider=document.querySelector('.sliders')
        if(this.props.autoplay){
            this.go();
        }
    }
    // 传入步长得到新的index值
    turn(step){
        let index=this.state.index+step;
        if(index<0){
            this.$slider.style.transitionDuration='0s';
            this.$slider.style.left=-300*this.props.items.length+'px';
            setTimeout(()=>{
                index=this.props.items.length-1;
                this.$slider.style.transitionDuration=this.props.speed+'s';
                this.setState({index:index});
            },0)
            return;
            
        }
        if(index>this.props.items.length){
            this.$slider.style.transitionDuration='0s';
            this.$slider.style.left=0;
            setTimeout(()=>{
                index=1;
                this.$slider.style.transitionDuration=this.props.speed+'s';
                this.setState({index:index});
            },0)
            // index=1;
            return;
        }
        this.setState({index:index});
    }
    // 启动自动轮播
    go=()=>{ 
        this.$timer=setInterval(()=>{
        this.turn(1);
    },this.props.delay*1000);
}
   
    render(){
        
        return <section onMouseOver={()=>{clearInterval(this.$timer)}} onMouseOut={()=>{this.go()}} className='slider-wrapper'>
            <SliderItem items={this.props.items} speed={this.props.speed} index={this.state.index} delay={this.props.delay} autoplay={this.props.autoplay}/>
           <SliderArrows turn={this.turn} />
           <SilderDots items={this.props.items} index={this.state.index} turn={this.turn}/>
           
        </section>
    }
}
export default Banner;