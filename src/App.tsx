import * as React from 'react';
import './App.css';

import { Radio } from './components/input/Radio';
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
                    <Radio
                        id='text-check-box-primary'
                        forName='microsoft'
                        value='test'
                        checked={false}
                        theme={Theme.Primary}
                        noMaxWidth={true}
                        // tslint:disable-next-line:max-line-length
                        title='From Microsoft' 
                        // tslint:disable-next-line:max-line-length
                        description='Most people have only just begun to explore the Windows 10 April Update. But for Windows Insiders, the exploration begun over six months ago, with the first Insider Preview builds for this release. '
                    />
                    <Radio
                        id='text-check-box-secondary'
                        forName='microsoft'
                        value='test'
                        checked={false}
                        theme={Theme.Secondary}
                        title='From Microsoft'
                    />
                    <Radio
                        id='text-check-box-info'
                        forName='microsoft'
                        value='test'
                        checked={false}
                        theme={Theme.Info}
                        title='From Microsoft'
                    />
                    <Radio
                        id='text-check-box-warning'
                        forName='microsoft'
                        value='test'
                        checked={false}
                        theme={Theme.Warning}
                        title='From Microsoft'
                    />
                    <Radio
                        id='text-check-box-caution'
                        forName='microsoft'
                        value='test'
                        checked={false}
                        theme={Theme.Caution}
                        title='From Microsoft'
                    />
                    <Radio
                        id='text-check-box-error'
                        forName='microsoft'
                        value='test'
                        checked={false}
                        theme={Theme.Error}
                        title='From Microsoft'
                    />
                    <Radio
                        id='text-check-box-success'
                        forName='microsoft'
                        value='test'
                        checked={false}
                        theme={Theme.Success}
                        title='From Microsoft'
                    />
                </div>
            </div>
        );
    }
}

export default App;
