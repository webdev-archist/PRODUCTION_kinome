// import { useState, useEffect } from 'react'
import CustomDatePicker from "./CustomDatePicker"



export default function ExposCalendar({setExpoSelected}) {




    return (
        <section className="exposCalendar">
            {/* <form>
                <fieldset id="input_artistes">
                    <label><span>input_artistes</span>
                        <input type="text" />
                    </label>
                </fieldset>
                <fieldset id="input_expos">
                    <label><span>input_expos</span>
                        <input type="text" />
                    </label>
                </fieldset>
                <fieldset id="input_style">
                    <label><span>input_style</span>
                        <input type="text" />
                    </label>
                </fieldset>
            </form> */}
            <div className="datepicker">
                <CustomDatePicker {...{setExpoSelected}} />
            </div>
            <ul id="expo_results">

            </ul>
        </section>
    )
}
