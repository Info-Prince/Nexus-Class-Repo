export default function Header () {
    return (
        <div className="navbar">

            <img src="./myntra.webp"/>
            <ul className="nav-links flex">
                <li className="link">Men</li>
                <li className="link">Women</li>
                <li className="link">Kids</li>
                <li className="link">Home & Living</li>
                <li className="link">Beauty</li>
            </ul>
            <input type="search"/>

        </div>
    )
}