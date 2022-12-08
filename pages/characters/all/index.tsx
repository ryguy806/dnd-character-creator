import Link from 'next/link'
import NextFunctionComponent from 'next' 
import Character from '../../../CharacterClass/Character'

type CharacterArray = {
    characters: Character[]
}

const linkStyles = {display: 'flex', border: 'solid 1px black', width: '30%', padding: '1%'}

const defaultCharacterList: Character[] = [new Character("Example Character", "Human", ["Barbarian"], [1], 0)]

const All = ({characters}: CharacterArray) => {

    
    
    return (
        <>
            <h2>Character List</h2>
            <ul>
                {characters && characters.length < 0 ? characters.map((character) => (
                    <Link href={`/characters/${character.getID()}`} key={character.getID()}>
                        <li  style={linkStyles}>
                            <h3>{character.getName()}</h3>
                            <h4>{character.getSpecies()}</h4>
                            <h4>{character.classesAndLevelsToString()}</h4>
                        </li>
                    </Link>
                )) : <li key={0} style={linkStyles}><Link href={`/characters/0`}>
                    <h3>Example Character</h3>
                    <h4>Human</h4>
                    <h4>Barbarian 1</h4>
                </Link></li>}
            </ul>
        </>
    )
}

export default All;