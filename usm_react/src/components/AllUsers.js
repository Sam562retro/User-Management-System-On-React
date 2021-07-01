import React from 'react'
import './css/Index.css';

function AllUsers() {
    return (
        <main id="mainSection">
            <div className = "container">
                <div className="box-nav d-flex justify-between">
                    <a className="border-shadow" href='/add'><span class="text-gradient">New User</span></a>
                </div>

            <form method="post" action="/">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Gender</td>
                            <td>Status</td>
                            <td>
                                <a className="btn border-shadow update" href="/update?id=<%= data._id %>"><span>Edit</span></a>
                                <a className="btn border-shadow delete" href="/api/users/delete/<%= data._id %>" ><span>Del</span></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
        </main>
    )
}

export default AllUsers
