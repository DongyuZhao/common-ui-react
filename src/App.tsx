import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { NavBar } from './nav/NavBar';
import { NavBarEntry } from './nav/NavBarEntry';

class App extends React.Component {
    public render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h1 className='App-title'>Welcome to React</h1>
                </header>
                <NavBar>
                    <NavBarEntry
                        id='1'
                        text='hello, world1'
                    />
                    <NavBarEntry
                        id='2'
                        text='hello, world2'
                    />
                    <NavBarEntry
                        id='3'
                        text='hello, world3'
                    />
                    <NavBarEntry
                        id='4'
                        text='hello, world4'
                    />
                    <NavBarEntry
                        id='5'
                        text='hello, world5'
                    />
                </NavBar>
                <p className='App-intro'>
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
