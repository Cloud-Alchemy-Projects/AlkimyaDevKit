import React from 'react'
import useStyles from './styles'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'

const SearchBar = ({color}) => {
    const classes = useStyles()

    return (
        <div className={classes.searchContainer}>
            <TopBar color={color}/>
            <BottomBar/>
        </div>
    )
}

export default SearchBar