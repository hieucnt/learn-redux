import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import { addNewHobby, setActiveHobby } from "../actions/hobby";

HomePage.propTypes = {
  // name: PropTypes.string.isRequired,
};

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 1000);
}

function HomePage(props){
  const hobbyList = useSelector(state => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId);

  // const hobbyState = useSelector(state => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.activeId,
  // }));
  const dispatch = useDispatch();

  console.log(hobbyList,"hobbyList");

  const handleAddHobbyClick = () => {
    //Random Hobby Object
    //Dispatch action to add hobby

    const newId = randomNumber();

    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    }

    //Dispatch action to add hobby
    const action = addNewHobby(newHobby);
    dispatch(action);
  }

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  }

  return(
    <>
      <h1>Homepage</h1>
      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </>
  )
}

export default HomePage;