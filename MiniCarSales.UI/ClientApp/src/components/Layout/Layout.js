import React from 'react';
import Header from '../Header/Header';
import Aux from '../../hoc/Auxc/Auxc';
import { Route } from 'react-router-dom';
import CarForm from '../../containers/CarForm/CarForm';

const layout = (props) => {
    return (
        <Aux>
            <Header />
            <div className="row">
                <div className="col-lg-6">
                    <Route path="/create-car" component={CarForm} />
                </div>
            </div>
        </Aux>

    );
}

export default layout;