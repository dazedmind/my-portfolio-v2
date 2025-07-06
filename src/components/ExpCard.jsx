import React from 'react'
import { GoBriefcase, GoClock } from 'react-icons/go'

const truncateDescription = (description) => {
    if (description.length > 100) {
        return description.substring(0, 100) + '...'
    }
    return description
}

function ExpCard(props) {
  return (
    <div className="border-2 border-neutral-700 rounded-lg p-4 md:w-3/4 hover:bg-mustard/30 transition-all duration-300 ease-linear cursor-pointer">
        <div className="flex flex-col justify-start gap-1">
            <p className="text-md text-neutral-500 font-mono">{props.number}</p>
            <h2 className="text-xl font-bold text-green-100">{props.position}</h2>
            <p className="flex items-center font-satoshi-medium gap-1 text-sm text-neutral-500">
                <GoBriefcase/> {props.organization}
            </p>
            <p className="flex items-center gap-1 text-sm text-neutral-500">
                <GoClock/> {props.duration}
            </p>
            <p className="text-sm text-neutral-500">
                {truncateDescription(props.description)}
            </p>
        </div>
    </div>
  )
}

export default ExpCard