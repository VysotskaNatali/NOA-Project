import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
 
  public myLatLng = { lat: 49.8632811, lng: 24.0167166 }; // Map Options
  public mapOptions: google.maps.MapOptions = {
    center: this.myLatLng,
    zoom: 10,
  };

  public poligonGreen: google.maps.PolygonOptions = {
    strokeColor: '#1b5f37',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#27ae60',
    fillOpacity: 0.75,
  };

  public poligonYellow: google.maps.PolygonOptions = {
    strokeColor: '#c0930d',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#f2c94c',
    fillOpacity: 0.35,
    
  };
  public poligonRed: google.maps.PolygonOptions = {
    strokeColor: '#f81111',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#f81111',
    fillOpacity: 0.35,
  };

  public yellowZone = [
    {lat: 49.92432420290463, lng: 23.941872239648436},
    {lat: 49.85708400706529, lng: 24.10254728847656},
    {lat: 49.7764494549992, lng: 24.09156096035156},
    {lat: 49.753386329121525, lng: 24.00367033535156},
    {lat: 49.78177015672103, lng: 23.928139329492186},

  ];
  public redZone = [
   {lat: 49.86416633410499, lng: 23.88831389003906},
   {lat: 49.90221605653686, lng: 23.936379075585936},
   {lat: 49.799501609664794, lng: 23.925392747460936},
   {lat: 49.82165679801123, lng: 23.889687181054686}
  ];
  public redZone1=[
    {lat: 49.774675934079646, lng: 23.940890666472853},
    {lat: 49.7542735753125, lng: 23.993027329980467},
    {lat: 49.729424546069964, lng: 23.966591477929686},
    {lat: 49.74806251110496, lng: 23.93775236660156}
  ]
  public redZone2=[
    {lat: 49.75972328419061, lng: 24.03740397639677},
    {lat: 49.77421778177117, lng: 24.092419267236327},
    {lat: 49.85301458016744, lng: 24.10650871949138},
    {lat: 49.806568353983145, lng: 24.158145166141136},
    {lat: 49.769448162433584, lng: 24.12342146816245}
  ]
  public redZone3=[
    {lat: 49.91306198888444, lng: 23.969577349075458},
    {lat: 49.85863335481695, lng: 24.102537837194962},
    {lat: 49.903763956690796, lng: 24.127438188134764},
    {lat: 49.910176156815474, lng: 24.073708177148436},
    {lat: 49.93051266771684, lng: 24.017746568261717}
  ]

  public greenZone = [
    {lat: 49.87899159405291, lng: 24.013798356591796},
    {lat: 49.84557301132342, lng: 24.054482102929686},
    {lat: 49.81722657164825, lng: 24.038002610742186},
    {lat: 49.76580629873995, lng: 24.059975266992186},
    {lat: 49.77112816901159, lng: 23.977577806054686},
    {lat: 49.816340477698894, lng: 23.95972502285156}
  ];

  public markerOptions: google.maps.MarkerOptions = {
    icon: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi-dotless.png',
    title: `NOA Asia Special`,
  };
  
  public spots: { id: number; lat: number; lng: number }[] = [
    { id: 1, lat: 49.8074658, lng: 23.9761689 },
    { id: 2, lat: 49.840284, lng: 24.0285459},
    { id: 3, lat: 49.8405528, lng: 24.023328},
    { id: 4, lat: 49.8703795, lng: 24.020361,},
    { id: 5, lat: 49.7738939,lng: 24.0071498},
  
  ];

  
  constructor(public google: GoogleMapsModule,private toastr: ToastrService) {}

  ngOnInit(): void {
    
  }

  selectMarker(spot: { id: number; lat: number; lng: number }) {
    if (spot.id == 1) {
      this.toastr.success('м. Львів Кульпарківська 226 А')
    }
    if (spot.id == 2) {
      this.toastr.success('м. Львів Староєврейська 4')
    }
    if (spot.id == 3) {
      this.toastr.success('м. Львів Крива Липа 8')
    }
    if (spot.id == 4) {
      this.toastr.success('м. Львів Мазепи 1Б')
    }
    if (spot.id == 5) {
      this.toastr.success('м. Львів Стрийська 30')
    }
    
 
   
  }
  moveMap(event: google.maps.MapMouseEvent) {
    console.log(event.latLng?.toJSON())
  }
 
}
