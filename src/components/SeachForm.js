import React, { Component } from 'react';
import EditUser from './EditUser';

class SeachForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue:'',
            userObj:{}
        }
    }
    
    isChange=(event)=>{
        this.setState({
            tempValue:event.target.value
        })
        //this.props.checkConnectProps(this.state.tempValue); go tu dong tim kiem.
    }
    editUserStatus=()=>{
        if(this.props.editUserStatus === true){
            return  <EditUser 
                    getUserEditInfo={(info)=> this.getUserEditInfo(info)}
                     userEditOject={this.props.userEditOject}
                    changeEditUserStatus={()=> this.props.changeEditUserStatus()}/>
        }
    }
    getUserEditInfo=(info)=>{
        this.setState({
            userObj:info
        })
        this.props.getUserEditInfoAPP(info);
    }
    //this.props.checkConnectProps;
    render() {
        return (
            <div>
                <div className="container">
                <div className="row">
                    {this.editUserStatus()}
                    <div className="col-12">
                     
                    <div className="form-group">
                        <div className="btn-group">  
                        <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} aria-describedby="helpId" placeholder="nhập từ khóa" />
                        <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>seach</div>                       
                        </div>
                    </div>
                
                    <hr className="my-2" />
                    </div>
                </div>
                </div>

            </div>
        );
    }
}

export default SeachForm;