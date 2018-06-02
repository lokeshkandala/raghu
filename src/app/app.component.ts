import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() { }
chan()
{
  console.log(10000);
}
  previewFile(event:any) {
    console.log(100);
    var preview = document.querySelector('#preview'); 
    var file   = event.target.files[0]; 
    var reader = new FileReader();

    reader.onloadend = function () {
      preview.setAttribute("src",  reader.result);      
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
      preview.setAttribute("src","");        
    }
  }
   elephant = document.getElementById("preview");

// Take action when the image has loaded
imageloaded(event:any)  {
  console.log(event);
 let elephant=event.target;
    var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");

    // Make sure canvas is as big as the picture
    imgCanvas.width = elephant.width;
    imgCanvas.height = elephant.height;

    // Draw image into canvas element
    imgContext.drawImage(elephant, 0, 0, elephant.width, elephant.height);

    // Get canvas contents as a data URL
    var imgAsDataURL = imgCanvas.toDataURL("image/png");

    // Save image into localStorage
    try {
        localStorage.setItem("elephant",JSON.stringify( imgAsDataURL));
        
        
    }
    catch (e) {
        console.log("Storage failed: " + e);
    }
    let storageFiles = JSON.parse(localStorage.getItem("elephant")) || {};
    document.getElementById('image101').setAttribute("src", storageFiles);

}; 

}
