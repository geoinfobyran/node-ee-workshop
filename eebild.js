
const https = require('https')
require('ee-runner')

module.exports = (req, res) => {
    gee.initialize(() => {

        const lat = parseFloat(req.query.lat)
        const lng = parseFloat(req.query.lng)

        console.log(lat, lng)
        

        var image = ee.Image(
            ee.ImageCollection('LANDSAT/LC8_L1T_TOA')
            .filterBounds(ee.Geometry.Point([lng, lat]))
            .first())
        
        var url = image
            .visualize({ bands: ['B6', 'B5', 'B3'], gamma: 1.5})
            .getThumbURL({dimensions: '1024x768', format: 'jpg'})

        print(url)
        https.get(url, (file) => file.pipe(res))

    })
}
