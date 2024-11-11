import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person'

const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people')
    return res.json()
}

export default function People() {
    const { data, status } = useQuery('planets', fetchPeople)

  return (
    <div>
        <h2>Person</h2>
        {/* <p>{status}</p> */}
        {status === 'loading' && (
            <div>Loading data...</div>
        )}
        {status === 'error' && (
            <div>Error fetching data</div>
        )}
         {status === 'success' && (
            <div>
               {data.results.map(person => (
               <Person person={person} key={person.name}/>
               ))} 
            </div>
        )}
    </div>
  )
}
