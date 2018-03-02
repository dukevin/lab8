var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};


exports.addRSVP = function(req, res){
	var email = req.body.rsvpEmail;
	data.rsvp.push(email);
	res.send(email);
}