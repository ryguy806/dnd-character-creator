
import Link from 'next/link'

const buttonStyle = {margin: 4, padding: '10px', border: 'solid 1pt black'}
const homeNavStyle = {display: 'flex', FlexDirection:'row'}

export default function Home() {
  return (
    <div style={{display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center"}}>
      <h1>Welcome to your D&D Character Manager!</h1>
      <div style={homeNavStyle}>
        <div style={buttonStyle}>
          <Link href='/characters/all'> Here you can view your already created characters!</Link>
        </div>
        <div style={buttonStyle}>
          <Link href='/characters/creator'> Here you can create your new character!</Link>
        </div>
      </div>
    </div>
  )
}
