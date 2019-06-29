import React from "react";

function Home() {
    return (
        <main>
            <section className="hero is-medium is-success is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Kochi Metro Application
                            </h1>
                        <h2 className="subtitle">
                            Pricing & Station Information
                            </h2>
                    </div>
                </div>
            </section>
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
            <section className="container">
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
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>Website by <strong>Shahul Hameed.</strong> </p>
                    </div>
                </footer>
        </main>
    )
}

export default Home;
