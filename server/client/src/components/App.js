import React, { Component } from 'react';
import Catalog from './catalog/Catalog';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Catalog />
            </div>
        );
    }
}

export default App;