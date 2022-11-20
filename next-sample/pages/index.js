import Link from "next/link"

import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div>
            <h1 className={styles.title}>Homepage</h1>

            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere cupiditate inventore voluptatum repellendus, ut qui rerum. Blanditiis itaque esse sed optio consequuntur eveniet sequi deleniti voluptates eaque ipsum ad saepe velit voluptatem, impedit perferendis veniam ab ducimus voluptatum ipsam quas odio quisquam a quo? Maiores sed voluptates animi necessitatibus.</p>

            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dignissimos asperiores. Earum, obcaecati officiis corporis maiores ex cupiditate distinctio aliquid perspiciatis quis libero itaque error aliquam ab, quo eligendi similique voluptatibus quos nisi magnam minus consectetur incidunt. Laborum sed suscipit recusandae, iure voluptatibus qui temporibus magnam repudiandae asperiores, fugit quisquam.</p>

            <Link href="/ninjas">
                <button className={styles.btn}>See Ninja Listing</button>
            </Link>
        </div>
    )
}