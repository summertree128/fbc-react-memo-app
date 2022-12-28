import useSWR from 'swr'

export default function Status() {

  const headers = { 'Accept' : 'application/json'};
  const fetcher = (url) => fetch(url, { headers }).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://httpstat.us/200?sleep=2000', fetcher)

  if (error) {
    console.log(error);
    return <div>failed to load</div>
  }
  if (isLoading) return <div>loading...</div>

  return <div>Status: {data.description}</div>;
}
