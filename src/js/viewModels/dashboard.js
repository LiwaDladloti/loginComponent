/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojinputtext',
    'ojs/ojvalidation-number', 'ojs/ojbutton', 'ojs/ojknockout-validation', 'Login-component/loader'
  ],
  function(oj, ko, $) {

    function DashboardViewModel() {
      var self = this;
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additionaly available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      // var self = this;
      // self.user = ko.observable("demo");
      // self.password = ko.observable("demo");
      // self.aisurl = ko.observable("http://demo.steltix.com");
      // self.submittedValue = ko.observable("");
      // self.tracker = ko.observable();
      // self.storeCreds = ko.observable(true);
      //
      // var req = {};
      // //CAll AISURL using AJAX
      // self.callAIS = function() {
      //
      //   req.deviceName = 'JETLOGIN_' + $("#text-user").val(); // <<---- here change to a unique name
      //   req.username = self.user();
      //   req.password = self.password();
      //
      //   // authenticate with the system by getting a token
      //   $.ajax({
      //     url: self.aisurl() + "/jderest/tokenrequest", // <<- JD Edwards API token service
      //     type: 'post', // <<- the method that we using
      //     data: JSON.stringify(req), // <<- JSON of our request obj
      //     contentType: 'application/json', // <<- telling server how we are going to communicate
      //     fail: function(xhr, textStatus, errorThrown) {
      //
      //       console.log(errorThrown, textStatus, xhr); //  <<- log any http errors to the console
      //
      //     }
      //   }).done(function(data, textStatus, xhr) {
      //
      //     if (data.hasOwnProperty('userInfo')) { // <<- see example response below
      //
      //       var token = data.userInfo.token;
      //       localStorage.setItem('token', token);
      //       console.log("Login Token: "+token);
      //     }
      //   });
      //
      // };
      //
      // self.submitBt = function(data, event) {
      //   var tracker = self.tracker();
      //   // ensure that no component in the page is invalid, before submitting the form.
      //   if (tracker.invalidHidden || tracker.invalidShown) {
      //     tracker.showMessages();
      //     tracker.focusOnFirstInvalid();
      //     self.submittedValue("");
      //     return;
      //   }
      //   self.submittedValue(self.user() + " - " + self.password());
      //   if(self.storeCreds()){
      //
      //     localStorage.setItem('username', self.user());
      //   }
      //   this.callAIS();
      //   return true;
      // }
      //
      // $("input").keypress(function(e) {
      //   if ((e.which && e.which == $.ui.keyCode.ENTER) || (e.keyCode && e.keyCode == $.ui.keyCode.ENTER)) {
      //     //validate the element before submitting
      //     var valid = true;
      //     if (e.target.type === "password") {
      //       valid = $("#" + e.target.id).ojInputPassword("validate");
      //     } else if (e.target.type === "text") {
      //       valid = $("#" + e.target.id).ojInputText("validate");
      //     }
      //     if (valid) {
      //       self.submitBt();
      //       return false;
      //     }
      //     self.submittedValue("");
      //     return true;
      //   } else {
      //     return true;
      //   }
      // });
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View.
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
