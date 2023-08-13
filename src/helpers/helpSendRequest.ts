export const helpSendRequest = async (url: string, headers: any, method: string, body: any) => {
  try {
    const options = method === 'GET' ? { method: method, headers: headers } : { method: method, headers: headers, body: body }

    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    return error;
  }
};