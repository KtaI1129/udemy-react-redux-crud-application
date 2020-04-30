import React from 'react';

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 8},
    {name: "New Born"}
  ];
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User key={index} name={profile.name} age={profile.age}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, I'm {props.age} old, a student.</div>
}

User.defaultProps = {
  age: 0
}

export default App;
