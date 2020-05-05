import React, { Component } from 'react';
import './../components/App';
import './../App.css';
import Header from './Header';
import SeachForm from './SeachForm';
import Table from './Table';
import { v4 as uuidv4 } from 'uuid';
import Datauser from './Data.json';
class App extends Component {

 constructor(props) {
   super(props);
   this.state={
     data : [],
     seachText:'',
     editUserStatus:false,
     userEditOject:{}
   }
 }

  UNSAFE_componentWillMount(){
   if(localStorage.getItem('userData')=== null){
     localStorage.setItem('userData',JSON.stringify(Datauser));

   }else{
     var temp=JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
   }
 }

getNewUserData=(name,sdt,permission)=>{
  var itiem={}
      itiem.id=uuidv4();
      itiem.name=name;
      itiem.sdt=sdt;
      itiem.permission=permission;
  var itiemdata=this.state.data;
      itiemdata.push(itiem);

      this.setState({
        data:itiemdata
      })
      localStorage.setItem('userData',JSON.stringify(itiemdata));

 
 
}
getTextSeach=(dl)=>{
  this.setState({
    seachText:dl
  });
 
}
editUser=(user)=>{
 
  this.setState({
    userEditOject:user
  })
  
}
changeEditUserStatus=()=>{
  this.setState({
    editUserStatus: !this.state.editUserStatus
  })
}
getUserEditInfoAPP=(info)=>{
  this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.sdt = info.sdt;
        value.permission = info.permission;
      } 
  })
  localStorage.setItem('userData',JSON.stringify(this.state.data));
}

deleteUser=(iduser)=>{
   
 var template=this.state.data.filter(itiem => itiem.id !== iduser);
    this.setState({
      data:template
    });
    localStorage.setItem('userData',JSON.stringify(template));
}
   //thongbao =()=>{alert("kết nối thành công");}
  render() {

    

    var ketqua=[];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.seachText) !== -1){
          ketqua.push(item);
      }
    });
   
    return (
      <div>
        <Header/>
        <SeachForm 
        getUserEditInfoAPP={(info)=>this.getUserEditInfoAPP(info)}
         userEditOject={this.state.userEditOject}
         editUserStatus={this.state.editUserStatus}
         changeEditUserStatus={()=> this.changeEditUserStatus()}
         checkConnectProps={(dl)=>this.getTextSeach(dl)}
         />
        <Table 
         changeEditUserStatus={()=> this.changeEditUserStatus()}
         editUser={(user) => this.editUser(user)} 
         add={(name,sdt,permission)=>this.getNewUserData(name,sdt,permission)}  
         datausergroup={ketqua}
         deleteUser={(iduser)=> this.deleteUser(iduser)}
         />
      </div>
    );
  }
}

export default App;

