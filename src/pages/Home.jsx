import React from "react";
import "../css/Home.css";
const Home = () => {
    return (
        <div className="main vh-100">
            <nav className="navbar">
            <a class="nav-link" href="#">00 Home</a>
            <a class="nav-link" href="#">01 Destination</a>
            <a class="nav-link" href="#">02 Crew</a>
            <a class="nav-link" href="#">03 Technology</a>
            </nav>

            <div className="container">
            <h2>So, you want to travel to</h2>
            <h1>Space</h1>

            <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!
            </p>
            </div>

            <button>Explore</button>

        </div>
    );
}

export default Home;
