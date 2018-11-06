import React from 'react';
import './style.scss';
const File = props => (
    <div>
        <input accept="image/*" type="file" name="file" id="file" className="inputfile" onChange={e => {
        let files = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => props.onChange(e, files, reader.result)

    }} />
        <label htmlFor="file">Choose a file</label>
    </div>
    // <div class="file_upload">
    //     <button type="button">Выбрать</button>
    //     <div>Файл не выбран</div>
    //     <input accept="image/*" type="file" onChange={e => {
    //     let files = e.target.files[0];
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => props.onChange(e, files, reader.result)

    // }} />
    // </div>
)

export default File;