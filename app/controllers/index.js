
const index = function(req, res, next) {
    res.render('index', { title: 'Express' });
};

const resource = function(req, res, next) {
    res.send('respond with a resource');
};


module.exports = {
    index,
    resource
};
