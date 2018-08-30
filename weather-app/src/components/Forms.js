import React from "react";

const Forms = props => (

            <form onSubmit = {props.getWeather}>
                <input type="text" name="city" placeholder="city"/> <br/>
                <input type="text" name="country" placeholder="country"/> <br/>
                <button>Get Weather</button>
            </form>

);

export default Forms;