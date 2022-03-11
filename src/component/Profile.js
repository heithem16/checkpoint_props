import React from 'react'

const Profile = (props) => {
  return (
    <div>
    <h1>FirstName : {props.firstName}</h1>
    <h1>lastName : {props.lastName}</h1>
    <h1>Bio : {props.bio}</h1>
    <h1>Proffession : {props.proffession}</h1>
    <br/>
    {<button onClick={()=>props.handleName("helali heithem")}>
     Cliquez
    </button>}
    <br/>
    <img class="avatar" src="./images/photo.png" alt="heithem" />

    </div>
  
  )
}

export default Profile