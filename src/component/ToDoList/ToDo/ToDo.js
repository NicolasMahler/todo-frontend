import React, { useEffect } from 'react';

const ToDo = ({todo}) => {

    useEffect(() => {
        console.log(todo);
    })

    return (
        <p>hello</p>
    )

}

export default ToDo;