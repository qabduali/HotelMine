import React from 'react';

function LoginForm() {
    return (
        <form>
            <div className="form-inner">
                <h3>Login</h3>
                {/* Error*/}
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type = "email" name="email" id="email" placeholder="Email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" pattern = "[A-Za-z\d]{8,}" placeholder="Password" required></input>
                </div>
                <input type="submit" value="Login"></input>
            </div>
        </form>
    )
}

export default LoginForm;
