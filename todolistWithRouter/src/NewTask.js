import React, { Fragment } from 'react';

class NewTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:''
        }
    }
    componentDidMount(){
        this.delayMe();
    }
    delayMe(){
        setTimeout(()=>{
            this.setState({data: 'data du serveur'});
        }, 2000);
    }
    render() {
        const {taskValue, addTask, handleClick} = this.props;
       
        return(
        <Fragment>   
            <label> New Task:      
                <input type="text" value={taskValue} onChange={addTask} />
            </label>
            <button onClick={handleClick} >Validate</button>
       </Fragment>);
    }
}


export default NewTask;