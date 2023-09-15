interface TimeSlotProps {
    time: string,
    timeType: string
}

const TimeSlot : React.FC<TimeSlotProps> = ({time, timeType}) => {
    return (
        <div className="flex flex-col">
        <div className="w-10">
            <p>{time} 
               {timeType != "s" && <span className="px-1">: </span>}
            </p>
        </div>
        <div className="">
            <p>{timeType}</p>
        </div>
    </div>
    )
}

export default TimeSlot