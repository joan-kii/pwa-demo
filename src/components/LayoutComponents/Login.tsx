import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/fixloud-removebg.png'
import { Context } from '../../utils/context'
import { ssamperTeammate, manager } from '../../utils/users'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setActiveUser } = useContext(Context)
  const navigate = useNavigate()

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (password === ssamperTeammate.user.password && username === ssamperTeammate.user.username) {
      setActiveUser(ssamperTeammate)
      navigate('/team/intervention/recent', { replace: true })
    } else if (password === manager.user.password && username === manager.user.username) {
      setActiveUser(manager)
      navigate('/manager/intervention/recent')
    }

    setUsername('')
    setPassword('')
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-20 w-auto" src={logo} alt="Fixloud" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Accede a tu cuenta</h2>
      </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Usuario</label>
          <div className="mt-2">
            <input
              id="username"
              value={username}
              onChange={({ target }) => {setUsername(target.value)}}
              name="username"
              type="username"
              autoComplete="username"
              required
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">¿Has olvidado la contraseña?</a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              value={password}
              onChange={({ target }) => {setPassword(target.value)}}
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Acceder</button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        ¿Aún no eres miembro? 
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Empieza un prueba gratuita de 15 días</a>
      </p>
    </div>
  </div>
  )
}

export default Login
