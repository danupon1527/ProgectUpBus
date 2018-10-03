import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare var google:any

/**
 * Generated class for the Map2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map2',
  templateUrl: 'map2.html',
})
export class Map2Page {
  @ViewChild('map') mapRef : ElementRef
  map:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Map2Page');
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

    const location = new google.maps.LatLng(19.0306706,99.9233012)
    const options = {
      center : location,
      zoom : 10,
      streetViewControl:false,
      mapTypeId:'roadmap'//roadmap,satellite,hybrid,terrain
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement,options)
    directionsDisplay.setMap(this.map)

    directionsService.route({
      origin: {lat:19.0306706,lng:99.9233012},
      destination: {lat:19.0256616,lng:99.8949247},
      waypoints: [{location: new google.maps.LatLng(19.0299622,99.9156149)},{location: new google.maps.LatLng(19.0286504,99.9062089)},{location: new google.maps.LatLng(19.0299203,99.9000105)},{location: new google.maps.LatLng(19.0298825,99.8976647)},{location: new google.maps.LatLng(19.0289796,99.8960322)}],
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
