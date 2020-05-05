import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow=()=>{
        if(this.props.permission === 1){return "ADMIN"; }
         else if(this.props.permission === 2) {return "Moderator";}  
         else {return "Normal user";}
    }
    editUser=()=>{
        this.props.editUser();
        this.props.changeEditUserStatus();
    }
    deleteUser=(iduser)=>{
        this.props.deleteUser(iduser);
    }
    render() {
        return (
            
            <tr>
                <td >{this.props.stt}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.sdt}</td>
                <td>{this.permissionShow()}</td>
                <td>
                  <div onClick={this.editUser} className="btn btn-warning sua"><i className="fa fa-edit">edit</i></div>
                  <div onClick={(iduser)=>this.deleteUser(this.props.id)} className="btn btn-primary xoa"><i className="fa fa-trash">trash</i></div>
                </td>
            </tr>

            
        );
    }
}

export default TableDataRow;