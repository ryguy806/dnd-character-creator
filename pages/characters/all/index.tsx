import Link from 'next/link'
import NextFunctionComponent from 'next' 
import Character from '../../../CharacterClass/Character'

type CharacterArray = {
    characters: Character[]
}

const defaultCharacterList: Character[] = [new Character("Example Character", "Human", ["Barbarian"], [1], 0)]

const All = ({characters}: CharacterArray) => {

    if(characters && characters.length === 0) characters = defaultCharacterList;
    
    return (
        <>
            <h2>Character List</h2>
            <ul>
                {characters && characters.map((character) => (
                    <li key={character.getID()}>
                       <Link href={`/characters/${character.getID()}`}>
                            <h3>{character.getName()}</h3>
                            <h4>{character.getSpecies()}</h4>
                            <h4>{character.classesAndLevelsToString()}</h4>
                        </Link> 
                    </li>
                    
                ))}
            </ul>
        </>
    )
}

export default All;