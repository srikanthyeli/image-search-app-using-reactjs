import React from 'react';
import {analyzeImage} from "./utils/VisionAPI";
class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: null,ResponseProduct:[] };
        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange(event) {
        const {file} =this.state
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                file: URL.createObjectURL(img)
            });
            this.props.onFileUpload(img);
            
        }
        const response=analyzeImage(file);
        this.setState({ResponseProduct:response})
        
        
    }

    render() {
        const {file,ResponseProduct} =this.state
        return (
            <div>
                <h2>Upload your image</h2>
                <input type="file" onChange={this.onImageChange} />
                <img src={file} alt="Uploaded" />
                {ResponseProduct.map(each=>(
                    <img src={each.image} alt="name"/>
                ))}
            </div>
        );
    }
}

export default ImageUpload;