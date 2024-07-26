import { usePost } from "../hooks";
import { Appbar } from "./Appbar";
import {  AvatarAppBar } from "./PostCard";
import { PostSkeleton } from "./Skeleton";



export function FullPost({ id }: { id: string }) {
    const { loading, post } = usePost({ id });

    if (loading) {


        return <div>
            <Appbar></Appbar>
           
                <div className="">

                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                </div>
        </div>
    }
    if (!post) {
        return "not available";
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">


            <div className=" grid grid-cols-12 px-40 w-full pt-16">

                <div className="col-span-8 ">
                    <div className="text-3xl font-extrabold">
                        {post.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 2nd december 2023

                    </div>
                    <div className="pt-2">
                        {post.content}
                    </div>
                </div>

                <div className="col-span-4 ">
                    <div className="text-slate-700 font-semibold">
                        Author

                    </div>
                    <div className="flex  pt-7">
                        <div >
                            <AvatarAppBar name={post.author.name ? post.author.name : "Anonymous"} />
                        </div>

                        <div>
                            <div className="text-2xl pl-4 font-bold">
                                {post.author.name ? post.author.name : "Anonymous"}
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    </div>
}