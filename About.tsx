import React from 'react';

interface IProps {};

interface IState{};

class Home extends React.Component<IProps,IState> {
  constructor(Props:IProps){
    super(Props);
  }

 render(){
   return(
     <div>
         About Component
     </div>
   );
 }

}

export default Home;