

export function PostSkeleton() {

    return <div className="flex justify-center pt-10">
        <div role="status" className="w-6/12 animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full  w-100 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
    </div>

    // return <div>
    //     <Skeleton />
    // </div>


}
// function Skeleton() {

//     return <div className="flex justify-center pt-10">

//         <div role="status" className="animate-pulse">
//             <div className=" p-4 border-b border-slate-200 pb-4">
//                 <div className="flex">
//                     <div className="flex justify-center flex-col">
//                         <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
//                     </div>

//                     <div className="font-light pl-2 text-base">
//                         <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
//                     </div>
//                     <div className="flex justify-center flex-col pl-2">
//                         <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
//                     </div>
//                     <div className="flex justify-center flex-col text-sm font-thin pl-2 text-slate-400">
//                         <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="text-xl font-semibold pt-1">
//                         <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
//                     </div>
//                 </div>
//                 <div>
//                     <p className="text-md font-thin pt-1">
//                         <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
//                     </p>
//                     <p className="text-slate-500 text-sm font-light">
//                         <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
// }