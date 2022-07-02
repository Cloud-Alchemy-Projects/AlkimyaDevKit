import {React} from 'react'
import useStyles from "./styles"
import FormOther from './components/FormOther';

const Other = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <FormOther/>
        </div>
    )
}

export default Other