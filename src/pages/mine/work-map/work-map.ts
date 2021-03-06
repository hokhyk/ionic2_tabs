import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapLocation } from '../../../shared/map-component/map-location/map-location';

/**
 * Generated class for the WorkMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-work-map',
  templateUrl: 'work-map.html',
})
export class WorkMapPage {

  params = Object.assign({}, MapLocation.defaultParams, { draggable: false });

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
