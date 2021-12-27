import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <div class="container">
  <div class="row">
    <div class="col">
    </div>
    <GlobalProvider class="col">

    <Header/>
    <Balance/>
    <IncomeExpense/>
    <TransactionList/>
    <AddTransaction/>
    </GlobalProvider>
    <div class="col">
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
