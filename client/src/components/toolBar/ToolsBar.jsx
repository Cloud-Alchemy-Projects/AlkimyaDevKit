import React from 'react'
import useStyles from './styles'
import LeftBar from './components/LeftBar'

const ToolsBar = ({user}) => {
 
    const classes = useStyles()

    return(
        <>
            <LeftBar user={user}/>
        </>
    )
}

export default ToolsBar