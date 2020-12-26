import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import Menu from '../components/Menu';

export default function Home() {
   return (
     <div>
     <Menu />
       <Jumbotron>
         <h1>Bem Vindo</h1>
         <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
           extra attention to featured content or information.
         </p>
         <p>
           <Button variant="primary">Learn more</Button>
         </p>
       </Jumbotron>
       
     </div>
   );
}
