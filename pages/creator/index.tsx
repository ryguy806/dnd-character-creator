
const Creator = () => {

    return (
        <>
            <h1>This is the creator page! We make characters here.</h1>
            <form action="#">
                <input type="text" name="character_name" id="character_name" />
                <select name="character_species" id="character_species">
                    <option value="human">Human</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="elf">Elf</option>
                    <option value="halfing">Halfling</option>
                    <option value="half-elf">Half-elf</option>
                    <option value="half-orc">Half-orc</option>
                    <option value="tiefling">Tiefling</option>
                    <option value="dragonborn">Dragonborn</option>
                </select>
                <select name="character_class" id="character_class">
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
                <input type="number" name="class_lvl" id="class_lvl" />
                <button type="submit">Create Character</button>
            </form>
        </>
    )
}

export default Creator;