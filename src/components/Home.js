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
            <section class="level is-mobile">
                <div class="level-item has-text-centered">
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
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input" />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                        <p class="help is-danger">This email is invalid</p>
                    </div>
                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>
                    <div class="control">
                        <button class="button is-primary">Submit</button>
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
