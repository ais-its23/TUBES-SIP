var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PETA_RAWAN_BANJIR_ASAHAN_1 = new ol.format.GeoJSON();
var features_PETA_RAWAN_BANJIR_ASAHAN_1 = format_PETA_RAWAN_BANJIR_ASAHAN_1.readFeatures(json_PETA_RAWAN_BANJIR_ASAHAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETA_RAWAN_BANJIR_ASAHAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETA_RAWAN_BANJIR_ASAHAN_1.addFeatures(features_PETA_RAWAN_BANJIR_ASAHAN_1);
var lyr_PETA_RAWAN_BANJIR_ASAHAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETA_RAWAN_BANJIR_ASAHAN_1, 
                style: style_PETA_RAWAN_BANJIR_ASAHAN_1,
                popuplayertitle: "PETA_RAWAN_BANJIR_ASAHAN",
                interactive: true,
    title: 'PETA_RAWAN_BANJIR_ASAHAN<br />\
    <img src="styles/legend/PETA_RAWAN_BANJIR_ASAHAN_1_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/PETA_RAWAN_BANJIR_ASAHAN_1_1.png" /> Rendah<br />\
    <img src="styles/legend/PETA_RAWAN_BANJIR_ASAHAN_1_2.png" /> Sedang<br />\
    <img src="styles/legend/PETA_RAWAN_BANJIR_ASAHAN_1_3.png" /> Tinggi<br />\
    <img src="styles/legend/PETA_RAWAN_BANJIR_ASAHAN_1_4.png" /> Sangat Tinggi<br />'
        });
var format_polygon_new_2 = new ol.format.GeoJSON();
var features_polygon_new_2 = format_polygon_new_2.readFeatures(json_polygon_new_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygon_new_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygon_new_2.addFeatures(features_polygon_new_2);
var lyr_polygon_new_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygon_new_2, 
                style: style_polygon_new_2,
                popuplayertitle: "polygon_new",
                interactive: true,
    title: 'polygon_new<br />\
    <img src="styles/legend/polygon_new_2_0.png" /> 2000m<br />\
    <img src="styles/legend/polygon_new_2_1.png" /> 3000m<br />'
        });
var format_JALAN_LN_50K_3 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_3 = format_JALAN_LN_50K_3.readFeatures(json_JALAN_LN_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_3.addFeatures(features_JALAN_LN_50K_3);
var lyr_JALAN_LN_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_3, 
                style: style_JALAN_LN_50K_3,
                popuplayertitle: "JALAN_LN_50K",
                interactive: true,
    title: 'JALAN_LN_50K<br />\
    <img src="styles/legend/JALAN_LN_50K_3_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JALAN_LN_50K_3_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JALAN_LN_50K_3_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/JALAN_LN_50K_3_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JALAN_LN_50K_3_4.png" /> Jalan Setapak<br />'
        });
var format_permukiman_new_2_4 = new ol.format.GeoJSON();
var features_permukiman_new_2_4 = format_permukiman_new_2_4.readFeatures(json_permukiman_new_2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_permukiman_new_2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_permukiman_new_2_4.addFeatures(features_permukiman_new_2_4);
var lyr_permukiman_new_2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_permukiman_new_2_4, 
                style: style_permukiman_new_2_4,
                popuplayertitle: "permukiman_new_2",
                interactive: true,
                title: '<img src="styles/legend/permukiman_new_2_4.png" /> permukiman_new_2'
            });
var format_IndustriPersampahan_5 = new ol.format.GeoJSON();
var features_IndustriPersampahan_5 = format_IndustriPersampahan_5.readFeatures(json_IndustriPersampahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndustriPersampahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndustriPersampahan_5.addFeatures(features_IndustriPersampahan_5);
var lyr_IndustriPersampahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndustriPersampahan_5, 
                style: style_IndustriPersampahan_5,
                popuplayertitle: "Industri Persampahan",
                interactive: true,
    title: 'Industri Persampahan<br />\
    <img src="styles/legend/IndustriPersampahan_5_0.png" /> 1<br />\
    <img src="styles/legend/IndustriPersampahan_5_1.png" /> 2<br />\
    <img src="styles/legend/IndustriPersampahan_5_2.png" /> 3<br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr_PETA_RAWAN_BANJIR_ASAHAN_1.setVisible(true);lyr_polygon_new_2.setVisible(true);lyr_JALAN_LN_50K_3.setVisible(true);lyr_permukiman_new_2_4.setVisible(true);lyr_IndustriPersampahan_5.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_PETA_RAWAN_BANJIR_ASAHAN_1,lyr_polygon_new_2,lyr_JALAN_LN_50K_3,lyr_permukiman_new_2_4,lyr_IndustriPersampahan_5];
lyr_PETA_RAWAN_BANJIR_ASAHAN_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NB_Lereng': 'NB_Lereng', 'NB_Land': 'NB_Land', 'NB_Tanah': 'NB_Tanah', 'NB_CH': 'NB_CH', 'NB_Elev': 'NB_Elev', 'NB_s': 'NB_s', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Total': 'Total', 'TK_Rawan': 'TK_Rawan', 'Nilai_Rent': 'Nilai_Rent', });
lyr_polygon_new_2.set('fieldAliases', {'ObjectID': 'ObjectID', 'FacilityID': 'FacilityID', 'Name': 'Name', 'FromBreak': 'FromBreak', 'ToBreak': 'ToBreak', 'Jangkauan': 'Jangkauan', });
lyr_JALAN_LN_50K_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_permukiman_new_2_4.set('fieldAliases', {'Id': 'Id', 'nomor': 'nomor', 'Jangkauan': 'Jangkauan', });
lyr_IndustriPersampahan_5.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'alternatif': 'alternatif', 'Kecamatan': 'Kecamatan', 'Deskripsi': 'Deskripsi', });
lyr_PETA_RAWAN_BANJIR_ASAHAN_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NB_Lereng': 'TextEdit', 'NB_Land': 'TextEdit', 'NB_Tanah': 'TextEdit', 'NB_CH': 'TextEdit', 'NB_Elev': 'TextEdit', 'NB_s': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Total': 'TextEdit', 'TK_Rawan': 'TextEdit', 'Nilai_Rent': 'TextEdit', });
lyr_polygon_new_2.set('fieldImages', {'ObjectID': 'TextEdit', 'FacilityID': 'TextEdit', 'Name': 'TextEdit', 'FromBreak': 'TextEdit', 'ToBreak': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_JALAN_LN_50K_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_permukiman_new_2_4.set('fieldImages', {'Id': 'TextEdit', 'nomor': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_IndustriPersampahan_5.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'alternatif': 'TextEdit', 'Kecamatan': 'TextEdit', 'Deskripsi': 'TextEdit', });
lyr_PETA_RAWAN_BANJIR_ASAHAN_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NB_Lereng': 'hidden field', 'NB_Land': 'hidden field', 'NB_Tanah': 'hidden field', 'NB_CH': 'hidden field', 'NB_Elev': 'hidden field', 'NB_s': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Total': 'hidden field', 'TK_Rawan': 'inline label - always visible', 'Nilai_Rent': 'inline label - always visible', });
lyr_polygon_new_2.set('fieldLabels', {'ObjectID': 'hidden field', 'FacilityID': 'hidden field', 'Name': 'hidden field', 'FromBreak': 'hidden field', 'ToBreak': 'hidden field', 'Jangkauan': 'inline label - always visible', });
lyr_JALAN_LN_50K_3.set('fieldLabels', {'NAMRJL': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_permukiman_new_2_4.set('fieldLabels', {'Id': 'hidden field', 'nomor': 'inline label - always visible', 'Jangkauan': 'hidden field', });
lyr_IndustriPersampahan_5.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'alternatif': 'hidden field', 'Kecamatan': 'inline label - always visible', 'Deskripsi': 'inline label - always visible', });
lyr_IndustriPersampahan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});