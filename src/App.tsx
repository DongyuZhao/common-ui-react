import * as React from 'react';
import './App.css';

import { LinkButton } from './components/input/LinkButton';
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
                    <LinkButton
                        theme={Theme.Primary}
                        outline={true}
                        disabled={true}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                    <LinkButton
                        theme={Theme.Info}
                        outline={true}
                        disabled={true}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                    <LinkButton
                        theme={Theme.Warning}
                        outline={true}
                        disabled={true}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                    <LinkButton
                        theme={Theme.Caution}
                        outline={true}
                        disabled={true}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                    <LinkButton
                        theme={Theme.Error}
                        outline={true}
                        disabled={true}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                    <LinkButton
                        theme={Theme.Success}
                        outline={true}
                        disabled={true}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                    <LinkButton
                        theme={Theme.Primary}
                        outline={true}
                        disabled={false}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                    <LinkButton
                        theme={Theme.Info}
                        outline={true}
                        disabled={false}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                    <LinkButton
                        theme={Theme.Warning}
                        outline={true}
                        disabled={false}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                    <LinkButton
                        theme={Theme.Caution}
                        outline={true}
                        disabled={false}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                    <LinkButton
                        theme={Theme.Error}
                        outline={true}
                        disabled={false}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                    <LinkButton
                        theme={Theme.Success}
                        outline={true}
                        disabled={false}
                        fill={true}
                    >
                        From Microsoft, built with love.
                    </LinkButton>
                </div>
            </div>
        );
    }
}

export default App;
