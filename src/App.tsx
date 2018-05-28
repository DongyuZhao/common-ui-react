import * as React from 'react';
import './App.css';

import { ButtonInput } from './components/input/ButtonInput';
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
                    <ButtonInput
                        theme={Theme.Primary}
                        outline={true}
                        disabled={true}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                    <ButtonInput
                        theme={Theme.Info}
                        outline={true}
                        disabled={true}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                    <ButtonInput
                        theme={Theme.Warning}
                        outline={true}
                        disabled={true}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                    <ButtonInput
                        theme={Theme.Caution}
                        outline={true}
                        disabled={true}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                    <ButtonInput
                        theme={Theme.Error}
                        outline={true}
                        disabled={true}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                    <ButtonInput
                        theme={Theme.Success}
                        outline={true}
                        disabled={true}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                    <ButtonInput
                        theme={Theme.Primary}
                        outline={false}
                        disabled={false}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                    <ButtonInput
                        theme={Theme.Info}
                        outline={false}
                        disabled={false}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                    <ButtonInput
                        theme={Theme.Warning}
                        outline={false}
                        disabled={false}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                    <ButtonInput
                        theme={Theme.Caution}
                        outline={false}
                        disabled={false}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                    <ButtonInput
                        theme={Theme.Error}
                        outline={false}
                        disabled={false}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                    <ButtonInput
                        theme={Theme.Success}
                        outline={false}
                        disabled={false}
                        fill={true}
                        value='From Microsoft, built with love.'
                    />
                </div>
            </div>
        );
    }
}

export default App;
