const copyToClipboard = (link: string) => {
  navigator.clipboard.writeText(link)
}

export default copyToClipboard
