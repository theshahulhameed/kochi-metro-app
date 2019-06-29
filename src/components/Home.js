import React from "react";
import Header from "./Header"
import Footer from "./Footer"

function Home() {
    return (
        <main>
        <Header />
            <section className="level is-mobile">
                <div className="level-item has-text-centered">
                    <div>
                        <h2>Services</h2>
                        <ol>
                            <li>Kochi Metro Rail Ltd.</li>
                            <li>Water Metro</li>
                            <li>Cycles</li>
                        </ol>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <h2>Upcoming Services</h2>
                        <ul>
                            <li>One Ticket</li>
                            <li>NMT</li>
                            <li>Feeder Services</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section container">
                <form>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                        <p className="help is-danger">This email is invalid</p>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-primary">Submit</button>
                    </div>
                </form>
            </section>
            <Footer />
        </main>
    )
}

export default Home;
