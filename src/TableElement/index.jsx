import React, {Component} from "react";

class TableElement extends Component {
    onButtonClickP = ()=> {
        this.props.onButtonPlus();
    };
    onButtonClickM = () =>{
      this.props.onButtonMinus();
    };
    render() {
        const {name,price,value}= this.props;
        return (
            <tr>
                <td>{name}</td>
                <td><strong>{price}</strong></td>
                <td> <button onClick={this.onButtonClickM} name={'value'} value={value}>-</button> </td>
                <td> {value}</td>
                <td> <button onClick={this.onButtonClickP} name={'value'} value={value}> +</button> </td>
            </tr>
        )
    }
}

export default TableElement