import { useRouter } from "next/router";

export default function Article() {
    const router = useRouter()
    const { id } = router.query
    return(
        <h1 className="flex h-screen w-screen items-center justify-center">Article {id} coming soon!</h1>
    )
}
