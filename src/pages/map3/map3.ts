import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google:any

/**
 * Generated class for the Map3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map3',
  templateUrl: 'map3.html',
})
export class Map3Page {
  @ViewChild('map') mapRef : ElementRef
  map:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Map3Page');
    this.showMaps()
  }
  // showMap(){
  //   const location = new google.maps.LatLng(19.0411429,99.9287478)
  //   const options = {
  //     center : location,
  //     zoom : 10,
  //     streetViewControl:false,
  //     mapTypeId:'roadmap'//roadmap,satellite,hybrid,terrain
  //   }
  //   this.map = new google.maps.Map(this.mapRef.nativeElement,options);
  //   this.addMarker(location,this.map)
  // }
  // addMarker(position,map){
  //   return new google.maps.Marker({
  //     position,
  //     map
  //   })
  // }
  showMaps(){

    var directionsService = new google.maps.DirectionsService
    var directionsDisplay = new google.maps.DirectionsRenderer

    const location = new google.maps.LatLng(19.0256616,99.8949247)
    const options = {
      center : location,
      zoom : 10,
      streetViewControl:false,
      mapTypeId:'roadmap'//roadmap,satellite,hybrid,terrain
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement,options)
    directionsDisplay.setMap(this.map)

    directionsService.route({
      origin: {lat:19.0256616,lng:99.8949247},
      destination: {lat:19.03447,lng:99.8843277},
      waypoints: [{location: new google.maps.LatLng(19.0315214,99.8935741)},{location: new google.maps.LatLng(19.0329806,99.8907556)},{location: new google.maps.LatLng(19.0310555,99.8898197)},{location: new google.maps.LatLng(19.0344557,99.8850354)}],
      travelMode: 'DRIVING'
    }, function(response, status) {
      if(status === 'OK'){
        directionsDisplay.setDirections(response)

      }else{
        window.alert('Directions request failed due to ' + status)
      }
    })
  }

}
