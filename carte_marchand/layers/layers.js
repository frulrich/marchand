var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_marchand_2 = new ol.format.GeoJSON();
var features_marchand_2 = format_marchand_2.readFeatures(json_marchand_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_marchand_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_marchand_2.addFeatures(features_marchand_2);
var lyr_marchand_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_marchand_2, 
                style: style_marchand_2,
                popuplayertitle: 'marchand',
                interactive: true,
                title: '<img src="styles/legend/marchand_2.png" /> marchand'
            });

lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleRoad_1.setVisible(true);lyr_marchand_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleRoad_1,lyr_marchand_2];
lyr_marchand_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'month_id': 'month_id', 'market_sim': 'market_sim', 'localisation': 'localisation', 'entreprise_nom': 'entreprise_nom', 'offer_type': 'offer_type', 'activity_area_label': 'activity_area_label', 'gps_latitude': 'gps_latitude', 'gps_longitude': 'gps_longitude', 'valeurs': 'valeurs', });
lyr_marchand_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'month_id': '', 'market_sim': '', 'localisation': '', 'entreprise_nom': '', 'offer_type': '', 'activity_area_label': '', 'gps_latitude': '', 'gps_longitude': '', 'valeurs': '', });
lyr_marchand_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'month_id': 'inline label - visible with data', 'market_sim': 'inline label - visible with data', 'localisation': 'inline label - visible with data', 'entreprise_nom': 'inline label - visible with data', 'offer_type': 'inline label - visible with data', 'activity_area_label': 'inline label - visible with data', 'gps_latitude': 'inline label - visible with data', 'gps_longitude': 'inline label - visible with data', 'valeurs': 'inline label - visible with data', });
lyr_marchand_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});