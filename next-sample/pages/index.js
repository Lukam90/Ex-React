import Link from "next/link"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div>
            <Navbar />

            <h1>Homepage</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere cupiditate inventore voluptatum repellendus, ut qui rerum. Blanditiis itaque esse sed optio consequuntur eveniet sequi deleniti voluptates eaque ipsum ad saepe velit voluptatem, impedit perferendis veniam ab ducimus voluptatum ipsam quas odio quisquam a quo? Maiores sed voluptates animi necessitatibus.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dignissimos asperiores. Earum, obcaecati officiis corporis maiores ex cupiditate distinctio aliquid perspiciatis quis libero itaque error aliquam ab, quo eligendi similique voluptatibus quos nisi magnam minus consectetur incidunt. Laborum sed suscipit recusandae, iure voluptatibus qui temporibus magnam repudiandae asperiores, fugit quisquam.</p>

            <Link href="/ninjas">See Ninja Listing</Link>

            <Footer />
        </div>
    )
}