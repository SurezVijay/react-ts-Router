import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps {};

interface IState{};

class Home extends React.Component<IProps,IState> {
  constructor(Props:IProps){
    super(Props);
  }

 render(){
   return(
     <div>
        <nav class="navbar navbar-expand-sm bg-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Stocks</a>
    </li>
  </ul>
</nav>
     </div>
   );
 }

}

export default Home;