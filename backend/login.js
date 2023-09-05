
function log(message){
    console.log(__dirname);
    console.log(__filename);
    console.log(message);
}
function logout(hello){
    console.log(hello,'hello');
}
function name(myname){
    console.log(myname);
}
function hy(hy){
    console.log(hy);
}

module.exports.log=log
module.exports.logout=logout
module.exports.name=name
module.exports.hy=hy