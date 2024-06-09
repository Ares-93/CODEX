import React, { useEffect, useState } from "react";
import axios from "axios";

const DndSpells: React.FC = () => {
  const [spells, setSpells] = useState<any[]>([]);

  useEffect(() => {
    const fetchSpells = async () => {
      const query = `
        {
          spells {
            index
            name
          }
        }
      `;

      const response = await axios.post("/graphql", { query });
      setSpells(response.data.data.spells);
    };

    fetchSpells();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">DnD Spells</h1>
      <ul>
        {spells.map((spell) => (
          <li key={spell.index}>{spell.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DndSpells;
