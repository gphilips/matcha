import ipInfo from 'ipInfo';

const getLocation = async () => {
    ipInfo((err, cLoc) => {
        console.log(cLoc);
        return cLoc.loc;
    });
}

module.exports = { getLocation };
