import React from 'react';

class Navbar extends React.Component {
  render(){
    return (
      <div className="navbar" style={styles.navBar}>
        <input style={styles.tab}></input>
        <button type='text' className='btn btn-danger' style={styles.tab1} >Search</button>
        
      </div>
    );
  }
  
}

export default Navbar;
const styles={
  navBar:{
    background:'black',
    position:'fixed',
    width:"100%"
  },
  tab:{
    width:'30%',
    marginLeft:"30%"
  },
  tab1:{
    marginRight:'680px'
  }


}