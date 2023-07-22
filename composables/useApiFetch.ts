export const useApiFetch = (path, options = {}) => {
  const token = useCookie('XSRF-TOKEN');

  let headers = {}

  if (!token.value)
  {
    headers['X-XSRF-TOKEN'] = token.value
  }

  return useFetch('http://localhost:8000' + path, {
    credentials: 'include',
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  })
  //return ref()
}
