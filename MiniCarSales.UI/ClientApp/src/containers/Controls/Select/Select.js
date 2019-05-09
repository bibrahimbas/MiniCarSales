import React, { PureComponent } from 'react';
import getCacheData from '../../../services/HttpServices/VehicleService';



class Select extends PureComponent {
    state = {
        options: []
    }
    componentDidMount() {
        if (this.props.config.dataFunc) {
            this.props.config.dataFunc()
                .then(response => {
                    if (response)
                        this.setState({ options: response });
                });
        } else {
            getCacheData(this.props.config.selectType)
                .then(response => {
                    if (response.data)
                        this.setState({ options: response.data })
                });
        }
    }

    componentDidUpdate() {
        if (this.props.config.dataFunc) {
            this.props.config.dataFunc().then(response => {
                if (this.state.options[0] !== response[0]) {
                    this.setState({ options: response });
                }
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <label className="Label">{this.props.config.label}</label>
                    </div>
                    <div className="col-8">
                        <select className="form-control Input"
                            value={this.props.value}
                            onChange={this.props.changed}>
                            <option value="">Please select</option>
                            {
                                this.state.options.map(
                                    option => {
                                        var optionText = this.props.config.dataField ? option[this.props.config.dataField] : option;
                                        return (<option key={optionText} value={optionText}>
                                            {optionText}
                                        </option>);
                                    }
                                )
                            }
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default Select;