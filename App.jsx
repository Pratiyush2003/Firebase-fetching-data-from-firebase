import React, { useState, useEffect } from 'react'
import { db } from './components/Firebase'
import { collection, addDoc , getDocs ,onSnapshot} from 'firebase/firestore'


const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const collectionRef = collection(db, 'crud')


  //Passing data to the firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collectionRef, {name, email})
    console.log('form submited')
  }

  //fetch data from the firebase using useEffect
  const [data, setData] = useState([])

//   useEffect(() => {
//       const fetchData = async () => {
//         const fetch = await getDocs(collectionRef)
//         setData(fetch.docs.map((doc) => ({
//           ...doc.data(), id:doc.id 
//         })))
//       }
//       fetchData();
      
//   },[])
// console.log(data)

useEffect(() => {
  const fetchData = async () => {
    onSnapshot(collectionRef, (acallback) => {
      setData(acallback.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })))
    })
  }
  fetchData()
},[])
console.log(data)



  return (
    <>
    <h1 className='text-center'>Firebase CRUD</h1>
        <div className='App d-flex align-items-center justify-content-center pt-5'>
          <form>
            name :- <input type="text" value= {name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <br/>
            email :- <input type='email' value= {email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit data</button>
          </form>
        </div>
        <div className="data">
          {
            data.map((p) => {
              return(
                <div>
                <h1>{p.name} {p.email} {data.id}</h1>
                
                </div>
              )
            })
          }
        </div>
    </>
  )
}

export default App
