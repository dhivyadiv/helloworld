  import {Link} from 'react-router-dom'
  
  
  const App=() =>{
  return <>
  {/* <Link to="/home">home</Link> */}
  <ul>
    <li>
      <Link  to="/home">home</Link>
    </li>

    <li>
      <Link to="/about">About</Link>
    </li>

    <li>
      <Link  to="/profile">Profile</Link>
    </li>
  </ul>

 
  </>

 }

 export default App;