// import { useState, useEffect } from 'react'
import CustomDatePicker from "./CustomDatePicker"
import SpanArrow from "./SpanArrow"



export default function ExposCalendar() {




    return (
        <section id="exposCalendar">
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
            <SpanArrow arrow="&lt;" />
            <div className="datepicker">
                <CustomDatePicker />
            </div>
            <SpanArrow arrow="&gt;" />
        </section>
    )
}
