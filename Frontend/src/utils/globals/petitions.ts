export const getDataApiJSON = async (url: string, body: any) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  });
  const resultado = await response.json();
  return resultado;
};
