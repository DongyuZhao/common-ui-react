import * as React from 'react';
import './App.css';

import { ButtonLink } from './components/input/ButtonLink';
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
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Primary}
                        outline={true}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Info}
                        outline={true}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Warning}
                        outline={true}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Caution}
                        outline={true}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Error}
                        outline={true}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Success}
                        outline={true}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Primary}
                        outline={false}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Info}
                        outline={false}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Warning}
                        outline={false}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Caution}
                        outline={false}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Error}
                        outline={false}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                    <ButtonLink
                        url={'#'}
                        theme={Theme.Success}
                        outline={false}
                        disabled={true}
                        fill={true}
                        text='From Microsoft, built with love.'
                    />
                </div>
            </div>
        );
    }
}

export default App;
