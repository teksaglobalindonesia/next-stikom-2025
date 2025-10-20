async function getData() {
  const res = await fetch('https://fakestoreapi.com/products/2');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.price} test</p>
    </div>
  )
}
