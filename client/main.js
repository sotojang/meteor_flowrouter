import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.listdetail.onCreated(function listdetailOnCreated() {
  var address = FlowRouter.getParam('name');
  Meteor.subscribe('mywallet', address);
});

Template.listdetail.rendered = function () {
  var address = FlowRouter.getParam('name');
  console.log("We are on the post: ", address);
}
