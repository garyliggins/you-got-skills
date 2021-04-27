import React from 'react'

const Input = ({skill, setSkill, skillList, setSkillList}) => {

    const onAdd = (e) => {
        setSkillList([...skillList,skill]);
    }

    return (
        <div>
           
            <label style={{margin : "10px"}}>What's Your Skill?</label>
            <input type="text" onChange={(e) => setSkill(e.target.value)} />
            <br/>
        
            <button onClick={onAdd}>Add Skill</button>
        </div>
    )
}

export default Input
