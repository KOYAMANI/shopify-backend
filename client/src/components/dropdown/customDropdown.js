import {Component} from "react";

class CustomDropDown extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedValue: "InStock"
        }
    }
    render() {
        const handleChange = (e) => {
            this.setState({selectedValue: e.target.value})
        }
        return (
            <div>
                <select onChange={(e) => handleChange(e)}>
                    <option value="InStock">In-stock</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                </select>
            </div>
        );
    }
}
export default CustomDropDown
