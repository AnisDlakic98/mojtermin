(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{327:function(t,e,a){"use strict";a.r(e);var n={data:function(){return{salon:{},mapIcon:"./theme/img/location-white.svg",currentHotelThumb:"",startLocation:{lat:41.9311,lng:19.2148},markerOptions:{url:"/img/map-marker.ico"},mapStyle:{styles:[{featureType:"administrative",elementType:"all",stylers:[{saturation:-99}]},{featureType:"landscape",elementType:"all",stylers:[{saturation:-99}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-99}]},{featureType:"road",elementType:"all",stylers:[{saturation:-99}]},{featureType:"transit",elementType:"all",stylers:[{saturation:-99}]}]},zoom:14}},methods:{loadUserProfile:function(){var t=this;axios.get("/api/profile").then((function(e){var a=e.data;t.salon=a.salon,t.startLocation.lat=parseFloat(a.salon.latitude),t.startLocation.lng=parseFloat(a.salon.longitude)}))}},mounted:function(){this.loadUserProfile()}},o=a(1),s=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("GmapMap",{ref:"mymap",staticStyle:{width:"100%",height:"70vh"},attrs:{id:"googleMap",center:this.startLocation,zoom:14,options:this.mapStyle}},[this._v("\n    >\n    "),e("GmapMarker",{attrs:{position:this.startLocation,icon:this.markerOptions,clickable:!0,animation:2}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);