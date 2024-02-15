function UserFieldsProfile({ isGlobal, setIsGlobal }:
  {
    isGlobal: boolean,
    setIsGlobal: React.Dispatch<React.SetStateAction<boolean>>
  }) {
  return (
    <section className="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
        <div className="relative bg-white dark:bg-slate-900 px-6 flex flex-col justify-end">
          <div className="pb-5 md:border-b border-slate-200 dark:border-slate-700">
            <div className="max-md:text-center">
              <div className="inline-flex items-center whitespace-nowrap">
                <div className="text-sm text-slate-500 mr-2 md:max-lg:sr-only">Monthly</div>
                <div className="relative">
                  <input type="checkbox" id="toggle" className="peer sr-only" x-model="isAnnual" />
                  <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-indigo-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-indigo-500">
                    <span className="sr-only">Pay Yearly</span>
                  </label>
                </div>
                <div className="text-sm text-slate-500 ml-2">Yearly <span className="text-emerald-500">(-20%)</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-1" aria-hidden="true">
          <div className="py-2 text-slate-900 font-medium mt-4">Platform</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-2" aria-hidden="true">
          <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Account Access</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-3" aria-hidden="true">
          <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Custom Domains</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-4" aria-hidden="true">
          <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Receipts Forward</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-5" aria-hidden="true">
            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Supplier Management</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-6" aria-hidden="true">
          <div className="py-2 text-slate-900 font-medium mt-4">Features</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-7" aria-hidden="true">
          <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Generate Public URLs</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-8" aria-hidden="true">
          <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">API Integrations</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-9" aria-hidden="true">
          <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Extra Add-ons</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-10" aria-hidden="true">
          <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Admin Roles</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-11" aria-hidden="true">
          <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Admin Roles</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-12" aria-hidden="true">
          <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Enterprise Add-ons</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-[13]" aria-hidden="true">
          <div className="py-2 text-slate-900 font-medium mt-4">Support</div>
        </div>
        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-[14]" aria-hidden="true">
          <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Custom Connection</div>
        </div>
      </section>
  )
}

export default UserFieldsProfile
