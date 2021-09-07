const DataTable = () => {
    return (

        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Sara Connor</td>
                        <td>40</td>
                        <td>12</td>
                        <td>5011.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Gandalf Cinzento</td>
                        <td>50</td>
                        <td>30</td>
                        <td>6013.03</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Frodo Baggins</td>
                        <td>12</td>
                        <td>10</td>
                        <td>517.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Bilbo Baggins</td>
                        <td>12</td>
                        <td>5</td>
                        <td>117.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Samwise Gamgee</td>
                        <td>1</td>
                        <td>1</td>
                        <td>17.99</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Peregrin Took</td>
                        <td>61</td>
                        <td>50</td>
                        <td>116097.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Gimli</td>
                        <td>25</td>
                        <td>25</td>
                        <td>36056.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Arwen Undómiel</td>
                        <td>46</td>
                        <td>40</td>
                        <td>45011.50</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Aragorn</td>
                        <td>15</td>
                        <td>13</td>
                        <td>1017.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;