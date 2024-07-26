import { Appbar } from "../components/Appbar";
import { PostCard } from "../components/PostCard";
import { PostSkeleton } from "../components/Skeleton";
import { usePosts } from "../hooks";

export function Posts() {
    const { loading, posts } = usePosts();
    if (loading) {
        return <div>
            <Appbar></Appbar>
            <div className="">

                <div className="">
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    

                </div>

            </div>



        </div>
    }

    return <div>
        <Appbar />
        <div className="flex justify-center  ">

            <div className="max-w-2xl  ">
                {posts.map(post => <PostCard
                    authorName={post.author.name || "anonymous"}
                    title={post.title}
                    content={post.content}
                    publishedDate={"18 july 2024"}
                    id={post.id}
                />)}
            </div>
        </div>
    </div>
}
