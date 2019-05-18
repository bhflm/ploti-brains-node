const { campaign: Campaign } = require('../models');

exports.createCampaign = campaign => Campaign.create(campaign);
