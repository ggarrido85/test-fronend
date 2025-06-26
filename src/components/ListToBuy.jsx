
export function ListToBuy({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <div class="relative mx-auto flex h-72 max-w-sm flex-col divide-y divide-gray-200 overflow-auto rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:divide-gray-200/5 dark:bg-gray-800">
            <div class="flex items-center gap-4 p-4"><img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80">
                <div class="flex flex-col"><strong class="text-sm font-medium text-gray-900 dark:text-gray-200">Andrew Alfred</strong><span class="text-sm font-medium text-gray-500 dark:text-gray-400">Technical advisor</span>
                </div>
            </div>

            <div class="flex items-center gap-4 p-4"><img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80">
                <div class="flex flex-col"><strong class="text-sm font-medium text-gray-900 dark:text-gray-200">Debra Houston</strong><span class="text-sm font-medium text-gray-500 dark:text-gray-400">Analyst</span></div></div><div class="flex items-center gap-4 p-4"><img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"><div class="flex flex-col"><strong class="text-sm font-medium text-gray-900 dark:text-gray-200">Jane White</strong><span class="text-sm font-medium text-gray-500 dark:text-gray-400">Director, Marketing</span>
                </div>
            </div>
            <div class="flex items-center gap-4 p-4"><img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"><div class="flex flex-col"><strong class="text-sm font-medium text-gray-900 dark:text-gray-200">Ray Flint</strong>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Technical Advisor</span>
            </div>
            </div>
        </div>)

}