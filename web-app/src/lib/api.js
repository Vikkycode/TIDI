
export async function fetchAPI(path) {
  const res = await fetch(`http://localhost:1337/api${path}`);
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

