import React from 'react'
import useStyles from './styles'
import LeftBar from './components/LeftBar'
import { useSelector } from 'react-redux'

const ToolsBar = () => {

    const classes = useStyles()
    // const logUser = useSelector(state=>state.users.logUser.NombreUsuario)
    return(
        <>
            <LeftBar user="Develop"/>
        </>
    )
}

export default ToolsBar