export const config = {
  runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1
};
 
export default function handler(request, response) {
  return response.status(200).json({ text: 'I am an Edge Function!' });
}
