module.exports = function(app)
{
  // get campaign status data and render page
  app.get('/campaigns/:campaignId/status', function (req, res) {
    var campaignData = {goal: 10000, currentAmmount: 3450, backers: 123, timeRemaining: 123};
    res.render('campaign_status',campaignData);
  });

  app.post('/campaigns/:campaignId/status', function(request, response) {
  response.redirect('/campaigns/:campaignId/status');
});

}
