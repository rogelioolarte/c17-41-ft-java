import { useEffect, useState } from 'react';
import PerTransaction from '../pure/perTransaction';
import { allData } from '../../mocks/transactions.mock';
import { getTransactions } from '../../services/dashboardService';

const ShowHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const [transactions, setTransactions] = useState([]);
  const ListOfTransactions = transactions.length !== 0 ? transactions : allData;

  useEffect(() => {
    getTransactions().then((data) => {
      data.length !== 0 ? setTransactions(data) : setTransactions([])
    })
  },[])

  // Calcular los índices de inicio y fin de los elementos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ListOfTransactions.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-3">
      <h1 className="d-flex justify-content-center m-3 pt-3">Transaction History</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Currency</th>
            <th scope="col">Currency Price(Crypto)</th>
            <th scope="col">Quantity(USD)</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((data, index) => (
            <PerTransaction key={index} data={data} />
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: Math.ceil(ListOfTransactions.length / itemsPerPage) }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ShowHistory;
