export interface Intervention {
  _id: number,
  author: string,
  description: string,
  text: string,
  pending: boolean,
  date: Date,
  managerApproval: boolean,
  comments?: Comment,
  votes: number
}

export interface Comment {
  _id: number,
  author: string,
  date: Date,
  text: string,
  votes: number,
  managerApproval: boolean,
  comments?: Comment
}
