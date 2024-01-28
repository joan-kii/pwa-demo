export interface Intervention {
  _id: number,
  author: string,
  keywords: string[],
  description: string,
  text: string,
  pending: boolean,
  date: string,
  fakeDate: number,
  managerApprove: boolean,
  comments: Comment[],
  votes: number,
  edited?: boolean,
  editionDate?: string
}

export interface Comment {
  _id: number,
  author: string,
  date: string,
  text: string,
  votes: number,
  managerApprove: boolean,
  comments: Comment[]
}

export interface User {
  _id: number,
  name: string,
  username: string,
  password: string,
  lastName: string,
  startDate: string,
  email: string,
  image: string,
  rol: string,
  activeCompanies: Company[],
  inactiveCompanies: Company[], 
  hasBeenTeammate: boolean,
  hasBeenManager: boolean,
  interventions: number,
  comments: number,
  interventionsVotes: number,
  commentsVotes: number,
  votesGiven: number,
}

export interface Company {
  _id: number,
  name: string,
  logo: string,
  startDate: string,
  email: string,
  activeTeammateList: Teammate[],
  activeManagerList: Manager[],
  inactiveTeammateList: Teammate[],
  inactiveManagerList: Manager[],
}

export interface Teammate {
  _id: number,
  user: User,
  companyStartDate: string,
  companyInterventions: number,
  companyComments: number,
  votesReceived: number,
  votesGiven: number,
  interventionsApproved: number,
  commentsApproved: number,
}

export interface Manager {
  _id: number,
  user: User,
  companyStartDate: string,
  companyComments: number,
  companyInterventionsApproved: number
  companyCommentsApproved: number
}

export type Layout = 'recent' | 'pending' | 'new' | 'team' | 'chats' | 'intervention' | 'none'
