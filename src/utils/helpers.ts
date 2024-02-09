import { Intervention, Keyword } from "./types"

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

export const orderByKeywords = (interventions: Intervention[], keywords: Keyword[]) => {
  const keywordIndexMap = new Map();
  keywords.forEach((keyword, index) => {
    keywordIndexMap.set(keyword, index);
  });

  return interventions.sort((a, b) => {
    const indexA = a.keywords.findIndex(keyword => keywordIndexMap.has(keyword));
    const indexB = b.keywords.findIndex(keyword => keywordIndexMap.has(keyword));

    if (indexA === -1 && indexB === -1) {
      return 0;
    } else if (indexA === -1) {
      return 1;
    } else if (indexB === -1) {
      return -1;
    } else {
      return indexA - indexB;
    }
  });
}
