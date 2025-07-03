import React from 'react'

function SkillTags(props) {
  return (
    <div>
        <li className=' bg-midnight border-2 border-neutral-800 rounded-full p-2 px-3 text-sm flex items-center gap-2'>
            <p>{props.icon}</p>
            <p>{props.name}</p>
        </li>
    </div>
  )
}

export default SkillTags