function myfun(url) {
  fetch(url)
    .then((res) => {
      if (res.ok) {
        res.json();
      } else {
        throw new Error("HEllo");
      }
    })
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
}
myfun("/12");
