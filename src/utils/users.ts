import { Manager, Teammate, User } from './types'
import { company } from './company'

export const teamUser: User = {
  _id: 0,
  name: 'Sergio',
  lastName: 'Samper',
  username: 'ssamper',
  password: 'password1234',
  startDate: '10/5/2020',
  email: 'ssamper@fixloud.com',
  image: '/src/assets/teammate.jpg',
  rol: 'teammate',
  activeCompanies: [company],
  inactiveCompanies: [], 
  hasBeenTeammate: true,
  hasBeenManager: false,
  interventions: 26,
  comments: 12,
  interventionsVotes: 15,
  commentsVotes: 3,
  votesGiven: 16
}

export const managerUser: User = {
  _id: 1,
  name: 'Fernando',
  lastName: 'Fernández',
  username: 'ffernandez',
  password: 'password1234',
  startDate: '1/9/2016',
  email: 'ffernandez@fixloud.com',
  image: '/src/assets/manager.jpg',
  rol: 'manager',
  activeCompanies: [company],
  inactiveCompanies: [], 
  hasBeenTeammate: true,
  hasBeenManager: true,
  interventions: 26,
  comments: 12,
  interventionsVotes: 15,
  commentsVotes: 3,
  votesGiven: 16
}

export const teammate: Teammate = {
  _id: 0,
  user: teamUser,
  image: '/src/assets/teammate.jpg',
  companyStartDate: '5/9/2022',
  companyInterventions: 1,
  companyComments: 1,
  votesReceived: 6,
  votesGiven: 3,
  interventionsApproved: 1,
  commentsApproved: 0,
}

export const manager: Manager = {
  _id: 0,
  user: managerUser,
  image: '/src/assets/manager.jpg',
  companyStartDate: '26/12/2020',
  companyComments: 6,
  companyInterventionsApproved: 3,
  companyCommentsApproved: 3
}
