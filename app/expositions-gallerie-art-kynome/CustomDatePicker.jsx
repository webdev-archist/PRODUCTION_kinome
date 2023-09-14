'use client'

import { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { subDays, addDays, setHours, setMinutes, addMonths } from 'date-fns';
import GlobalContext from "../GlobalContext"



export default function CustomDatePicker() {

    // console.log(datas)

    const {activedExpo,setActivedExpo,dates_before,dates_after} = useContext(GlobalContext)
    // , [dateRange, setDateRange] = useState([setHours(setMinutes(new Date(), 0), 9), null])
    , [dateRange, setDateRange] = useState([setHours(setMinutes(new Date(), 0), 9), null])
    , [startDate, endDate] = dateRange
    , onChange = (update) => {
        // alert(+new Date(update[0]))
        let a = new Date(update[0])
        let b = new Date(update[1])
        // du.value = a.getFullYear()+"-"+a.getMonth().toLocaleString('fr-FR', { minimumIntegerDigits: 2 })+"-"+a.getDate().toLocaleString('fr-FR', { minimumIntegerDigits: 2 })
        // au.value = b.getFullYear()+"-"+b.getMonth().toLocaleString('fr-FR', { minimumIntegerDigits: 2 })+"-"+b.getDate().toLocaleString('fr-FR', { minimumIntegerDigits: 2 })
        du.value = a.toISOString().slice(0, 16)
        au.value = b.toISOString().slice(0, 16)
        alert(a.toISOString().slice(0, 16))
        setDateRange(update);
        setActivedExpo(update)
    }
    , filterPassedTime = (time) => {
        const selectedDate = new Date(time);

        return selectedDate.getHours() < 7 && selectedDate.getHours() > 22
    }
    , highlightWithRanges = [
        {
            "react-datepicker__day--highlighted-custom-1": [
                subDays(new Date(), 4),
                subDays(new Date(), 3),
                subDays(new Date(), 2),
                subDays(new Date(), 1),
            ],
        },
        {
            "react-datepicker__day--highlighted-custom-2": [
                addDays(new Date(), 1),
                addDays(new Date(), 2),
                addDays(new Date(), 3),
                addDays(new Date(), 4),
            ],
        },
    ]
    , handleOnBlur = ({ target: { value } }) => {
        const date = new Date(value);
        if (isValid(date)) {
            console.log("date: %s", format(date, "dd/MM/yyyy"));
            alert(dateRange)
            setDateRange([startDate, endDate])
        } else {
            console.log("value: %s", date);
        }
    }



    
    console.log(dates_before)
    // console.log(dates_after)
    // console.log(activedExpo)

    return (<>
        <ul>
            {dates_before.map((item,i) => <li test={i} key={"expo_date_"+i}><Link href={"/expositions-gallerie-art-kynome/"+i}>({item[0]+" --- "+item[1]})</Link></li>)}
        </ul>
        <DatePicker
            // locale="fr-FR"
            dateFormat="d MMMM yyyy, h:mm aa"
            selected={startDate}
            onChange={onChange}
            onBlur={handleOnBlur}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            // filterTime={filterPassedTime}
            minTime={setHours(setMinutes(new Date(), 0), 7)}
            maxTime={setHours(setMinutes(new Date(), 30), 22)}
            maxDate={addMonths(new Date(), 18)}
            timeIntervals={15}
            monthsShown={3}

            // placeholderText="blablabla"
            shouldCloseOnSelect={false}
            isClearable={true}
            selectsRange
            inline
            // showTimeSelect
            showTimeInput
            // showMonthYearPicker
            // showFullMonthYearPicker


            // excludeDates={[addDays(new Date(), 25), addDays(new Date(), 26), addDays(new Date(), 27)]}
            highlightDates={highlightWithRanges}
            excludeDateIntervals={[{ start: addDays(new Date(), 25), end: addDays(new Date(), 27) }]}
            // includeDateIntervals={[{ start: addDays(new Date(), 22), end: addDays(new Date(), 24) },]}
            // calendarStartDay={new Date().getDate()}

            // dateFormat="MM/yyyy"
            todayButton="yuuhooo, today c'est ajd !!!"
        />
        <ul>
            {dates_after.map((item,i) => <li key={"expo_date_"+(dates_before.length+i)}><Link href={"/expositions-gallerie-art-kynome/"+(dates_before.length+(activedExpo?1:0)+i)}>({item[0]+" --- "+item[1]})</Link></li>)}
        </ul>
    </>)
}
