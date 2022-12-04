import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <>
            <div style={{height: '10vh'}}><NavigationBar/></div>
            <main>{children}</main>
            <Footer/>
        </>
    )
}