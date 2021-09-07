import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link href='/' passHref>
                    <h2 style={{ 'cursor': 'pointer' }}>Static blog</h2>
                </Link>
                <Link href='/contact' passHref>
                    <h2 style={{ 'cursor': 'pointer' }}>Conact page</h2>
                </Link>
                <Link href='/bio' passHref>
                    <h2 style={{ 'cursor': 'pointer' }}>Bio page</h2>
                </Link>
            </div>
        </header>
    )
}

export default Navbar 
