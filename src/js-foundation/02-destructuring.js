//console.log(process.env); 


//const { PORT } = process.env; este codigo es para desestructurar el objeto process.env y obtener la variable PORT, pero no es recomendable hacerlo asi porque puede haber muchas variables de entorno y no queremos cargar todas en memoria, lo mejor es acceder a la variable directamente cuando la necesitemos, por ejemplo:
//console.table({ PORT });

const character = {
    name: 'Goku',
    power: 9000,
    friends: ['Vegeta', 'Gohan', 'Trunks']
};

const [, , thirdFriend] = character.friends; //desestructuramos el array de amigos y obtenemos el tercer amigo
console.log(thirdFriend); //imprime 'Trunks'