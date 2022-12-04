import Link from 'next/link'

export default function NavigationBar() {
    return (
        <div style={{position: 'fixed', height: '10vh', width: '100%', top: 0, display: 'flex', flexDirection: 'row', backgroundColor: 'blue', color: 'white'}}>
            <Link style={{width: '15%', border: 'solid 1px green'}} href='/'>Home</Link>
            <div style={{width: '35%', border: 'solid 1px green'}}></div>
            <Link href='/characters' style={{width: '25%', justifyContent: 'center', alignItems: 'center', border: 'solid 1px green'}}>All Characters</Link>
            <Link href='/creator' style={{width: '25%', justifyContent: 'center', alignItems: 'center', border: 'solid 1px green'}}>Character Creator</Link>
        </div>
    )
}