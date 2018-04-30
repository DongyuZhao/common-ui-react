import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { NavBar } from './nav/NavBar';
import { NavGroupMode } from './nav/NavGroup';

class App extends React.Component {
    public render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h1 className='App-title'>Welcome to React</h1>
                </header>
                <NavBar
                    entryGroups={[
                        {
                            entries: [
                                {
                                    id: 'nav-bar-entry-11',
                                    text: 'hello world11'
                                },
                                {
                                    id: 'nav-bar-entry-12',
                                    text: 'hello world12'
                                },
                                {
                                    id: 'nav-bar-entry-13',
                                    text: 'hello world13'
                                },
                                {
                                    id: 'nav-bar-entry-14',
                                    text: 'hello world14'
                                },
                                {
                                    id: 'nav-bar-entry-15',
                                    text: 'hello world15'
                                },
                                {
                                    id: 'nav-bar-entry-16',
                                    text: 'hello world16'
                                },
                            ],
                            inline: true,
                            mode: NavGroupMode.Row
                        },
                        {
                            entries: [
                                {
                                    id: 'nav-bar-entry-21',
                                    text: 'hello world21'
                                },
                                {
                                    id: 'nav-bar-entry-22',
                                    text: 'hello world22'
                                },
                                {
                                    id: 'nav-bar-entry-23',
                                    text: 'hello world23'
                                },
                                {
                                    id: 'nav-bar-entry-24',
                                    text: 'hello world24'
                                },
                                {
                                    id: 'nav-bar-entry-25',
                                    text: 'hello world25'
                                },
                                {
                                    id: 'nav-bar-entry-26',
                                    text: 'hello world26'
                                },
                            ],
                            inline: true,
                            mode: NavGroupMode.Row
                        }
                    ]}
                />
                <p className='App-intro'>
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
