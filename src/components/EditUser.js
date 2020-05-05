import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.userEditOject.id,
            name: this.props.userEditOject.name,
            sdt: this.props.userEditOject.sdt,
            permission: this.props.userEditOject.permission
        }
    }
    
    ischange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
        [name]:value
        })
    }

    saveBotton=()=>{
        var info={};
        info.id=this.state.id;
        info.name=this.state.name;
        info.sdt=this.state.sdt;
        info.permission=this.state.permission;
        console.log(info.name)
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    render() {
    
        return (
            <div className="col-9 mb-2">
            <form>
            <div className="card bg-warning mt-2 ">
            <div className="card-header text-center">
            <b>edit user</b> 
            </div>
            <div className="card-body">
            <div className="form-group">
                <label htmlFor="my-input">Tên</label>
                <input name="name" onChange={(event)=> this.ischange(event)} defaultValue={this.props.userEditOject.name}  className="form-control" type="text"  placeholder="tên user" />
            </div>
            <div className="form-group">
                <label htmlFor="my-input">Sđt</label>
                <input name="sdt" onChange={(event)=> this.ischange(event)} defaultValue={this.props.userEditOject.sdt}  className="form-control" type="text"  placeholder="sđt" />
            </div>
            <div className="form-group">
                <label htmlFor="my-input">Phân quyền</label>
                <select name="permission" onChange={(event)=> this.ischange(event)} defaultValue={this.props.userEditOject.permission}  className="custom-select" id="inputGroupSelect01">
                <option  value={0} >Chọn quyền mặc định</option>
                <option value={1}>Normal user</option>
                <option value={2}>ADMIN</option>
                <option value={3}>Moderator</option>             
                </select>
            </div>
            <div className="form-group ">
                <input type="button" 
                 className="btn btn-block btn-danger"
                  onClick={()=> this.saveBotton()}
        
                  value="lưu"></input>
            </div>
            </div>
        </div>
</form>
             </div>
        );
    }
}

export default EditUser;