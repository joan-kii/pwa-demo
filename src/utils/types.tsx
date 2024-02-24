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

export interface Message {
  _id: number,
  author: string,
  text: string,
  date: string,
  hour: string
}

export interface Draft {
  _id: number,
  author: string,
  description: string,
  text: string,
  date: string,
  hour: string
}

export interface User {
  _id: number,
  name: string,
  username: string,
  password: string,
  lastName: string,
  startDate: string,
  antiquity: string,
  email: string,
  image: string,
  rol: string,
  activeCompanies: Company[],
  inactiveCompanies: Company[], 
  hasBeenTeammate: boolean,
  hasBeenManager: boolean,
  totalInterventions: number,
  totalComments: number,
  totalInterventionVotesReceived: number,
  totalCommentVotesReceived: number,
  totalInterventionVotesGiven: number,
  totalCommentVotesGiven: number,
  totalInterventionApproveReceived: number,
  totalCommentApproveReceived: number,
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
  image: string,
  companyStartDate: string,
  companyAntiquity: string,
  companyInterventions: number,
  companyComments: number,
  companyInterventionsVotesReceived: number,
  companyCommentsVotesReceived: number,
  companyInterventionVotesGiven: number,
  companyCommentsVotesGiven: number,
  companyInterventionsApproveReceived: number,
  companyCommentsApproveReceived: number,
}

export interface Manager {
  _id: number,
  user: User,
  image: string,
  companyStartDate: string,
  companyAntiquity: string,
  companyComments: number,
  companyInterventions: number,
  companyInterventionsVotesReceived: number,
  companyInterventionVotesGiven: number,
  companyInterventionsApproveGiven: number,
  companyCommentsVotesReceived: number,
  companyCommentsVotesGiven: number,
  companyCommentsApproveGiven: number,
  companyInterventionsApproveReceived: number,
  companyCommentsApproveReceived: number,
}

export interface Chatbot {
  _id: number,
  user:  { name: string, lastName: string },
  image: string
}

export type Layout = 'recent' | 'pending' | 'new' | 'team' | 'chats' | 'intervention' | 'drafts' | 'none'

export type Keyword = string
