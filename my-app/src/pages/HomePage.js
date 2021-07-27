import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage() {
    const hobbyList = useSelector( state => state.hobby.list);
    const activeId = useSelector( state => state.hobby.activeId);



    const dispatch = useDispatch();
    console.log('Hobby List: ',hobbyList);

    const handleAddHobbyList = () => {
        const newId = randomNumber();

        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`,
        }

        const action = addNewHobby(newHobby);

        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className='home-page'>
            <h1>REDUX HOOKS - Home page</h1>

            <button onClick={handleAddHobbyList}>Random</button>
            <HobbyList 
                hobbyList={hobbyList} 
                activeId={activeId}
                onHobbyClick = {handleHobbyClick}
            />

        </div>
    );
}

export default HomePage;