import * as React from 'react';
import './App.css';

import { Button } from './components/input/Button';
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
                    <Button theme={Theme.Primary} outline={true} disabled={true} fill={true}>From Microsoft, built with love.</Button>
                    <Button theme={Theme.Info} outline={true}>From Microsoft, built with love.</Button>
                    <Button theme={Theme.Warning} outline={true}>From Microsoft, built with love.</Button>
                    <Button theme={Theme.Caution} outline={true} fill={true}>From Microsoft, built with love.</Button>
                    <Button theme={Theme.Error} outline={true}>From Microsoft, built with love.</Button>
                    <Button theme={Theme.Success} outline={true}>From Microsoft, built with love.</Button>
                    <Button theme={Theme.Primary} outline={false} disabled={true} fill={true}>From Microsoft, built with love.</Button>
                    <Button theme={Theme.Info} outline={false}>From Microsoft, built with love.</Button>
                    <Button theme={Theme.Warning} outline={false}>From Microsoft, built with love.</Button>
                    <Button theme={Theme.Caution} outline={false} fill={true}>From Microsoft, built with love.</Button>
                    <Button theme={Theme.Error} outline={false}>From Microsoft, built with love.</Button>
                    <Button theme={Theme.Success} outline={false}>From Microsoft, built with love.</Button>
                </div>
            </div>
        );
    }
}

export default App;
