import React from "react"

function Header(props) {
    return (
    <section className="hero is-medium is-success is-bold">
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    Kochi Metro Application
                </h1>
                <h2 className="subtitle">
                    {props.subtitle}
                </h2>
            </div>
        </div>
    </section> 
    )
}


export default Header