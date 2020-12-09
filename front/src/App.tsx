import React, { useState } from 'react';
import { client } from './services/apollo'
import { gql } from '@apollo/client'

function App() {
  const [user, setUser] = useState([])
  client.query({
    query: gql`
      query {
        users {
          name,
          surname,
          age
        }
      }
    `
  }).then(res => {
    const { users } = res.data
    setUser(users)
  })

  return (
    <div className="App">
      {user.map((item: any, index) => (
        <div key={index}>
          <h2>Nome: {item.name + " " + item.surname}</h2>
          <h2>{item.age}</h2>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default App;
