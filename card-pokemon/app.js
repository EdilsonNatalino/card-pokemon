import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PokemonList from './components/PokemonList'
import Pokemon from './components/Pokemon'
import ThemeToggler from './components/ThemeToggler'

function App() {
    return (
        <Router>
            <ThemeToggler />
            <Switch>
                <Route exact path='/'>
                    <PokemonList />
                </Route>
                <Route path='/pokemon/:id'>
                    <Pokemon />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
