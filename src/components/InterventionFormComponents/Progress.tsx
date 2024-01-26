function Progress() {
  return (
    <div className="relative h-40 w-40">
      <svg className="h-full w-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth="2"></circle>
        <g className="origin-center -rotate-90 transform">
          <circle cx="18" cy="18" r="16" fill="none" className="animate-pulse stroke-current text-green-600 dark:text-green-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="28"></circle>
        </g>
      </svg>
      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center text-2xl text-gray-800 dark:text-white">72%</span>
      </div>
    </div>
  )
}

export default Progress
