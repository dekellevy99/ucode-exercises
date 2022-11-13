import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Exercise2() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get('https://randomuser.me/api/?results=5')
      setUsers(response['data']['results'])
    }
    fetchData()
  }, [])


  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map(user => (
          <div key={user.name.first}>
            <span>{user.name.first} {user.name.last}</span>
            <img src={user.picture.thumbnail}/>
          </div>
        ))}

      </div>
    </div>
  )
}