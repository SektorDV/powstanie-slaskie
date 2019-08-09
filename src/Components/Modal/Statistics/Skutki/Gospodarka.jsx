import React from 'react';
import './Gospodarka.scss';

const Gospodarka = () => {
    return(
        <div className="ps__modalwindow__economy__main">
                <table>
                    <tbody>
                    <tr>
                        <th></th>
                        <th className="table__red">POLSKA</th>
                        <th className="table__blue">NIEMCY</th>
                    </tr>
                    <tr>
                        <td className="table__gray__transparent">Kopalnie węgla kamiennego</td>
                        <td className="table__red__transparent">53</td>
                        <td className="table__blue__transparent">14</td>
                    </tr>
                    <tr>
                        <td className="table__gray__transparent">Kopalnie cynku i ołowiu</td>
                        <td className="table__red__transparent">10</td>
                        <td className="table__blue__transparent">5</td>
                    </tr>
                    <tr>
                        <td className="table__gray__transparent">Kopalnie rudy żelaza</td>
                        <td className="table__red__transparent">9</td>
                        <td className="table__blue__transparent">0</td>
                    </tr>
                    <tr>
                        <td className="table__gray__transparent">Huty żelaza</td>
                        <td className="table__red__transparent">5</td>
                        <td className="table__blue__transparent">4</td>
                    </tr>
                    <tr>
                        <td className="table__gray__transparent">Huty cynku, ołowiu i srebra</td>
                        <td className="table__red__transparent">18</td>
                        <td className="table__blue__transparent">0</td>
                    </tr>
                    </tbody>
                   
                </table>
        </div>
    )
}

export default Gospodarka;