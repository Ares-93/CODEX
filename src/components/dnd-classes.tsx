import React, { useEffect, useState } from "react";
import axios from "axios";

const DndClasses: React.FC = () => {
  const [classes, setClasses] = useState<any[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const query = `
        {
          classes {
            index
            name
          }
        }
      `;

      const response = await axios.post("/graphql", { query });
      setClasses(response.data.data.classes);
    };

    fetchClasses();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">DnD Classes</h1>
      <ul>
        {classes.map((dndClass) => (
          <li key={dndClass.index}>{dndClass.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DndClasses;
