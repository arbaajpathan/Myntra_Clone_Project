import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { itemActions } from '../store/Item_slice';
import { useSelector } from 'react-redux';
import { fetch_data_action } from '../store/Fetch_slice';



function Fetch_item() {
    const fetchstatus = useSelector((store) => store.fetch_data)

    const dispatch = useDispatch();
    useEffect(() => {
        if (fetchstatus.fetch_done) {
            return
        }
        else {
            fetch("http://localhost:8080/items")
                .then((res) => res.json())
                .then(({ items }) => {
                    dispatch(fetch_data_action.mark_fetch_Processing())
                    dispatch(itemActions.Add_initial_item(items[0]))
                    // we pass payload to Add_initial_item 
                    dispatch(fetch_data_action.mark_fetch_done())
                })
}

    }, [fetchstatus])
    return <>

    </>
}

export default Fetch_item;
