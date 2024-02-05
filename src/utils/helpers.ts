export const copyToClipboard = async (link: string) => {
  const type = 'text/plain';
  const blob = new Blob([link], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  await navigator.clipboard.write(data);
}
