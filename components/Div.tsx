import React from 'react'

type Props = {
    style: object
    divId: number
    divName: string
    divText: string
    divNavigation: string
    childrenDiv: Array<Props>
}

function Div({style, childrenDiv, divId, divName, divText}:Props) {
    return (
        <div>
            {divText}
            {childrenDiv.map((child, index) => <Div key={index} {...child}/>)}
        </div>
    );
}

export default Div;