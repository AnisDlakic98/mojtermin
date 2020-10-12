<template>
    <!-- google_map_start -->
    <GmapMap
            ref="mymap"
            id="googleMap"
            :center="startLocation"
            :zoom="14"
            :options="mapStyle"
            style="width: 100%; height: 400px">
        >
        <GmapMarker :position="startLocation"
                    :icon="markerOptions"
                    :clickable="true"
                    :animation="2">
        </GmapMarker>
    </GmapMap>
    <!-- google_map_end -->
</template>

<script>
    export default {
        data(){
            return {
                mapIcon: "./theme/img/location-white.svg",
                currentHotelThumb: "",
                startLocation: {
                    lat: 42.2842,
                    lng: 18.8745
                },
                markerOptions: {
                    url: "/img/map-marker.ico",
                },
                mapStyle: {
                    styles: [
                        {
                            featureType: "administrative",
                            elementType: "all",
                            stylers: [
                                { saturation: -99 }
                            ]
                        },{
                            featureType: "landscape",
                            elementType: "all",
                            stylers: [
                                { saturation: -99 }
                            ]
                        },{
                            featureType: "poi",
                            elementType: "all",
                            stylers: [
                                { saturation: -99 }
                            ]
                        },{
                            featureType: "road",
                            elementType: "all",
                            stylers: [
                                { saturation: -99 }
                            ]
                        },{
                            featureType: "transit",
                            elementType: "all",
                            stylers: [
                                { saturation: -99 }
                            ]
                        }
                    ]
                },
                zoom: 14
            }
        }
    }
</script>
