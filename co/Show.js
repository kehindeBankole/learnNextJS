import Nav from './Nav'
import Footer from './Footer'
function Show({children}) {
    return (
        <>
        <Nav />
        <Footer />
         <div className={''}>
            {children}
        </div></>
       
    )
}

export default Show
