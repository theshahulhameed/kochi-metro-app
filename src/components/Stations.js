import React from "react";
import Header from "./Header"
import stations from "../data/station"

function Stations() {
  const station = stations[0]
  return (
  <main>
  <Header subtitle="Stations Information"/>
  <section className="container">
    {stations.map(function(station) {
      return (
        <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png" /> 
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{ station.stop_name }</strong>
        <br />
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
    </article>
      )
    })}
  </section>
  </main>
  )
}

export default Stations;
