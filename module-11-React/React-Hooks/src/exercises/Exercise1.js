import React, {useState} from 'react'

export default function Exercise1() {
  const [form, setForm] = useState({name: '', city: '', country: ''})

  const handleInput = function(event){
    const target = event.target
    let value = target.value
    let name = target.name
    setForm({...form, [name]: value})
  }

  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
       <input name='name' value={form.name} type="text" placeholder='Enter your name' onChange={handleInput}/>
       <input name='city' value={form.city} type="text" placeholder='Enter your city' onChange={handleInput}/>
       <select name='country' onChange={handleInput}>
          <option value='country'>Select a country</option>
          {countries.map(country => <option key={country} value={`${country}`}>{country}</option>)}
        </select>


      </div>
    </div>
  )
}