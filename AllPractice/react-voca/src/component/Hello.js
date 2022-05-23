export default function Hello() {
  const showName = () => {
    console.log('Geonhee');
  };
  const showAge = age => {
    console.log(age);
  };
  const showText = txt => {
    console.log(txt);
  };
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button onClick={() => showAge(30)}>Show age</button>
      <input type="text" onChange={e => showText(e.target.value)} />
    </div>
  );
}
