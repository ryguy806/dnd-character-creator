
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h1>Welcome to your D&D Character Manager!</h1>
      <div style={{display: 'flex', flexDirection:'row'}}>
        <div style={{margin: 4, padding: '10px', border: 'solid 1pt black'}}>
          <Link href='/characters'> Here you can view your already created characters!</Link>
        </div>
        <div style={{margin: 4, padding: '10px', border: 'solid 1pt black'}}>
          <Link href='/characters'> Here you can create your new character!</Link>
        </div>
      </div>
    </div>
  )
}
