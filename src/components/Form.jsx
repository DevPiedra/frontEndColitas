import React, { useState } from 'react';
// importar {storage, database} de las utilidades "mongo"

const Form = () => {
    const [petPhoto, setPetPhoto] = useState('');
    const [sendForm, setSendForm] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        const form = new FormData(event.target);
        const newDate = new Date().toISOString();
        const data = {
            'adopt': form.get('adopt'),
            'date': newDate,
            'description': form.get('description'),
            'gender': form.get('gender'),
            'name': form.get('name'),
            'photo': petPhoto,
            'profilePic': '',
            'type': form.get('type'),
            'userContact': '',
            'userName': '',
        }
        database.ref('').push(data)
            .then(() => setSendForm(true))
            .catch(() => setSendForm(false))
    }
    const onChange = event => {
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const name = (+new Date()) + file.name;
        const uploadFile = storageRef.child(name).put(file);
        uploadFile
            .then((snapshot) => {
                snapshot.ref.getDownloadURL()
                    .then(downloadURL => setPetPhoto(downloadURL));
            });
    }
    return (
        <div className="Form">
            <div className="Form-head">
                <h2>Adopcion / Patrocinar</h2>
            </div>
            {sendForm &&
            <div className="Form-send">
                <span>Guardado con Exito!</span>
            </div>
            }
            {!sendForm &&
                <div className="Form-item">
                    <form onSubmit={handleSubmit}>
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
                        <input type="file" onChange={onChange} name="photo"/>
                        <button>Enviar</button>
                    </form>
                </div>
            }
        </div>
    );
}

export default Form;