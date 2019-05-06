import React, { Component } from 'react';
import Input from '../../components/UI/Controls/Input/Input';
import Button from '../../components/UI/Controls/Button/Button';
import Select from '../../containers/Controls/Select/Select';
import getCacheData, { createCar, getVehicles } from '../../services/HttpServices/VehicleService';

const initializeProp = (type, config, value='', validationRules, isValid=true) => {
  return { elementType: type, elementConfig: config, value: value, validation: validationRules, valid: isValid, touched: false };
}

class CarForm extends Component {
  state = {
    carForm: {
      name: initializeProp('input',
        { placeholder: 'Car Name', label: 'Name' },
        '',
        { required: true },
        false),
      make: initializeProp('select',
        { selectType: 'MakeModel', label: 'Make', dataField: "make" },
            ''),
      model: initializeProp('select',
          {
              dataFunc: function () {
                  var state = this.state;
                  return getCacheData("MakeModel")
                      .then(response => {
                          var selectedMake = response.filter(make => make.make == state.carForm.make.value);
                          if (selectedMake.length === 1)
                              return selectedMake[0].models;
                          else
                              return [];
                      });
              }.bind(this), label: 'Model' },
        ''),
      engine: initializeProp('select',
        { selectType: 'Engine', label: 'Engine' },
        ''),
      doors: initializeProp('input',
        { placeholder: 'Doors', label: 'Doors' },
        '',
        { required: true, minLength: 0, maxLength: 5 },
        false),
      bodyType: initializeProp('select',
        { selectType: 'BodyType', label: 'Body Type' },
        ''),
      year: initializeProp('input',
        { placeholder: 'Year', label: 'Year' },
        '',
        { required: true, minLength: 1900, maxLength: 2019 },
        false),
      notes: initializeProp('textArea',
        { rows: "3", label: 'Notes' },
        ''),
      button: initializeProp('button',
        {},
        'Create')
    },
      formIsValid: false,
      isSucced: null
  }

  submitHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.carForm) {
      formData[formElementIdentifier] = this.state.carForm[formElementIdentifier].value;
      }

      createCar(formData)
          .then(response => {
                getVehicles()
                    .then(response => console.log(response));
              
                const updatedCarForm = {
                    ...this.state.carForm
                };

                for (let elementIdentifier in this.state.carForm) {
                    updatedCarForm[elementIdentifier].value = '';
                }

                this.setState({ isSucced: true, carForm: updatedCarForm });
          })
          .catch(error => { this.setState({ isSucced: false }); });
  }

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules && rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules && rules.minLength) {
      isValid = value >= rules.minLength && isValid;
    }

    if (rules && rules.maxLength) {
      isValid = value <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedCarForm = {
      ...this.state.carForm
    };
    const updatedFormElement = {
      ...updatedCarForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;

    let formIsValid = true;
    for (let inputIdentifier in updatedCarForm) {
      formIsValid = updatedCarForm[inputIdentifier].valid && formIsValid;
    }
    updatedCarForm[inputIdentifier] = updatedFormElement;
    this.setState({ carForm: updatedCarForm, formIsValid: formIsValid });
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.carForm) {
      formElementsArray.push({
        id: key,
        config: this.state.carForm[key]
      });
    }

    const style = {
      padding: '35px',
      margin: '30px',
      borderRadius: '10px',
      backgroundColor: '#c3cbdc',
      backgroundImage: 'linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)'
    };

    return (
        <form style={style} onSubmit={this.submitHandler}>
            {this.state.isSucced ?
                <div className="alert alert-primary" role="alert">
                    Your car is created successfully ! Check out console log for saved cars.
            </div> : null }
        {formElementsArray.map(formElement => {
          switch (formElement.config.elementType) {
            case ('input'):
            case ('textArea'):
              return <Input
                key={formElement.config.key}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
            case ('select'):
              return <Select key={formElement.config.key}
                value={formElement.config.value}
                config={formElement.config.elementConfig}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
            case ('button'):
              return <Button 
                //disabled={!this.state.formIsValid}
                key={formElement.config.value}
                text='Create' />
          }
        })}
      </form>
    );
  }
}

export default CarForm;