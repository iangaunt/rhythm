import Link from "next/link";

export default function Navbar(): JSX.Element {
    return (
        <div className="navbar">
            <p className="idx">iangaunt</p>
            <Link href="/">Home</Link>
            <Link href="/about/page">Other Page</Link>
        </div>
    )
}