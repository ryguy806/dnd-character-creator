import { NextPage } from "next"
import { FormEvent, useState } from "react"

const Creator: NextPage = () => {

    const [id, setId] = useState<number>(1)
    const [characterName, setCharacterName] = useState<string>("")
    const [characterSpecies, setCharacterSpecies] = useState<string>("")
    const [characterClasses, setCharacterClasses] = useState<string[]>([])
    const [characterClassLevels, setCharacterClassLevels] = useState<number[]>([])

    const addCharacterName = (name: string) => setCharacterName(name);

    const addClassAndClassLevel = (e: FormEvent) => {
        e.preventDefault()
        const form = document.getElementById("character_form")
        
        const newClass = document.createElement('select')
        newClass.name = "character_class"
        newClass.id = "character_class_" + id
        
        const newClassLevel = document.createElement('input')
        newClassLevel.type = "number"
        newClassLevel.name = "character_level"
        newClassLevel.id = "class_lvl" + id
        newClassLevel.value = characterClassLevels[characterClassLevels[id]] + ""

        const classOptions = ["Bard", "Monk", "Barbarian", "Druid", "Rogue", "Ranger", "Fighter", "Paladin", "Sorcerer", "Wizard", "Artificer", "Warlock", "Cleric"]
        for(var i = 0; i < classOptions.length; i++){
            let option = document.createElement('option')
            option.value = classOptions[i].toLowerCase()
            option.text = classOptions[i]
            newClass.appendChild(option);
        }
        
        form?.insertBefore(newClass, form.lastChild)
        form?.insertBefore(newClassLevel, form.lastChild)

        setId(id + 1)
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await saveFormData({"characterName": characterName})//TODO get and save information
    }

    const saveFormData = ({}) => {

    }

    return (
        <>
            <h1>This is the creator page! We make characters here.</h1>
            <div style={{display: 'flex', flexDirection: "row",}}>
            <form onSubmit={onSubmit} action="" id="character_form">
                <label htmlFor="character_name">Name:</label>
                <input type="text" name="character_name" id="character_name" value={characterName} onChange={e => setCharacterName(e.target.value)}/>
                <label htmlFor="chararacter_species">Species:</label>
                <select name="character_species" id="character_species" onChange={e => setCharacterSpecies(e.target.value)}>
                    <option value="human">Human</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="elf">Elf</option>
                    <option value="halfing">Halfling</option>
                    <option value="half-elf">Half-elf</option>
                    <option value="half-orc">Half-orc</option>
                    <option value="tiefling">Tiefling</option>
                    <option value="dragonborn">Dragonborn</option>
                </select>
                <label htmlFor="character_class">Character Class:</label>
                <select name="character_class" id="character_class_0">
                    <option value="bard">Bard</option>
                    <option value="monk">Monk</option>
                    <option value="barbarian">Barbarian</option>
                    <option value="druid">Druid</option>
                    <option value="rogue">Rogue</option>
                    <option value="ranger">Ranger</option>
                    <option value="fighter">Fighter</option>
                    <option value="paladin">Paladin</option>
                    <option value="sorcerer">Sorcerer</option>
                    <option value="wizard">Wizard</option>
                    <option value="artificer">Artificer</option>
                    <option value="warlock">Warlock</option>
                    <option value="cleric">Cleric</option>
                </select>
                <input type="number" name="class_lvl" id="class_lvl_0" value={characterClassLevels[characterClassLevels[0]]}/>
                <button onClick={(e: FormEvent) => addClassAndClassLevel(e)} id="add_class_button">Add Class</button>
                <button type="submit">Create Character</button>
            </form>
            </div>
        </>
    )
}

export default Creator;