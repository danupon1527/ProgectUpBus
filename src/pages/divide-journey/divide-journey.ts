import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MapDivideJourneyPage } from '../map-divide-journey/map-divide-journey';


declare var google:any

/**
 * Generated class for the DivideJourneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-divide-journey',
  templateUrl: 'divide-journey.html',
})
export class DivideJourneyPage {
  latlng : string
  @ViewChild('map') mapRef : ElementRef
  map:any

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    console.log('ionViewDidLoad DivideJourneyPage');
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.latlng = resp.coords.latitude+ ' , ' +resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ionViewDidLoad() {
    this.showMap()
    // console.log('ionViewDidLoad DivideJourneyPage');
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //   this.latlng = resp.coords.latitude+ ' , ' +resp.coords.longitude
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
  }
  showMap(){
    const location = new google.maps.LatLng(19.0411429,99.9287478)
    const options = {
      center : location,
      zoom : 10,
      streetViewControl:false,
      mapTypeId:'roadmap'//roadmap,satellite,hybrid,terrain
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location,this.map)
  }
  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    })
  }
  showMaps(){

    var directionsService = new google.maps.DirectionsService
    var directionsDisplay = new google.maps.DirectionsRenderer

    const location = new google.maps.LatLng(19.0300657,99.9223755)
    const options = {
      center : location,
      zoom : 10,
      streetViewControl:false,
      mapTypeId:'roadmap'//roadmap,satellite,hybrid,terrain
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement,options)
    directionsDisplay.setMap(this.map)

    directionsService.route({
      origin: {let:19.0300657,lng:99.9223755},
      destination: {let:19.029064,lng:99.9031958},
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
