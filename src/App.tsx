import * as React from 'react';
import './App.css';

import { NavBar } from './components/nav/NavBar';
import { NavEntryType } from './components/nav/NavEntry';
import logo from './logo.svg';

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
                <div className='App-demo'>
                    <NavBar
                        brand={{
                            alt: 'Microsoft',
                            href: '#',
                            src: 'https://c.s-microsoft.com/favicon.ico?v2',
                        }}
                        entryGroups={
                            [
                                {
                                    entries: [
                                        {
                                            props: {
                                                icon: {
                                                    alt: 'Office',
                                                    src: 'https://c.s-microsoft.com/favicon.ico?v2',
                                                },
                                                text: 'Office',
                                            },
                                            type: NavEntryType.Button
                                        },
                                        {
                                            props: {
                                                icon: {
                                                    alt: 'Office',
                                                    src: 'https://c.s-microsoft.com/favicon.ico?v2',
                                                },
                                                text: 'Windows'
                                            },
                                            type: NavEntryType.Button
                                        },
                                        {
                                            props: {
                                                href: '#',
                                                icon: {
                                                    alt: 'Office',
                                                    src: 'https://c.s-microsoft.com/favicon.ico?v2',
                                                },
                                                text: 'Surface'
                                            },
                                            type: NavEntryType.Link
                                        },
                                        {
                                            props: {
                                                href: '#',
                                                icon: {
                                                    alt: 'Office',
                                                    src: 'https://c.s-microsoft.com/favicon.ico?v2',
                                                },
                                                text: 'Xbox'
                                            },
                                            type: NavEntryType.Link
                                        },
                                    ]
                                },
                            ]
                        }
                    />
                </div>
            </div>
        );
    }
}

export default App;
