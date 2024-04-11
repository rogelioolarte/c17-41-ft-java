function ShowHistory() {
  return (
    <div className="p-3">
      <h1 className="d-flex justify-content-center m-3 pt-3" >Transaction History</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td><td>Otto</td><td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td><td>Thornton</td><td>@fat</td>
          </tr>
          <tr>
            <td>Larry</td><td>the Bird</td><td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShowHistory