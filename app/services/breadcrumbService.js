const { breadcrumb: Breadcrumb } = require('../models');

exports.createBreadcrumb = bread => Breadcrumb.create(bread);
