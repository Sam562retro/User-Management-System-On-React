import React from 'react'
import './css/Index.css';

function Form() {
    return (
        <main className="mainSection">
            <div className="container">
                <div className="box-nav d-flex justify-between">
                    <div className="filter">
                        <a href="/" className="btn box-shadow">All Users</a>
                    </div>
                </div>
                <div className="form-title text-center">
                    <h2 className="text-dark">New User</h2>
                    <span className="text-light">use the bellow form to create a new user</span>
                </div>
                <form method="post" autocomplete='off' id="add_user" action="/api/users">
                    <div className="new_user">
                        <div className="form-group">
                            <label for="name" className="text-light">Name</label>
                            <input type="hidden" name="id" value="" />
                            <input type="text" name="name" value="" placeholder="enter your name" />
                        </div>
                        <div className="form-group">
                            <label for="email" className="text-light">Email</label>
                            <input type="email" name="email" value="" placeholder="enter your email" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Gender</label>
                            <div className="radio inline">
                                <input type="radio" id="radio-2" name="gender" value="Male" required />
                                <label for="radio-2" className="radio-label">Male</label>
                            </div>
                            <div className="radio inline">
                                <input type="radio" id="radio-3" name="gender" value="Female" required />
                                <label for="radio-3" className="radio-label">Female</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Status</label>
                            <div className="radio inline">
                                <input type="radio" id="radio-4" name="status" value="Active" required />
                                <label for="radio-4" className="radio-label">Active</label>
                            </div>
                            <div className="radio inline">
                                <input type="radio" id="radio-5" name="status" value="Inactive" required />
                                <label for="radio-5" className="radio-label">Inactive</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-dark update" value="Add User" />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Form
