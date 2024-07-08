import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AxiosPage() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const results = response.data.results;

        const pokemonData = await Promise.all(
          results.map(async (pokemon) => {
            try {
              const pokemonResponse = await axios.get(pokemon.url);
              return {
                name: pokemonResponse.data.name,
                image: pokemonResponse.data.sprites.front_default,
              };
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

  if (loading) return <p>Loading......</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Pokemon List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemons.map((pokemon, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              margin: "10px",
              padding: "10px",
              width: "150px",
              textAlign: "center",
            }}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={{ width: "100px", height: "100px" }}
            />
            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
