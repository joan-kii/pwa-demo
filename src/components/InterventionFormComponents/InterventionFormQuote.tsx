function InterventionFormQuote() {
  return (
    <figure className="max-w-screen-md mx-auto my-6 text-center">
      <svg className="w-5 h-5 mx-auto my-2 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
      </svg>
      <blockquote>
        <p className="text-base italic font-medium text-gray-600 dark:text-white">"Alguien inteligente aprende de la experiencia de los demás."</p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-2 space-x-3 rtl:space-x-reverse">
        <div className="flex items-center">
          <cite className="pe-3 font-medium text-base text-gray-900 dark:text-white">Voltaire</cite>
        </div>
      </figcaption>
    </figure>
  )
}

export default InterventionFormQuote
