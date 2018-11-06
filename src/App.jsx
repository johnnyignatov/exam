import React, { Component } from 'react';
import Positioning from './components/Positioning';
import Modal from './components/Modal';
import Field from './components/Field';
import Button from './components/Button';
import File from './components/File';
import Image from './components/Image';
import uuid from 'uuid/v4';
import logo from './logo.svg';
import image1 from './img/reactjs.png';
import image2 from './img/nodejs.png';
import image3 from './img/angular.png';
import edit from './img/edit.svg';
import './App.scss';
// import '../node_modules/rodal/lib/rodal.css';
import Masonry from '../node_modules/react-masonry-component';
const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class App extends Component {
  constructor() {
    super();
    this.state = {
      newImage: {},
      data: [
        {
          src: image1,
          alt: 'asdasdasd',
          id: uuid()
        },
        {
          src: image2,
          alt: 'asdasdasd',
          id: uuid()
        },
        {
          src: image3,
          alt: 'asdasdasd',
          id: uuid()
        },
      ]
    };
    this.editImage = this.editImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.addImage = this.addImage.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.saveImage = this.saveImage.bind(this);
  }
  componentWillMount() {
    this.setState({ data: JSON.parse(localStorage.getItem('images') || []) });
  }
  editImage() {
    let choosen = {
      ...this.state.choosen
    }
    this.setState(state => ({edit: !state.edit, changed: !state.changed, data: state.data.map(x => x.id === this.state.choosen.id ? x = this.state.choosen : x )}));
  }
  deleteImage() {
    this.setState(state => ({data: state.data.filter(x => x.id !== this.state.choosen.id), edit: !state.edit, changed: !state.changed}));
    localStorage.setItem('images', JSON.stringify(this.state.data.filter(x => x.id !== this.state.choosen.id)))
  }
  addImage() {
    this.setState({add: true})
  }
  handleFile(e, files, result) {
    this.setState(state => ({
      newImage: {
        ...state.newImage,
        src: result
      },
      changed: true
    }))
  }
  saveImage() {
    this.setState(state => ({
      data: [
        ...state.data, 
        {
          ...state.newImage,
          id: uuid()
        }
      ],
      changed: false,
      add: false,
      newImage: {}
    }));
    localStorage.setItem('images', JSON.stringify([...this.state.data, {...this.state.newImage,id: uuid()}]))
  }
  render() {
    const {data} = this.state;
    return (
     <div className='admin'>
      <aside className='sidebar'>
      <ul>
        <li onClick={this.addImage}>Add new image</li>
      </ul>
      </aside>
      <main className='content'>
      <Masonry
        className={'image-gallery'} 
        elementType={'ul'} 
        options={masonryOptions} 
        disableImagesLoaded={false} 
        updateOnEachImageLoad={false}
        imagesLoadedOptions={imagesLoadedOptions}
      >
      {
        data.map(x => (
          <Image 
            alt={x.alt}
            src={x.src}
            position={x.position}
            onClick={() => this.setState(state => ({choosen: x, edit: true}))}
          />
        ))
      }
      </Masonry>
      </main>
      {
        this.state.edit &&
        <Modal>
          <img style={{width: `50%`, height: 'auto'}} src={this.state.choosen.src} alt='' />
            <Field placeholder='enter tooltip' onChange={alt => this.setState(state => ({changed: true, choosen: {...state.choosen, alt}}))} defaultValue={this.state.choosen.alt} />
            <Positioning onClick={position => this.setState(state => ({choosen: {...state.choosen, position}, changed: true}))} />
            {this.state.changed && <Button onClick={this.editImage}>save</Button>}
            <Button onClick={() => this.setState(state => ({edit: !state.edit}))}>close</Button>
            <Button onClick={this.deleteImage}>delete</Button>
        </Modal>
      }
      {
        this.state.add &&
        <Modal>
            {!this.state.newImage.src ? <File onChange={(e, files, result) => this.handleFile(e, files, result)} /> : <p>1 image selected</p>}
            <Field placeholder='enter tooltip' onChange={alt => this.setState(state => ({newImage: { ...state.newImage, alt }}))} defaultValue={this.state.newImage.alt} />
            <Positioning onClick={position => this.setState(state => ({newImage: {...state.newImage, position}}))} />
            {this.state.changed && <Button onClick={this.saveImage}>save</Button>}
            <Button onClick={() => this.setState(state => ({add: !state.add}))}>close</Button>
        </Modal>
      }
     </div>
    );
  }
}

export default App;
