import React from 'react'
import useStyles from './styles'
import Login from './Components/LoginForm'

const Home = () => {
 
    const classes = useStyles()

    return(
        <>
            <Login/>
        </>
    )
}

export default Home
