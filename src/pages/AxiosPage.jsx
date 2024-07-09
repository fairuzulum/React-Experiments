import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function AxiosPage() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=8"
        );
        const results = response.data.results;

        const pokemonData = await Promise.all(
          results.map(async (pokemon) => {
            try {
              const pokemonResponse = await axios.get(pokemon.url);
              return {
                name: pokemonResponse.data.name,
                image: pokemonResponse.data.sprites.front_default,
              }
            } catch (error) {
              console.error(
                `Error fetching details for ${pokemon.name}:`,
                error
              );
              return null;
            }
          })
        );

        setPokemons(pokemonData.filter((pokemon) => pokemon !== null));
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1 className="text-center my-4">Pokemon List</h1>
      <div className="row">
        {pokemons.map((pokemon, index) => (
          <div key={index} className="col-md-3 col-sm-4 col-xs-6 mb-4">
            <div className="card h-100">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="card-img-top"
                style={{ width: "100px", height: "100px", margin: "0 auto", paddingTop: "10px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{pokemon.name}</h5>
              
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>
    </div>
  );
}
