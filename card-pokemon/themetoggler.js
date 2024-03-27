import React, { useState } from 'react'
import styled from 'styled-components'

const ToggleButton = styled.button`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const ThemeToggler = () => {
    const [theme, setTheme] = useState({
        backgroundColor: 'white',
        textColor: 'black'
    })

    const toggleTheme = () => {
        setTheme({
            backgroundColor: theme.backgroundColor === 'white' ? 'black' : 'white',
            textColor: theme.textColor === 'black' ? 'white' : 'black'
        })
    }

    return (
        <ToggleButton theme={theme} onClick={toggleTheme}>
            Toggle theme
        </ToggleButton>
    )
}

export default ThemeToggler

