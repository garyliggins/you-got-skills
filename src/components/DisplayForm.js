import React from 'react'

const DisplayForm = ({skillList}) => {

    if (skillList.length > 0 ) {
    return (
        <div className="display">

            {
                skillList.map((skill) => (
                        <div>
                            <h2>{skill}</h2>
                        </div>
                    
                ))
            }
        </div>
    )
}
else {
    return(
        <div>
        <h1>What are your skills?</h1>
    </div>
    )
}
   
    
}

export default DisplayForm
