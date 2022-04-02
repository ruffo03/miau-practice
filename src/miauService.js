export default async function miauPhoto() {
  const response = await fetch("https://cataas.com/cat")
  const data = await response.blob()
  const url =URL.createObjectURL(data)
  return url
}