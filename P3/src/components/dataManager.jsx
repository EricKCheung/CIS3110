import React, {Component} from 'react';

class DataManager extends Component { 
  state = {
    defaultValue : "",
    value : this.props.dataManagerValue
  };
 
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }
 
  clearInput = () => {
    document.getElementById("itemValue").value = "";
    this.setState({value:""});
  }
 
  dataManager = () => {
    this.props.foodataManager(this.state.value);
    this.clearInput(); 
  }
 
  render(){
    return(
    <div className = "input-group mb-3">
      <input type = "text" className = "form-control" id = "itemValue" placeholder = "item"
        onChange = {this.handleChange} />
      
      <div className = "input-group-append">
        <button onClick = {this.dataManager} className = "btn btn-outline-secondary" type = "button" 
          id = "button-addon2"> Add New To-Do Item</button>
      </div>
    </div>
    );
  }
}

export default DataManager;