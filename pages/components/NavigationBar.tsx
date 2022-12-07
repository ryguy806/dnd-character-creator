import Link from 'next/link'

const notHomeStyle = {width: '25%', justifyContent: 'center', alignItems: 'center', border: 'solid 1px green'}
const spaceStyle = {width: '35%', justifyContent: 'center', alignItems: 'center', border: 'solid 1px green'}
const homeStyle = {width: '15%', justifyContent: 'center', alignItems: 'center', border: 'solid 1px green'}

export default function NavigationBar() {
    return (
        <div style={{position: 'fixed', height: '10vh', width: '100%', top: 0, display: 'flex', flexDirection: 'row', backgroundColor: 'blue', color: 'white'}}>
            <Link style={homeStyle} href='/'>Home</Link>
            <div style={spaceStyle}></div>
            <Link href='/characters' style={notHomeStyle}>All Characters</Link>
            <Link href='/creator' style={notHomeStyle}>Character Creator</Link>
        </div>
    )
}