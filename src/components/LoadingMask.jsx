
export function LoadingMask({ products }) {

    let N = 10
    let i = 1
    return (
        <div className="flex flex-row content-end justify-start items-center flex-wrap ">
            {
                Array.apply(null, {length: N}).map((i) => (
                    <div key={(i++)+"loading"} className="mt-10  ml-5 mx-auto w-50 h-80 max-w-sm rounded-md border border-black p-8 top-10  ">
                        <div className="flex animate-pulse space-x-4">
                            <div className="size-10 rounded-full bg-gray-200"></div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 rounded bg-gray-200"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-6 gap-4">
                                        <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                                        <div className="col-span-1 h-2 rounded bg-gray-200"></div>   
                                        <div className="col-span-3 h-2 rounded bg-gray-200"></div>
                                        <div className="col-span-4 h-2 rounded bg-gray-200"></div> 
                                        <div className="col-span-5 h-2 rounded bg-gray-200"></div>
                                        <div className="col-span-6 h-2 rounded bg-gray-200"></div>      </div>
                                    <div className="h-2 rounded bg-gray-200"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))

            }
        </div>
    )

}