import Directory from '../../directory/directory.component';

const Home = () =>{
  const categoriesList = [
    {
      "id": 1,
      "name": "HATS",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "name": "JACKETS",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "name": "SNEAKERS",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "name": "WOMENS",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "name": "MENS",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  ;

  return (
    <Directory Categories={categoriesList}/>
  );
}


export default Home;