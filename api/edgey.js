export const config = {
  runtime: 'edge',
};
 
export default function handler(request) {
  return Response.json({
    name: `Hello, from ${request.url} I'm an Edge Function!`,
  });
}
