/* eslint-disable react/prop-types */
let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

function DaysofTheWeek() {
    const listOfDays = (props) => {
        return props.map((day) => <li key={props.index}>{day}</li>);
    };
return <ul>{listOfDays(weekDays)}</ul>;
}

export default function App(){
    return (
        <div>
            <DaysofTheWeek />
        </div>
    )
}