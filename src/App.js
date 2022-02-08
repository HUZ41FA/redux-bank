import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from "./state/index"
import { bindActionCreators } from "redux"


function App() {
  const account = useSelector((state)=>state.account)
  const dispatch = useDispatch()

  const AC = bindActionCreators(actionCreators, dispatch)
  console.log(AC)
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=>AC.depositMoney(1000)}>Deposit</button>
      <button onClick={()=>AC.withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
