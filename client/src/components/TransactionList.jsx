import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';



const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);


    useEffect(()=> {
        getTransactions();
        
    }, []);

console.log(transactions)
    return (
        <>
            <h3>Istorija</h3>
            <ul className='list'>
                {transactions.map(transaction => 
                    (<Transaction key={transaction.id} transaction={transaction} />))}                
            </ul>
        </>
    )
}

export default TransactionList
