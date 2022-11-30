import React from "react";
import { Link } from 'react-router-dom';

const TableList = ({lists}) =>{

    return(

    <table className="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Fecha</th>
                <th>Ciudad Destino</th>
                <th>Dirección Entrega</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            {lists?.map((list) =>(
                <tr key={list._id}>
                    {/* <td><Link lists={lists} to="/1" classNameName="">1</Link></td> */}
                    <td>#</td>
                    <td>{list.date}</td>
                    <td>{list.sCity}</td>
                    <td>{list.sAddress}</td>
                    <td><label className="badge badge-danger">{list.state}</label></td>
                </tr>
            ))}
        </tbody>
    </table>

    );
}

export default TableList;