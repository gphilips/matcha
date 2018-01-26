import React from 'react';
import '../css/inputForm.css';

export default class InputForm extends React.Component {
    render() {
        const { type, name, placeholder, className } = this.props;

        return (
            <div className={className}>
                <input
                    className="form-control text-center"
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required
                />
            </div>
        );
    }
}
