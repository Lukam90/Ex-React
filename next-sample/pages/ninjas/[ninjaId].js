export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params: { ninjaId: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id

    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const data = await res.json()

    return {
        props: { ninja: data }
    }
}

export default function Details({ ninja }) {
    return (
        <div>
            <h1>{ninja.name}</h1>

            <p>{ninja.name}</p>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
        </div>
    )
}