const copyToClipboard = (link: string) => {
  navigator.clipboard.write([
    new ClipboardItem({
      'text/html': Promise.resolve(link)
    })
  ])
}

export default copyToClipboard
