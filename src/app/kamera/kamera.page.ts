import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-kamera',
  templateUrl: './kamera.page.html',
  styleUrls: ['./kamera.page.scss'],
})
export class KameraPage implements OnInit {

  constructor(private camera: Camera) { }
  public gambar:any;
  ngOnInit() {
  }

  ambilgambar(){
  	const options: CameraOptions = {
	  quality: 100,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE,
	  correctOrientation: true,
	  
	  saveToPhotoAlbum: true
	}

	this.camera.getPicture(options).then((imageData) => {
	 // imageData is either a base64 encoded string or a file URI
	 // If it's base64 (DATA_URL):
	 this.gambar = 'data:image/jpeg;base64,' + imageData;
	}, (err) => {
	 // Handle error
	});
  }

}
