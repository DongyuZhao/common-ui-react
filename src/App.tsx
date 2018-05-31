import * as React from 'react';
import './App.css';

import { RadioGroup } from './components/input/RadioGroup';
import logo from './logo.svg';
import { Theme } from './shared/Theme';

class App extends React.Component {
    public render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h1 className='App-title'>Welcome to React</h1>
                </header>
                <p className='App-intro'>
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <div className='container text-left'>
                    <RadioGroup choices={[
                        {
                            checked: false,
                            description: 'From Microsoft',
                            forName: 'test',
                            id: 'first',
                            theme: Theme.Primary,
                            title: 'From Microsoft',
                            value: 'First',
                        },
                        {
                            checked: false,
                            description: 'From Microsoft',
                            forName: 'test',
                            id: 'second',
                            theme: Theme.Success,
                            title: 'From Microsoft',
                            value: 'Second',
                        },
                    ]}/>
                </div>
            </div>
        );
    }
}

export default App;
