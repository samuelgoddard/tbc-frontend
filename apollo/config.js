export default function(context){
  return {
    httpEndpoint: 'https://graphql.datocms.com',
    getAuth: () => 'BEARER ' + process.env.DATO_KEY
  }
 }

 console.log(process.env.DATO_KEY)
 