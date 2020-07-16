import React from 'react';

const Form = () => (
    <div className="Form">
        <div className="Form-head">
            <h2>Adopcion / Patrocinar</h2>
        </div>
        <div className="Form-item">
            <form>
                <input name="name" type="text" placeholder="Nombre de la Mascota"/>
                <input name="description" type="text" placeholder="Descripcion de la Mascota"/>                
                <select name="type">
                    <option disabled selected>Seleccione el Tipo</option>
                    <option value="cat">Gato</option>
                    <option value="dog">Perro</option>
                </select>
                <select name="gender">
                    <option disabled selected>Seleccione el Genero</option>
                    <option value="female">Hembra</option>
                    <option value="male">Macho</option>
                </select>
                <select name="adopt">
                    <option disabled selected>Seleccione el Tipo</option>
                    <option value="true">Adopcion</option>
                    <option value="False">Patrocinar</option>
                </select>
                <input type="file" name="photo"/>
                <button>Enviar</button>
            </form>
        </div>
    </div>
);

export default Form;