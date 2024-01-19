export interface Intervention {
  _id?: number,
  author: string,
  keywords: string[],
  description: string,
  text: string,
  pending: boolean,
  date: string,
  fakeDate: number,
  managerPraise: boolean,
  comments: Comment[],
  votes: number,
  edited?: boolean,
  editionDate?: string
}

export interface Comment {
  _id?: number,
  author: string,
  date: string,
  text: string,
  votes: number,
  managerPraise?: boolean,
  comments: Comment[]
}

export interface User {
  _id?: number,
  name: string,
  lastName: string,
  startDate: string,
  email: string,
  image: string,
  rol: Teammate | Manager,
  manager?: Manager,
  teammate?: Teammate,
  activeCompanies: Company[],
  inactiveCompanies?: Company[], 
  hasBeenTeammate: boolean,
  hasBeenManager: boolean,
  interventionsVoted?: Intervention[],
  commentsVoted?: Comment[],
}

export interface Company {
  _id?: number,
  name: string,
  logo: string,
  startDate: number,
  email: string,
  activeTeammateList: Teammate[],
  activeManagerList: Manager[],
  inactiveTeammateList?: Teammate[],
  inactiveManagerList?: Manager[],
}

export interface Teammate {
  _id?: number,
  user: User,
  startDate: number,
  interventions: number,
  comments: number,
  votesReceived: number,
  votesGiven: number,
  managerInterventionsApproved: number,
  managerCommentsApproved: number,
}

export interface Manager {
  _id?: number,
  user: User,
  startDate: number,
  comments: number,
  interventionsApproved: number
}

export type Layout = 'recent' | 'pending' | 'new' | 'team' | 'chats' | 'intervention' | 'none'
