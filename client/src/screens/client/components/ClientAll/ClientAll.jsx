import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';
import useStyle from "../../styles";
import { getClients } from '../../../../actions/clients';
import ClientsInfo from './components/ClientsInfo';

const ClientAll = () => {
    const classes = useStyle() 
    const dispatch = useDispatch()
    const allClients = useSelector((state) => state.client.fetchAllClients);
    
    useEffect(() => {
		dispatch(getClients());
	}, []);
    
    return (
        <div className={classes.mainContainer}>
        {(allClients)===undefined?
            <div className={classes.circularContainer}>
                <CircularProgress />
            </div>
            :
                <ClientsInfo clients={allClients}/>
            }
		</div>
    )
}

export default ClientAll