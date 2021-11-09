import { useEffect, useState } from "react";

function App() {

  const[url,setUrl]=useState([]);
  const[isError,setIsError]=useState(false)//new
  const[data,setData]=useState([]);
  console.log(url);



  useEffect(()=>{
    const url =fetch("https://jsonplaceholder.typicode.com/users");
    url
    .then((respuesta)=> {
      return respuesta.json();
    })
    .then((respuesta) =>{
      setUrl(respuesta);
    }) 
    .catch((error) =>{
      console.log(error);
    });
  },[]);



  return (
    <div className="App">
      Hola Mundo
      {url.map((url)=>{
        return(
          <div key={url.id}>
            <span>{url.name}</span>
          </div>
        )
      })}
      {/* {isError? <h3>Error!</h3>: null}  nuevo */}
    </div>
  );
}

export default App;
