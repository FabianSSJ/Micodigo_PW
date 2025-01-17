import React, { useState, useEffect } from "react";
import { getAutos, createAuto, updateAuto, deleteAuto } from "../services/service";

const RegisterAutos = () => {
  const [autos, setAutos] = useState([]);
  const [formData, setFormData] = useState({
    brand: "",
    npassengers: "",
    color: "",
    nengine: "",
    model: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchAutos();
  }, []);

  const fetchAutos = async () => {
    const data = await getAutos();
    setAutos(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateAuto(editingId, formData);
      setIsEditing(false);
      setEditingId(null);
    } else {
      await createAuto(formData);
    }
    setFormData({ brand: "", npassengers: "", color: "", nengine: "", model: "" });
    fetchAutos();
  };

  const handleEdit = (auto) => {
    setFormData(auto);
    setIsEditing(true);
    setEditingId(auto.id);
  };

  const handleDelete = async (id) => {
    await deleteAuto(id);
    fetchAutos();
  };

  return (
    <div>
      <h1>Gestión de Autos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Marca" required />
        <input type="number" name="npassengers" value={formData.npassengers} onChange={handleChange} placeholder="Pasajeros" required />
        <input type="text" name="color" value={formData.color} onChange={handleChange} placeholder="Color" required />
        <input type="text" name="nengine" value={formData.nengine} onChange={handleChange} placeholder="Motor" required />
        <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Modelo" required />
        <button type="submit">{isEditing ? "Actualizar" : "Registrar"}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Pasajeros</th>
            <th>Color</th>
            <th>Motor</th>
            <th>Modelo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto) => (
            <tr key={auto.id}>
              <td>{auto.brand}</td>
              <td>{auto.npassengers}</td>
              <td>{auto.color}</td>
              <td>{auto.nengine}</td>
              <td>{auto.model}</td>
              <td>
                <button onClick={() => handleEdit(auto)}>Editar</button>
                <button onClick={() => handleDelete(auto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisterAutos;
