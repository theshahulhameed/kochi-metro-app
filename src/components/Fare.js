import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import stations from "../data/station"
import fareDetail from "../data/fareDetail"

function Fare() {
    const [fare, setFare] = useState(0)
    function submitFn(event){
        event.preventDefault()
        const form = event.target
        const origin = form.origin.value
        const destination = form.destination.value
        const reqdStation = fareDetail.find(function(fareStation)
        {
            return(fareStation.originId == origin && fareStation.destId == destination)
        })
        setFare(reqdStation.fare)
    }
    return (
        <main>
            <Header subtitle="Fare Calculator" />
            <form className="section container level" onSubmit={submitFn}>
                <div class="select">
                    <label>Origin</label>
                    <select name="origin">
                        {stations.map(function(station){
                            return (
                                <option value={station.stop_id}>{station.stop_name}</option>
                            )
                        }
                        )}
                    </select>
                </div>
                <div class="select">
                    <label>Destination</label>
                    <select name="destination">
                        {stations.map(function(station){
                            return (
                                <option value={station.stop_id}>{station.stop_name}</option>
                            )
                        }
                        )}
                    </select>
                </div>
                <div className="control">
                    <button className="button is-primary">Calculate</button>
                </div>
            </form>
            <p>Your fare is {fare}</p>
            <Footer />
        </main>
    );
}

export default Fare;
