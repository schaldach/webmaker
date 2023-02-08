import React from 'react'

type Props = {
    style: object
    divId: number
    divName: string
    divText: string
    childrenDiv: Array<Props>
}

function Div({style, childrenDiv, divId, divName, divText}:Props) {
    return (
        <div>
            {divText}
            {childrenDiv.map(child => <Div {...child}/>)}
        </div>
    );
}

export default Div;