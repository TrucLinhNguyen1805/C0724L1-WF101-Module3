import React from 'react';

export class StudentInfoComponent extends React.Component{
    constructor(prop) {
        super(prop);
    }
    render(){
        return(
            <table border={1}>
                <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {this.props.list.map((e,i)=>(
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}
