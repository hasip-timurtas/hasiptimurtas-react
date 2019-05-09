import React from 'react'

const navbar = (props) => {
  
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/"><img className="block" id="u1235_img" src="img/logo1.png" alt="" width="72" height="80" /></a>
            </div>

                <ul className="navbar-nav text-center">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/videos">Educational Videos</a></li>
                </ul>

        </div>
    </nav>
  )
}




export default navbar;

