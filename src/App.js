import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 8},
    {name: "New Born"},
    {name: 24, age: "student"}
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

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}

User.defaultProps = {
  age: 0
}

export default App;
