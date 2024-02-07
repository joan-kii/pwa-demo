export const copyToClipboard = async (link: string) => {
  const type = 'text/plain'
  const blob = new Blob([link], { type })
  const data = [new ClipboardItem({ [type]: blob })]
  await navigator.clipboard.write(data)
}


export const parseText = (text: string) => {
  const regex = /([^@&#$]*)(([@&#$])(\w+))(.*?)(?=[@&#$]|$)/g
  const groups = []
  const altGroups = []

  for (const match of text.matchAll(regex)) {
    const [, before, link, token, number, after] = match

    groups.push({
      before,
      after,
      linkId: number || token,
      link,
      token,
    })
  }

  if (groups.length > 0) {
    return groups
  } else {
    altGroups.push({
      before: text,
      after: '',
      linkId:'',
      link: '',
      token: ''
    })

    return altGroups
  }
}
