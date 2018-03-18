import ipInfo from 'ipInfo';

const getLocation = async (callback) => {
    ipInfo((err, cLoc) => {
        let lat;
        let lng;
        if (!err) {
          const loc = cLoc.loc.split(',');
          lat = parseFloat(loc[0]);
          lng = parseFloat(loc[1]);
        }
        else {
          lat = 0;
          lng = 0;
        }
        callback([lat, lng])
    })
}

module.exports = getLocation;
