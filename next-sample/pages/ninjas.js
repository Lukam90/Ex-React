import Link from "next/link"

import styles from "../styles/Ninjas.module.css"

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return {
        props: { ninjas: data }
    }
}

export default function Ninjas({ ninjas }) {
    return (
        <div>
            <h1>All Ninjas</h1>

            {ninjas.map(ninja => (
                <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
                    <div className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}