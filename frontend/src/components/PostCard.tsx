import { Link } from "react-router-dom";

interface PostCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}


export function PostCard({
    authorName, title, content, publishedDate,id
}: PostCardProps) {
    return <Link to={`/post/${id}`}>
        <div className="cursor-pointer">
            <div className=" p-4 border-b border-slate-200 pb-4">
                <p className="flex">
                    <div className="flex justify-center flex-col">
                        <Avatar name={authorName} />
                    </div>

                    <div className="font-light pl-2 text-base">
                        {authorName}
                    </div>
                    <div className="flex justify-center flex-col pl-2">
                        <Circle />
                    </div>
                    <div className="flex justify-center flex-col text-sm font-thin pl-2 text-slate-400">
                        {publishedDate}
                    </div>

                </p>
                <p>
                    <div className="text-xl font-semibold pt-1">
                        {title}
                    </div>

                </p>
                <p className="text-md font-thin pt-1">
                    {content.slice(0, 100) + "..."}
                </p>
                <p className="text-slate-500 text-sm font-light">
                    {`${Math.ceil(content.length / 100)} minutes`}
                </p>

            </div>
        </div>
    </Link>
}
export function Avatar({ name }: { name: string }) {
    return <div className={`relative inline-flex items-center justify-center w-5  h-5 overflow-hidden bg-gray-100
    rounded-full dark:bg-gray-600`}>
        <span className="text-xs text-gray-600 dark:text-gray-300">{name[0] || "A"}</span>
    </div>
}
export function AvatarAppBar({ name }: { name: string }) {
    return <div className={`relative inline-flex items-center justify-center w-8  h-8 overflow-hidden bg-gray-100
    rounded-full dark:bg-gray-600`}>
        <span className="text-xs text-gray-600 dark:text-gray-300">{name[0] || "A"}</span>
    </div>
}
function Circle() {
    return <div className="w-1 h-1 rounded-full bg-slate-300">
    </div>
}