import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare var google:any
/**
 * Generated class for the MapDivideJourneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-divide-journey',
  templateUrl: 'map-divide-journey.html',
})
export class MapDivideJourneyPage {

  @ViewChild('map') mapRef : ElementRef
  map:any


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapDivideJourneyPage');
    this.showMap()
  }
  showMap(){

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
      origin: {let: 19.0300657,lng: 99.9223755},
      destination: {let: 19.029064,lng: 99.9031958},
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
