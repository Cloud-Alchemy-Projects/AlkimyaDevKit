import {React} from 'react'
import useStyles from "./styles"
import FormOther from './components/FormOther';
import Login from '../login/Login';

const Other = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            {/* <FormOther/> */}
            <Login />
        </div>
    )
}

export default Other