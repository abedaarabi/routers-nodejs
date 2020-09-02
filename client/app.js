

// fetch("/api").then(res=>res.json()).then(data=>console.log(data)).catch(e=>console.log(e, "API Error"))


async function git(api) {
  const response = await fetch(api)
  const data=  await response.json()
  console.log(data);

}

git("/api")