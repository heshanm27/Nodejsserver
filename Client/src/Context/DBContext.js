import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth ,db,storage} from '../init/firebaseinit.js'
import{ getFirestore,collection,getDocs,addDoc   } from 'firebase/firestore'



const DatabaseContext = createContext({
  getData:()=>Promise
})

export const useFireStore = () => useContext(DatabaseContext)

export default function Databasecontext({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const colRef = collection(db,'user');


  function getData(){
    getDocs(colRef)
    .then(snapshot => {
    
      let books=[]
      snapshot.docs.forEach(doc=>{
        books.push({...doc.data(),id:doc.id})
      })
      console.log(books)
      return books
    })
    .catch(err => {
      console.log(err.message)
    })
  
  }
  const value ={
    getData
  }
 
  return <DatabaseContext.Provider value={value}>{children}</DatabaseContext.Provider>
}