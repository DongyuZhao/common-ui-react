import * as React from 'react';
import './App.css';

import { CheckBox } from './components/input/CheckBox';
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
                    <CheckBox
                        id='text-check-box-primary'
                        value='test'
                        checked={true}
                        theme={Theme.Primary}
                        noMaxWidth={true}
                        // tslint:disable-next-line:max-line-length
                        title='From Microsoft' 
                        // tslint:disable-next-line:max-line-length
                        description='Most people have only just begun to explore the Windows 10 April Update. But for Windows Insiders, the exploration begun over six months ago, with the first Insider Preview builds for this release. '
                    />
                    <CheckBox
                        id='text-check-box-secondary'
                        value='test'
                        checked={true}
                        theme={Theme.Secondary}
                        title='From Microsoft'
                    />
                    <CheckBox
                        id='text-check-box-info'
                        value='test'
                        checked={true}
                        theme={Theme.Info}
                        title='From Microsoft'
                    />
                    <CheckBox
                        id='text-check-box-warning'
                        value='test'
                        checked={true}
                        theme={Theme.Warning}
                        title='From Microsoft'
                    />
                    <CheckBox
                        id='text-check-box-caution'
                        value='test'
                        checked={true}
                        theme={Theme.Caution}
                        title='From Microsoft'
                    />
                    <CheckBox
                        id='text-check-box-error'
                        value='test'
                        checked={true}
                        theme={Theme.Error}
                        title='From Microsoft'
                    />
                    <CheckBox
                        id='text-check-box-success'
                        value='test'
                        checked={true}
                        theme={Theme.Success}
                        title='From Microsoft'
                    />
                </div>
            </div>
        );
    }
}

export default App;
