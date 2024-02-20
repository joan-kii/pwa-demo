function UserPic({ userPic }: { userPic: string}) {
  return (
    <div className="border-gray-700 sm:pb-3 sm:pt-4">
      <div className="flex items-center sm:px-2">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={userPic} alt="" />
        </div>
      </div>
    </div>
  )
}

export default UserPic
