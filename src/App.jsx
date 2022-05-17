import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";


const EXPENSES = gql`
query readExpense {
  readExpenses {
    id
    amount
    description
    users {
      id
      email
      name
      expenses {
        id
        amount
        description
      }
    }
  } 
}
`;

const App = () => {
  const { loading, error, data } = useQuery(EXPENSES);

  useEffect(() => {
    console.log(data);
    
  }, [data])
  
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
