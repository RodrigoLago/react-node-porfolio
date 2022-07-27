import React from "react";
import { Cards } from "../Cards/Cards";
export const Portfolio =()=>{
      return <section id="proyectos">
      <div className="container">
        <div className="row cv">
          <div className="col-lg-12 text-center">
            <h2>Algunos proyectos</h2>
            <hr className="star-primary" />
          </div>
        </div>
      </div>
      <Cards />
    </section>
}