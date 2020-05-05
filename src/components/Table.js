import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state={
      hienthiform:false,
      hienthinut:true,
      id:'',
      name:'',
      sdt:'',
      permission:''
    }
  }
 
  hienthinut=()=>{
    if(this.state.hienthinut === true){
      return <div className="btn btn-block btn-outline-info"onClick={()=>this.Doitrangthai()} >Thêm mới</div>
    }
    else{
      return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.Doitrangthai()}>Đóng</div>
    }
  }
  Doitrangthai=()=>{
    this.setState({
      hienthiform: !this.state.hienthiform,
      hienthinut:!this.state.hienthinut
    })
  }
  isChange = (event)=>{
    const name=event.target.name;
    const value=event.target.value;
    this.setState({
      [name]:value
    });
    // var itiem={}
    //   itiem.id=this.state.id;
    //   itiem.name=this.state.name;
    //   itiem.sdt=this.state.sdt;
    //   itiem.permission=this.state.permission;
    //   console.log(itiem)
  }
  kiemtratrangthai = ()=>{
      if(this.state.hienthiform === true){
       return  (
        <form>
        <div className="card mt-2 ">
        <div className="card-header">
          <b>Thêm mới user</b> 
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="my-input">Tên</label>
            <input name="name" onChange={(event)=>this.isChange(event)} className="form-control" type="text"  placeholder="nhập tên..." />
          </div>
          <div className="form-group">
            <label htmlFor="my-input">Sđt</label>
            <input name="sdt" onChange={(event)=>this.isChange(event)} className="form-control" type="text"  placeholder="nhập sđt..." />
          </div>
          <div className="form-group">
            <label htmlFor="my-input">Phân quyền</label>
            <select name="permission" onChange={(event)=>this.isChange(event)} className="custom-select" id="inputGroupSelect01">
              <option >Chọn quyền mặc định</option>
              <option value={1}>Normal user</option>
              <option value={2}>ADMIN</option>
              <option value={3}>Moderator</option>             
            </select>
          </div>
          <div className="form-group">
            <input type="reset"  className="btn btn-success" onClick={(name,sdt,permission)=>this.props.add(this.state.name,this.state.sdt,this.state.permission)}value="add"></input>
          </div>
        </div>
      </div>
      </form>
       )
      }
      
  }
 
  deleteUser=(iduser)=>{
    this.props.deleteUser(iduser)
  }     
      
  
    render() {
      //console.log(this.state)
        return (
            <div>
                <div className="container">
  <div className="row">
    <div className="col-12">
      <div className="row">
        <div className="col-9">
          <table className="table table-striped table-hover table-inverse ">
            <thead className="thead-inverse">
              <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Điện thoại</th>
                <th>Quyền</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
                {this.props.datausergroup.map((value,key)=>{
                  return <TableDataRow 
                   stt={key} 
                   userName={value.name}
                   sdt={value.sdt}
                   permission={value.permission}
                   id={value.id}
                   deleteUser={(iduser)=>this.deleteUser(iduser)}
                   editUser={(user) => this.props.editUser(value)}
                   changeEditUserStatus={()=> this.props.changeEditUserStatus()}
                     />                                        
                })}
            </tbody>
          </table>
        </div>
        <div className="col-3">
          {this.hienthinut()}
         {this.kiemtratrangthai()}
       
         
        </div>
      </div>
    </div>   
  </div>   
</div>

            </div>
        );
    }
}

export default Table;